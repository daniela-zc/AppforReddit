import React from 'react'

const Footer = ({ categories, onTodoClick }) => (
  <ul>
    {categories.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </ul>
)

export default Footer
