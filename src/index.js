import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";


if (module.hot) {
  module.hot.accept();
}

const App = () => {
  return (
    <div className="ui container comments">
      
      <CommentDetail 
      author = "Sam" 
      timeAgo = "Today at 08:18 PM" 
      content = "yo yo yo" 
      avatar = {faker.image.avatar()}
      />

      <CommentDetail 
      author = "Alex" 
      timeAgo = "Today at 18:08 AM"  
      content = "yo yo yo" 
      avatar = {faker.image.avatar()}
      />

      <CommentDetail 
      author = "Jane" 
      timeAgo = "Yesterday at 08:18 PM" 
      content = "yo yo yo" 
      avatar = {faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
