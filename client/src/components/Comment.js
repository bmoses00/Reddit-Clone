import React from 'react'

function Comment({ commentData }) {
    return (
        <div className='comment'>
            {commentData.body}
        </div>
    )
}

export default Comment
