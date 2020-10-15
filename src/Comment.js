import React from 'react'

function Comment({comment}) {
    return (
    
        <div>
            full name: {comment.fullName}<br></br>
            title:{comment.title}<br></br>
           content: {comment.content}<br></br>
        </div>
    )
}

export default Comment
