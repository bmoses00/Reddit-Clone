import React from 'react'
import Post from './Post'

function Posts({ postsData, setFocus }) {
    return (
        <div className='centered'>
            {postsData.map((postData) =>
                <Post
                    key={postData._id}
                    postData={postData}
                    focus={false}
                    setFocus={setFocus} />
            )}
        </div>
    )
}

export default Posts
