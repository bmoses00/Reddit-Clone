import React from 'react'
import Post from './Post'
import Comments from './Comments'
import { AiOutlineArrowLeft } from 'react-icons/ai'

function PostWrapper({ postData, setFocus }) {
    return (
        <div className='centered'>
            <AiOutlineArrowLeft onClick={() => setFocus(null)}/>
            <Post postData={postData} setFocus={setFocus} focus={true}/>
            <Comments commentsData={postData.comments} nesting={0}/>
        </div>
    )
}

export default PostWrapper
