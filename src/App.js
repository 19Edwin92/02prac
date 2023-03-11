import axios from 'axios';
import React, { useEffect, useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState(null);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setInputValue('');
  }

  //    01 JONS.GET    ////////////////////////////////////////
  const fechTodos = async () => {
    const {data} = await axios.get('http://localhost:4001/todos');
    setTodos(data);
  }

  useEffect(()=> {
    fechTodos();
  }, []);
  console.log(todos)


  return (
  <>
  <p>리덕스 툴킷으로 중앙상태관리소 제어하기</p>
  <p>리덕스 툴킷 설치하기 : yarn add react-redux @reduxjs/toolkit</p>
  <hr/>
  <div>
    <p>입력공간</p>
    <form onSubmit={onSubmitHandler}>
      <input type="text" value={inputValue} onChange={(e)=> setInputValue(e.target.value)}/>
    </form>
  </div>
  <hr/>
  <div>
    <p>JSON 파일 읽어오기</p>
    {todos?.map(el => (<div key={el.id}>{el.id} : {el.title}</div>))}
  </div>

  </>
  )
}

export default App