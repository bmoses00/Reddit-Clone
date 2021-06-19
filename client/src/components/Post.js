import React from 'react'

function Post({ postData, setFocus, focus }) {
    const className = focus ? 'post' : 'post highlight'
    return (
        <div className={className} onClick={() => setFocus(postData._id)}>
            <h3>{postData.title}</h3>
            <p>{postData.selftext}</p>
        </div>
    )
}

export default Post
