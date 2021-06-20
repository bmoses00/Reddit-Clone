import React from 'react'

function Comment({ commentData }) {
    return (
        <div className='comment'>
            <b>{commentData.author}</b>
            <p>{commentData.body}</p>
        </div>
    )
}

export default Comment
