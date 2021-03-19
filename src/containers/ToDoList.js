import React from 'react'
import ToDo from '../components/ToDo'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { showAll, showActive, showCompleted } from '../actions'

const ToDoList = ({ todos, active, completed, display, showAll, showActive, showCompleted }) => {
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

    } else if (display === 'completed') {
      return completed.map(todo => {
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
        <button onClick={() => showAll()}>Show All</button>
        <button onClick={() => showActive()}>Show Active</button>
        <button onClick={() => showCompleted()}>Show Completed</button>
      </div>
      <ul>{displayTodos()}</ul>
    </section>
  )
}

ToDoList.propTypes = {
  todos: PropTypes.array,
  display: PropTypes.string,
  completed: PropTypes.array,
  active: PropTypes.array,
  showAll: PropTypes.func,
  showActive: PropTypes.func,
  showCompleted: PropTypes.func
}

const mapStateToProps = (state) => ({
  todos: state.todos.todos,
  display: state.todos.display,
  completed: state.todos.completed,
  active: state.todos.active,
})

const mapDispatchToProps = (dispatch) => ({
  showAll: () => dispatch(showAll()),
  showActive: () => dispatch(showActive()),
  showCompleted: () => dispatch(showCompleted()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList)
