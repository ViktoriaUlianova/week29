import {useEffect, useState} from 'react';
import './App.css';
import Form from './components/Form';
import Comments from './components/Comments';
import './styles/Comments.css';

function App() {
  const [inputText, setInputText] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getLocalComments();
  }, []);

  useEffect(() => {
      saveLocalComments();
    }, [comments]);

  const saveLocalComments = () => {
      localStorage.setItem('comments', JSON.stringify(comments))
  }

  const getLocalComments = () => {
    if(localStorage.getItem('comments') === null) {
      localStorage.setItem('comments', JSON.stringify([]));
    }
    else {
      let commentLocal = JSON.parse(localStorage.getItem('comments'));
      setComments(commentLocal)
    }
  }
  return (
    <div className="App">
      <h1>Let me know your opinion</h1>
      <Form inputText={inputText} comments={comments} setComments={setComments} setInputText={setInputText}/>
      <Comments comments={comments} setComments={setComments} />
    </div>
  );
}

export default App;
