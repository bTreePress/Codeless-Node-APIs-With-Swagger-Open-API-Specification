var React = require('react');

var AllTodos = React.createClass({
  propTypes: {
    displayTodo: React.PropTypes.func.isRequired
  },
  handleSelect: function(todo){
    this.props.displayTodo(todo);
  },
  render: function() {
    var _this = this;
    var todos = this.props.todos.map(function(todo, index){
      return (
        <li className="list-group-item" key={index}>
          <div>
            <span className="input-group-btn">
              <button className="btn btn-link" type="button" onClick={_this.handleSelect.bind(_this,todo)}>{todo.todo}</button>
            </span>
          </div>
          <div>
            Due date:  <span className="text-info">{todo.duedate}</span>
          </div>
        </li>
      )
    });
    return (
      <ul className="list-group">
        {todos}
      </ul>
    )
  }
});

module.exports = AllTodos;
