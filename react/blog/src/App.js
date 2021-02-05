import React, {useState} from 'react'
import './App.css';

function App() {
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '재미있게 노는법']);
  let [따봉, 따봉변경] = useState(0);
  let [modal, modalUpdate] = useState(false);
  // function 제목바꾸기() {
  //   let newArray = [...글제목].sort();
  //   글제목변경(newArray);
  // }
  
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 블로그</div>
      </div>
      {/* <button onClick={제목바꾸기}>버튼</button> */}
      <div className="list">
        <h3>{글제목[0]} <input style={{background: 'white', border: 'none'}} type="button" value="👍" onClick={()=>{따봉변경(따봉 + 1)}} /> {따봉}</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{글제목[1]}</h3>
        <p>2월 13일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{글제목[2]}</h3>
        <p>2월 2일 발행</p>
        <hr/>
      </div>

      <button onClick={()=>{modalUpdate(!modal)}}>버튼</button>
      {modal ? <Modal></Modal> : null}
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
    </div>
  )
}

export default App;