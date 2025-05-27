import React, {useState} from "react";


function CommentDisplay({user, comment, onDelete, id}){
const [likes, setLikes] = useState(0)
const [dislikes, setDislikes] = useState(0)

 const handleLikes = () => {
     setLikes(likes => {
     const newCount = likes + 1;
     console.log("👍 now:", newCount);
     return newCount
    })
  };

  const handleDislikes = () => {
    setDislikes(dislikes => {
        const newCount = dislikes + 1;
        console.log('👎now', newCount)
        return newCount
    })
  }
    return(
        <div className='Comments'>
            <p><strong>{user}</strong></p>
            <p>{comment}</p>
            <button onClick={handleLikes}> 👍{likes}</button>
            <button onClick={handleDislikes}>👎{dislikes}</button>
            <button onClick={() => onDelete(id)}>Delete</button>
        </div>

    )
}

export default CommentDisplay