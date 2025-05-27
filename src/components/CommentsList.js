import React, {useState} from 'react'
import CommentDisplay from './CommentDisplay'

function CommentList({video}){
const [searchComment, setSearchComment] = useState("")
const [deleteComments, setDeleteComments] = useState(video.comments)
const [sortBy, setSortBy] = useState("")

function handleDelete(id){
    const updatedComments = deleteComments.filter(comment => comment.id !== id)
    setDeleteComments(updatedComments)

    }

function handleSearch(event){
    setSearchComment(event.target.value)
};


const filteredComments= deleteComments.filter((comment) =>{
    return comment.user.toLowerCase().includes(searchComment.toLowerCase());
});

const sortedComments = [...filteredComments].sort((a, b) => {
  if (sortBy === "a-z") {
    return a.user.localeCompare(b.user);
  } else if (sortBy === "z-a") {
    return b.user.localeCompare(a.user);
  } else {
    return 0; 
  }
});


const commentsArray = sortedComments.map((comment) => {
        return <CommentDisplay 
        key={comment.id} 
        user={comment.user} 
        comment={comment.comment} 
        id={comment.id}
        onDelete={handleDelete}/>
    })
    
    return(

        <div className="comments">
           <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
           <option value="">Sort by</option>
           <option value="a-z">A–Z</option>
           <option value="z-a">Z–A</option>
           </select>
            <input
            type="text"
            placeholder="Search by username"
            value={searchComment}
            onChange={handleSearch}
            />
            {commentsArray}
            </div>
    )
}

export default CommentList

