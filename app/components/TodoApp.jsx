var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      todos: [
        {
          id: 1,
          text: "Walk a dog"
        },
        {
          id: 2,
          text: "Clean the yard"
        },
        {
          id: 3,
          text: "Funk you"
        }
      ]
    };
  },
  handleAddTodo: function(newTodo) {
    alert('new todo: ' + newTodo);
  },
  render: function() {
    var {todos} = this.state;
    return(
      <div>
        <TodoList todos={todos} />
        <AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    );
  }
});


module.exports = TodoApp;
