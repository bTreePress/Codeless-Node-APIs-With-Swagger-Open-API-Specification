var React = require('react');
var newTodo = {
  todo: '',
  datecreated: new Date(),
  author: '',
  duedate: new Date(),
  completed: false
}

var AddTodo = React.createClass({
  propTypes: {
    addTodo: React.PropTypes.func.isRequired
  },
  setRef: function(ref) {
    this.todo = ref;
  },
  setTodo: function(ref) {
    console.log(ref);
    newTodo.todo = ref.value
  },
  handleTodo: function(event) {
    newTodo.todo = event.target.value;
  },
  handleAuthor: function(event) {
    newTodo.author = event.target.value;
  },
  handleDate: function(event) {
    newTodo.duedate = new Date(event.target.value);
  },
  handleSubmit: function() {
    this.props.addTodo(newTodo);
  },
  render: function() {
    return (
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Add New Todo" onChange={this.handleTodo} />
        <input type="text" className="form-control" placeholder="Author" onChange={this.handleAuthor} />
        <input type="date" className="form-control" onChange={this.handleDate} />
        <span className="input-group-btn">
          <button className="btn btn-default" type="button" onClick={this.handleSubmit}>Submit</button>
        </span>
      </div>
    )
  }
});

module.exports = AddTodo;
