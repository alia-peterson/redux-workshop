import React from 'react'
import ToDo from '../components/ToDo'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const ToDoList = ({ todos, active, completed, display }) => {
  const displayTodos = () => {
    if (display === 'active') {
      return active.map(todo => {
        return (
          <ToDo
            key={todo.id}
            id={todo.id}
            text={todo.text}
            completed={todo.completed}
            />
        )
      })

    } else {
      return todos.map(todo => {
        return (
          <ToDo
            key={todo.id}
            id={todo.id}
            text={todo.text}
            completed={todo.completed}
            />
        )
      })
    }
  }

  return (
    <section>
      <div className='button-container'>
        <button>Show All</button>
        <button>Show Active</button>
        <button>Show Completed</button>
      </div>
      <ul>{displayTodos()}</ul>
    </section>
  )
}

ToDoList.propTypes = {
  todos: PropTypes.array,
  display: PropTypes.string,
  completed: PropTypes.array,
  active: PropTypes.array
}

const mapStateToProps = (state) => ({
  todos: state.todos.todos,
  display: state.todos.display,
  completed: state.todos.completed,
  active: state.todos.active,
})

export default connect(mapStateToProps)(ToDoList)
