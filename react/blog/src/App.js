import React, {useState} from 'react'
import './App.css';

function App() {
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '재미있게 노는법']);
  let [작성일, 작성일변경] = useState(['2월 17일 발행', '2월 15일 발행', '2월 14일 발행']);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, modalUpdate] = useState(false);
  let [누른제목, 누른제목변경] = useState(0);
  let [새글제목, 새글제목변경] = useState('');
  // function 제목바꾸기() {
  //   let newArray = [...글제목].sort();
  //   글제목변경(newArray);
  // }
  function 따봉바꾸기(idx) {
    let new따봉 = [...따봉];
    new따봉[idx] = new따봉[idx] + 1;
    따봉변경(new따봉);
  }

  function 글추가(title) {
    글제목변경([title, ...글제목]);
    작성일변경([`${new Date().getMonth() + 1}월 ${new Date().getDate()}일 발행`, ...작성일]);
    let new따봉 = [...따봉]
    new따봉.unshift(0)
    따봉변경(new따봉);
  }

  // function 게시물작성() {
  //   let 게시물 = [];
  //   for(let i = 0; i < 글제목.length; i++) {
  //     게시물.push(
  //       <div className="list">
  //         <h3>{글제목[i]} <input type="button" value="👍" onClick={()=>{따봉바꾸기(i)}} /> {따봉[i]}</h3>
  //         <p>{작성일[글제목.length - i - 1]}</p>
  //         <hr/>
  //       </div>
  //     )
  //   }
  //   return 게시물;
  // }
  
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
              <h3>
                <span onClick={() => {누른제목변경(idx)}}>{key}</span>
                <input style={{border:'none', background:'white'}} type="button" value="👍" onClick={()=>{따봉바꾸기(idx)}} />
                {따봉[idx]}
              </h3>
              <p>{작성일[idx]}</p>
              <hr/>
            </div>
          )
        })
      }

      <div className="publish">
        <input onChange={(e) => {새글제목변경(e.target.value)}}/>
        <button onClick={() => {글추가(새글제목)}}>저장</button>
      </div>

      <button onClick={() => {modalUpdate(!modal)}}>버튼</button>
      {modal
      ? <Modal 글제목={글제목} 작성일={작성일} 누른제목={누른제목}></Modal>
      : null}
      <Profile />
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
        <h2>{props.글제목[props.누른제목]}</h2>
        <p>{props.작성일[props.누른제목]}</p>
        <p>상세내용</p>
    </div>
  )
}

// 옛날 react 문법
class Profile extends React.Component {
  constructor() {
    super();
    // 스테이트
    this.state = {name: 'Kim', age: 30}
  }
  
  // 스테이트변경 함수
  changeInfo() {
    this.setState({name: 'Wooki'});
    this.setState({age: 29});
  }
  
  // 컴포넌트 실행부
  render() {
    return (
      <div>
        <h3>프로필입니다</h3>
        <p>저는 {this.state.name} 입니다.</p>
        <p>저는 {this.state.age}살 입니다.</p>
        <button onClick={this.changeInfo.bind(this)}>버튼</button>
      </div>
    )
  }
}

export default App;