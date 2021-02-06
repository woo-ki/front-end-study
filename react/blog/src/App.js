import React, {useState} from 'react'
import './App.css';

function App() {
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '재미있게 노는법']);
  let [작성일, 작성일변경] = useState(['2월 14일 발행', '2월 15일 발행', '2월 17일 발행']);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, modalUpdate] = useState(false);
  // function 제목바꾸기() {
  //   let newArray = [...글제목].sort();
  //   글제목변경(newArray);
  // }
  function 따봉바꾸기(idx) {
    let new따봉 = [...따봉];
    new따봉[idx] = new따봉[idx] + 1;
    따봉변경(new따봉);
  }

  function 게시물작성() {
    let 게시물 = [];
    for(let i = 0; i < 글제목.length; i++) {
      게시물.push(
        <div className="list">
          <h3>{글제목[i]} <input type="button" value="👍" onClick={()=>{따봉바꾸기(i)}} /> {따봉[i]}</h3>
          <p>{작성일[글제목.length - i - 1]}</p>
          <hr/>
        </div>
      )
    }
    return 게시물;
  }
  
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 블로그</div>
      </div>
      {/* <button onClick={제목바꾸기}>버튼</button> */}
      {/* {게시물작성()} */}
      {
        글제목.map((key, idx) => {
          return (
            <div className="list">
              <h3>{key} <input type="button" value="👍" onClick={()=>{따봉바꾸기(idx)}} /> {따봉[idx]}</h3>
              <p>{작성일[글제목.length - idx - 1]}</p>
              <hr/>
            </div>
          )
        })
      }

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