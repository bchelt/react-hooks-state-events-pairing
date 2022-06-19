import react from "react";

function VideoInfo({ upvotes, downvotes, views, title, created, handleVote }) {
    function handleClick(e) {
        handleVote(e.target.id)
    }

    
    return (
        <div>
            <h1>{title}</h1>
            <p>{views} views | Uploaded {created}</p>
            <button onClick={handleClick} id={'up'}>{upvotes} 👍</button>
            <button onClick={handleClick} id={'down'}>{downvotes} 👎</button>
        </div>
    )
}

export default VideoInfo;