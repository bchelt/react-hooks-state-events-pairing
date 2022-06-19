import react, { useState} from "react";

function Comments({ comments }) {
    const [hide, setHide] = useState(false)
    function handleClick(e) {
        setHide(!hide);
    }

    return (
        <div>
            <button onClick={handleClick}>{hide ? 'Show' : 'Hide'} Comments</button>
            <hr></hr>
            <div hidden={hide}>
                <h2>{comments.length} Comments</h2>
                <div>
                    {comments.map((comment) => (
                        <div id={comment.id}>
                            <h3>{comment.user}</h3>
                            <p>{comment.comment}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Comments;