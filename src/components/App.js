import video from "../data/video.js";
import VideoInfo from "./VideoInfo.js";
import Comments from "./Comments.js";
import react, { useState } from "react";

function App() {
  console.log("Here's your data:", video);
  const [upvotes, setUpvotes] = useState(video.upvotes)
  const [downvotes, setDownvotes] = useState(video.downvotes)

  function handleVote(id) {
    if (id === 'up') {
      setUpvotes(upvotes + 1)
    }
    if (id === 'down') {
      setDownvotes(downvotes + 1)
    }
  }

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <VideoInfo upvotes={upvotes} downvotes={downvotes} views={video.views} title={video.title} created={video.createdAt} handleVote={handleVote}/>
      <Comments comments={video.comments}/>
    </div>
  );
}

export default App;
