var React = require('react');
var Router = require('react-router');
var AllTodos = require('./Todos/AllTodos');
var SingleTodo = require('./Todos/SingleTodo');
var NewTodo = require('./Todos/NewTodo');
var Axios = require('axios');

var Todo = React.createClass({
  getInitialState: function() {
    return {
      // Define default schema from API
      todos: [
        {
          todo_id: '',
          todo: '',
          author: '',
          duedate: '',
          completed: ''
        }
      ],
      todo: {
        todo_id: '',
        todo: '',
        author: '',
        duedate: '',
        completed: ''
      }
    }
  },
  componentDidMount: function() {
    // get Todos from Elasticsearch
    var _this = this;
    Axios.get('http://localhost:10010')
      .then(function(res){
        _this.setState({todos: res.data});
      })
  },
  handleAddTodo: function(newtodo) {
    // post new note to Elasticsearch
    newtodo.todo_id = this.state.todos.length;
    Axios.post('http://localhost:10010', newtodo)
      .then(function(res){
        console.log(res);
      })
  },
  displayTodo: function(todo){
    this.setState({todo: todo});
  },
  render: function() {
    return (
      <div className="row">
        <div className="row-md-4">
          <AllTodos todos={this.state.todos} displayTodo={this.displayTodo} />
        </div>
        <div className="row-md-4">
          <SingleTodo todo={this.state.todo} displayTodo={this.displayTodo} />
        </div>
        <div className="row-md-4">
          <NewTodo addTodo={this.handleAddTodo} />
        </div>
      </div>
    )
  }
})

module.exports = Todo;
