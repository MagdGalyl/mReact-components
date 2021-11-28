import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";


if (module.hot) {
  module.hot.accept();
}

const App = () => {
  return (
    <div className="ui container comments">
      
      <ApprovalCard>
        <CommentDetail 
        author = "Sam" 
        timeAgo = "Today at 08:18 PM" 
        content = "yo yo yo" 
        avatar = {faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail 
        author = "Alex" 
        timeAgo = "Today at 18:08 AM"  
        content = "yo yo yo" 
        avatar = {faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail 
        author = "Jane" timeAgo = "Yesterday at 08:18 PM" content = "yo yo yo" avatar = {faker.image.avatar()} />
      </ApprovalCard>

    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
