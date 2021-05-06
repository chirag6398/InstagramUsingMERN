import React, { useState, useEffect } from "react";
import loginStyle from "../styles/login.module.css";
import logo from "../images/instaLogo.png";
import Adnld from "../images/Appleplaystore.png";
import Gps from "../images/googleplaystore.png";
import sideImg from "../images/sidePhoneimg.png";
import fIcon from "../images/facebookIcon.png";
// import { auth } from "../firebase/firebase";
import { useHistory } from "react-router-dom";

export default function Login() {
  const history = useHistory();
  const [userLoginData, setUserLoginData] = useState({
    email: "",
    password: "",
  });
  // const [email, setEmail] = useState("");
  // const [error, setError] = useState("");
  // const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [processing, setProcesing] = useState(false);
  const [successed, setSuccessed] = useState(false);
  const [randomNo, setRandomNo] = useState(0);
  const [dynUrl] = useState([
    "https://www.instagram.com/static/images/homepage/screenshot2.jpg/6f03eb85463c.jpg",
    "https://www.instagram.com/static/images/homepage/screenshot3.jpg/f0c687aa6ec2.jpg",
    "https://www.instagram.com/static/images/homepage/screenshot4.jpg/842fe5699220.jpg",
    "https://www.instagram.com/static/images/homepage/screenshot5.jpg/0a2d3016f375.jpg",
    "https://www.instagram.com/static/images/homepage/screenshot1.jpg/d6bf0c928b5a.jpg",
  ]);

  const inputHandler = (e) => {
    setUserLoginData({ ...userLoginData, [e.target.name]: e.target.value });
    console.log(userLoginData);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomNo(Math.floor(Math.random() * 5));
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const signInHandler = async (e) => {
    try {
      e.preventDefault();
      setProcesing(true);
      const res = await fetch("/api/signin", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(userLoginData),
      });
      setProcesing(false);
      const data = await res.json();
      if (data.status === 201) {
        console.log(data.message);
        setSuccessed(true);
        history.push("/home");
      } else {
        console.log(data.error);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const registerHandler = async (e) => {
    e.preventDefault();
    setProcesing(true);

    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(userLoginData),
    });
    setProcesing(false);
    const data = await res.json();
    console.log(data);
    if (!data.status === 501 || !data.status === 422) {
      setSuccessed(true);
      history.push("/home");
    } else {
      console.log(data.error);
    }
  };

  return (
    <div className={loginStyle.loginPage}>
      <img src={sideImg} alt="..." className={loginStyle.sideimg} />
      <img src={dynUrl[randomNo]} alt="..." className={loginStyle.dynamicImg} />
      <div className={loginStyle.login_extdiv}>
        <div className={loginStyle.login__container}>
          <img src={logo} alt="..." className={loginStyle.insta_logo} />

          <form className={loginStyle.login_form}>
            <input
              type="email"
              name="email"
              placeholder="email..."
              required={true}
              className={loginStyle.login__inpt}
              value={userLoginData.email}
              onChange={inputHandler}
            ></input>
            <input
              type="password"
              required={true}
              name="password"
              placeholder="password..."
              className={loginStyle.login__inpt}
              value={userLoginData.password}
              onChange={inputHandler}
            ></input>
            <button
              type="submit"
              onClick={signInHandler}
              disabled={disabled}
              className={loginStyle.login_btn}
            >
              {processing ? "processing" : successed ? "successed" : "Login"}
            </button>
          </form>

          <span className={loginStyle.line_OR}>OR</span>

          <h6
            style={{
              fontWeight: "thin",
              color: "blue",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src={fIcon}
              alt="..."
              style={{ objectFit: "contain", width: "18px" }}
            />
            Login with facebook
          </h6>
          <p style={{ fontWeight: "thin", cursor: "pointer" }}>
            Forgot Password ?
          </p>
        </div>
        <div
          className={loginStyle.login__container}
          style={{ marginTop: "10px" }}
        >
          <form>
            <h6 style={{ fontWeight: "thin" }}>
              Don't have an Account ?
              <button
                onClick={registerHandler}
                type="button"
                style={{
                  color: "blue",
                  fontWeight: "thin",
                  border: "none",
                  backgroundColor: "white",
                }}
              >
                SignUp
              </button>
            </h6>
          </form>
        </div>

        <div
          style={{
            marginTop: "30px",
          }}
        >
          <p style={{ fontWeight: "thin", display: "block" }}>Get the App</p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <img
            src={Adnld}
            alt="..."
            style={{ width: "123px", objectFit: "contain", cursor: "pointer" }}
          />
          <img
            src={Gps}
            alt="..."
            style={{
              width: "123px",
              objectFit: "contain",
              marginLeft: "15px",
              cursor: "pointer",
            }}
          />
        </div>
      </div>
    </div>
  );
}
