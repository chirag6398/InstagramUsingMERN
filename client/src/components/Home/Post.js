import React, { useState, useEffect } from "react";
import postStyle from "../../styles/Post.module.css";
import Avatar from "@material-ui/core/Avatar";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import heartIcon from "../../images/hearticon.png";
import commentIcon from "../../images/comment.png";
import arrIcon from "../../images/arrow.png";
import redHrt from "../../images/redHrt.png";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import MoreVertIcon from "@material-ui/icons/MoreVert";

export default function Post(props) {
  const [comments, setComments] = useState({ comment: "" });
  const [postedComments, setPostedComment] = useState({ postedComment: "" });
  const [showComment, setShowComment] = useState(false);
  const [count, setCount] = useState(1);
  const [count2, setCount2] = useState(1);
  const [showHrt, setShowHrt] = useState(false);
  const [isScreenXsizeMobileView, setIsScreeMobileView] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 600) {
        setIsScreeMobileView(true);
      } else {
        setIsScreeMobileView(false);
      }
    });

    return () => {
      window.removeEventListener("resize", () => {
        if (window.innerWidth <= 600) {
          setIsScreeMobileView(true);
        } else {
          setIsScreeMobileView(false);
        }
      });
    };
  }, []);

  const doubleClickHandler = () => {
    setShowHrt(true);
    setTimeout(() => {
      setShowHrt(false);
    }, 1000);

    if (count2 % 2 !== 0) {
      setCount2(count2 + 1);
    }
  };

  const hrtHandler2 = () => {
    setCount2(count2 + 1);
  };
  const hrtHandler = () => {
    setCount(count + 1);
  };

  const directedToComment = () => {
    setShowComment(true);
  };
  const commentHandler = (e) => {
    setComments({ comment: e.target.value });
  };
  const commentPostHandler = () => {
    setPostedComment({ postedComment: comments.comment });
    setComments({ comment: "" });
    setCount(1);
  };
  return (
    <div className={postStyle.post_container}>
      <div className={postStyle.post_header}>
        <Avatar
          className={postStyle.post_header_img}
          alt="..."
          src={props.avatarimg}
        />
        <h3 style={{ fontSize: "larger" }}>{props.username}</h3>
        <span className={postStyle.dots}>
          {isScreenXsizeMobileView ? <MoreVertIcon /> : <MoreHorizIcon />}
        </span>
      </div>

      <div
        className={postStyle.post__img}
        style={{ width: "auto", height: "auto" }}
      >
        <img
          src={props.userimg}
          className={postStyle.user_img}
          alt="..."
          onDoubleClick={doubleClickHandler}
        />
        {showHrt ? (
          <FavoriteIcon
            className={postStyle.dblclickHrt}
            style={{ fontSize: 70, position: "absolute" }}
          />
        ) : null}
      </div>

      <div className={postStyle.belowPost}>
        <div className={postStyle.postIcons}>
          <img
            className={postStyle.hrtPIcon}
            src={count2 % 2 === 0 ? redHrt : heartIcon}
            onClick={hrtHandler2}
            alt=""
          />
          <img
            className={postStyle.cmntIcon}
            src={commentIcon}
            alt=""
            onClick={directedToComment}
          />
          <img className={postStyle.arrIcon} src={arrIcon} alt="" />
        </div>
        <p>
          Liked by<b> kushagra8198</b> and <b>90 others</b>
        </p>
        <p className={postStyle.post_caption}>
          <strong>@username</strong> caption #crazy#innovative {props.caption}
        </p>
        <p style={{ opacity: ".5" }}>19 HOURS AGO</p>
      </div>

      {postedComments.postedComment ? (
        <p style={{ paddingLeft: "7px" }}>
          <strong>@username</strong> {postedComments.postedComment}
          <img
            src={count % 2 === 0 ? redHrt : heartIcon}
            alt="..."
            className={postStyle.hrtIcon}
            onClick={hrtHandler}
          />{" "}
        </p>
      ) : null}

      {showComment ? (
        <div className="input-group">
          <div className="custom-file">
            <input
              type="text"
              className="form-control"
              placeholder="Add a comment.."
              value={comments.comment}
              name="comment"
              onChange={commentHandler}
            />
          </div>
          <div className="input-group-append">
            <span className={postStyle.post} onClick={commentPostHandler}>
              post
            </span>
          </div>
        </div>
      ) : null}
    </div>
  );
}
