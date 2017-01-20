var React = require('react');
var AddTodo = require('./AddTodo');

var NewTodo = React.createClass({
  propTypes: {
    addTodo: React.PropTypes.func.isRequired
  },
  render: function() {
    return (
      <div>
        <h3>Add New Todo</h3>
        <AddTodo addTodo={this.props.addTodo} />
      </div>
    )
  }
});

module.exports = NewTodo;
