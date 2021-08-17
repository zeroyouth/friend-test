import logo from './logo.svg';
import './App.css';
import React from "react";
import {Route, Switch} from "react-router-dom";

import Start from "./Start";
import Quiz from "./Quiz";
import Score from "./Score";
import Message from "./Message";
import Ranking from "./Ranking";

import { withRouter } from "react-router";
// 리덕스 스토어와 연결하기 위해 connect라는 친구를 호출할게요!
import { connect } from "react-redux";
import { firestore } from './firebase';
import { addRankFB, getRankFB } from './redux/modules/rank';

// 이 함수는 스토어가 가진 상태값을 props로 받아오기 위한 함수예요.
const mapStateTopProps = (dispatch) => ({
  load: () => {
    dispatch(getRankFB());
  },
  create: (new_item) => {
    dispatch(addRankFB(new_item));
  }
});

// 이 함수는 값을 변화시키기 위한 액션 생성 함수를 props로 받아오기 위한 함수예요.
const mapDispatchToProps = (dispatch) => ({
  load: () => {
    
  },
  
});

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      
    };
  }

  render () {
    return (
      <div className="App">
        <Switch>
          <Route path="/quiz" component={Quiz} />
          <Route path="/" exact component={Start} />
          <Route path="/score" component={Score} />
          <Route path="/message" component={Message} />
          <Route path="/ranking" component={Ranking} />
        </Switch>
      </div>
    );
  }
}

export default connect(mapStateTopProps, mapDispatchToProps)(withRouter(App));
// import React from "react";
// import './App.css';

// import { Router, Switch} from "react-router-dom";
// import { withRouter } from "react-router";

// import Start from "./Start";
// import Quiz from "./Quiz";
// import Score from "./Score";
// import Message from "./Message";
// import Ranking from './Ranking';
// import { connect } from "react-redux";


// const mapStateTopProps = (state) => ({
//   ...state,
// });

// const mapDispatchToProps = (dispatch) => ({
//   load: () => {},
// });

// class App extends React.Component{
//   constructor(props){
//     super(props);
// // state에 필요한 데이터를 넣어줘요!
//     this.state = {
//       name: "영은이",
//       page: "message",
//       scoreMsg: "이 정도면 아주 친한 친구 사이! 앞으로도 더 친하게 지내요! :)",
//       list: [
//         { question: "영은이는 20살이다.", answer: "O" },
//         { question: "영은이는 21살이다.", answer: "O" },
//         { question: "영은이는 22살이다.", answer: "O" },
//         { question: "영은이는 23살이다.", answer: "O" },
//         // { question: "르탄이는 2살이다.", answer: "O" },
//         // { question: "르탄이는 2살이다.", answer: "O" },
//         // { question: "르탄이는 2살이다.", answer: "O" },
//         // { question: "르탄이는 2살이다.", answer: "O" },
//         // { question: "르탄이는 2살이다.", answer: "O" },
//         // { question: "르탄이는 2살이다.", answer: "O" },
//         // { question: "르탄이는 2살이다.", answer: "O" },
//       ],
//       ranking: [
//         { rank: 1, name: "임민영", message: "안녕 르탄아!" },
//         { rank: 1, name: "임민영", message: "안녕 르탄아!" },
//         { rank: 1, name: "임민영", message: "안녕 르탄아!" },
//         { rank: 1, name: "임민영", message: "안녕 르탄아!" },
//         { rank: 1, name: "임민영", message: "안녕 르탄아!" },
//         { rank: 1, name: "임민영", message: "안녕 르탄아!" },
//         { rank: 1, name: "임민영", message: "안녕 르탄아!" },
//       ],
//     };
//   }

//   render () {
//     return (
//       <div className="App">
//         <Switch>
//           <Router path="/" exact component={Start}/>
//           <Router path="/score" exact component={Score}/>
//           <Router path="/quiz" exact component={Quiz}/>
//           <Router path="/message" exact component={Message}/>
//           <Router path="/ranking" exact component={Ranking}/>

//         </Switch>
//       </div>
//     );
//   }
// }

// export default connect(mapStateTopProps, mapDispatchToProps)(withRouter(App));