import React from 'react'

function Form({inputText, setInputText, comments, setComments}) {
  const inputTextHandler = (e) => {
    setInputText(e.target.value)
  }
  const submitTodoHandler = (e) => {
    e.preventDefault();
    if (inputText.trim() === "") {
      console.log("The field is empty");
    } else {
    setComments([
      {text: inputText, completed: false, id: Math.random()}, ...comments
    ])}
    setInputText("");
  }


    return (
        <form>
      <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
    </form>
    )
}

export default Form
