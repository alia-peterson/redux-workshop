import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { toggleTodo } from '../actions'

const ToDo = ({ id, text, completed, toggleTodo }) => {
  return (
    <li
      onClick={() => toggleTodo(id)}
      className={completed ? 'completed' : 'not-completed'}
      >
      {text}
    </li>
  )
}

ToDo.propTypes = {
  todos: PropTypes.array,
}

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (id) => dispatch(toggleTodo(id)),
})

export default connect(null, mapDispatchToProps)(ToDo)
