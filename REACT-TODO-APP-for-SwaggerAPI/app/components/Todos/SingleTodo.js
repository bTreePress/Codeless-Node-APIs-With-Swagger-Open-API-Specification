var React = require('react');
var Axios = require('axios');
var todo = '';

var SingleTodo = React.createClass({
  propTypes: {
    todo: React.PropTypes.object.isRequired
  },
  handleTodoChange: function(event) {
    var updatedTodo = this.props.todo;
    updatedTodo.todo = event.target.value
    this.props.displayTodo(updatedTodo);
  },
  handleAuthorChange: function(event) {
    var updatedTodo = this.props.todo;
    updatedTodo.author = event.target.value
    this.props.displayTodo(updatedTodo);
  },
  handleDateChange: function(event) {
    var updatedTodo = this.props.todo;
    updatedTodo.duedate = event.target.value
    this.props.displayTodo(updatedTodo);
  },
  handleCompleted: function(event) {
    var updatedTodo = this.props.todo;
    updatedTodo.completed = event.target.value
    this.props.displayTodo(updatedTodo);
  },
  handleUpdate: function() {
    // handle update Elasticsearch
    Axios.put('http://localhost:10010/todo/' + this.props.todo.todo_id, this.props.todo)
      .then(function(res) {
        console.log(res);
      });
  },
  render: function() {
    return (
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Todo" value={this.props.todo.todo} onChange={this.handleTodoChange} />
        <input type="text" className="form-control" placeholder="Author" value={this.props.todo.author} onChange={this.handleAuthorChange} />
        <input type="datetime" className="form-control" placeholder="Due Date" value={this.props.todo.duedate} onChange={this.handleDateChange} />
        <input type="checkbox" className="form-control" checked={this.props.todo.completed} onChange={this.handleCompleted} />
        <button className="btn btn-default" type="button" onClick={this.handleUpdate}>Save</button>
      </div>
    )
  }
});

module.exports = SingleTodo;
