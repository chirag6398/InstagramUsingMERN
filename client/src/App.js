import React, { useState } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Comment from "./components/NewCommentSection/Comment";
import userImg from "./images/demoUserImg.jpg";
import Story from "./components/StoryHeader/Userstories";
import Login from "./components/Login";
// import { auth } from "./firebase/firebase";

function App() {
  // const [loginUser, setLoginUser] = useState(null);
  const [post] = useState([
    {
      posturl: userImg,
      postCaption: "#carying",
      avatarUrl: userImg,
      userName: "username__1",
    },
    {
      posturl: userImg,
      postCaption: "#carying",
      avatarUrl: userImg,
      userName: "username__2",
    },
    {
      posturl: userImg,
      postCaption: "#carying",
      avatarUrl: userImg,
      userName: "username__3",
    },
    {
      posturl: userImg,
      postCaption: "#carying",
      avatarUrl: userImg,
      userName: "username__4",
    },
    {
      posturl: userImg,
      postCaption: "#carying",
      avatarUrl: userImg,
      userName: "username__5",
    },
    {
      posturl: userImg,
      postCaption: "#carying",
      avatarUrl: userImg,
      userName: "username__6",
    },
    {
      posturl: userImg,
      postCaption: "#carying",
      avatarUrl: userImg,
      userName: "username__7",
    },
    {
      posturl: userImg,
      postCaption: "#carying",
      avatarUrl: userImg,
      userName: "username__8",
    },
    {
      posturl: userImg,
      postCaption: "#carying",
      avatarUrl: userImg,
      userName: "username__9",
    },
    {
      posturl: userImg,
      postCaption: "#carying",
      avatarUrl: userImg,
      userName: "username__10",
    },
  ]);

  // useEffect(() => {
  //   auth.onAuthStateChanged((user) => {
  //     if (user) {
  //       setLoginUser(user.email);
  //     } else {
  //       setLoginUser(null);
  //     }
  //   });
  // }, []);
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Home post={post} />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/story">
            <Story data={post} />
          </Route>
          <Route exact path="/:page">
            <Home post={post} />
          </Route>

          <Route exact path="/commentsection/:page">
            <Comment data={post} />
          </Route>
          <Route exact path="/comment/:userName">
            <Comment data={post} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
