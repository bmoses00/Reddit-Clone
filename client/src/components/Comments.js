import React from 'react'
import Comment from './Comment'

function Comments({ commentsData, nesting }) {
    return (
        <>
            {commentsData.map(commentData => {
                return (
                    <div style={{ paddingLeft: '20px' }} key= { commentData._id }>
                    <Comment commentData={commentData}></Comment>
                     {(commentData.replies.length !== 0)
                    ? <Comments commentsData={commentData.replies} nesting={nesting + 1}/>
                    : ''} 
                    </div>
                )
            })}
        </>
    )
}

export default Comments
