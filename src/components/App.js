import React, {useState} from 'react'
import video from "../data/video.js";
import CommentList from './CommentsList.js';


function App() {
  const [thumbsUp, setThumbsUp]= useState(video.upvotes)
  const [thumbsDown, setThumbsDown] = useState(video.downvotes)
  const [hideComments, setHideComments] = useState(true)
  console.log("Here's your data:", video);

  /* handleToggle is in charge of hidding the comments */
  function handleToggle(){
    setHideComments((hideComments) => !hideComments)
  }

  const handleThumbsUp = () =>{
    setThumbsUp(thumbsUp => {
    const newCount = thumbsUp + 1;
    console.log('👍 now:', newCount);
    return newCount;
  });
  };

  /*When a user clicks the 👍👎 button:

React gives you the current thumbsUp or thumbsDown state

You add 1 to it

Log the new value

Then update the state to that new value

And because React updates state → re-renders → your button will show the new number immediately. */

  const handleThumbsDown = () => {
     setThumbsDown(thumbsDown => {
     const newCount = thumbsDown + 1;
     console.log("👎 now:", newCount);
     return newCount
    })
  }


  /* onClick={handleThumbsUp} — tells React:
➤ "When the user clicks this button, run the function that increases upvotes."

{thumbsUp} inside the button — tells React:
➤ "Show the current value of upvotes right here next to the 👍 icon."

So if thumbsUp is 5, the button will look like: 👍5*/

  return (
     <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title={video.title}
      />
      <h1>{video.title}</h1>
      <p>{video.views} Views | Uploaded {video.createdAt}</p>
      <button onClick={handleThumbsUp}>👍{thumbsUp}</button>
      <button onClick={handleThumbsDown}>👎{thumbsDown}</button>
      <div className='comments-section'>
      <h2>Comments</h2>
       {!hideComments ? <CommentList video={video} /> : <div style={{ height: "5px" }}></div>}
      <button onClick={handleToggle}>{hideComments ? "Show Comments" : "Hide Comments"}</button>
    </div>
    </div>
  )
}

  



export default App;
