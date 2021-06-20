import React from 'react'
import Post from './Post'
import Comments from './Comments'
import { AiOutlineArrowLeft } from 'react-icons/ai'

function PostWrapper({ postData, setFocus }) {
    return (
        <div className='centered'>
            <div style={{padding:'8px'}}>
                <div onClick={() => setFocus(null)} className='circle' >
                    <AiOutlineArrowLeft /*style={{margin:'auto'}}*//>
                </div>
                <Post postData={postData} setFocus={setFocus} focus={true}/>
                <hr></hr>
            </div>
            <Comments commentsData={postData.comments} nesting={0}/>
        </div>
    )
}

export default PostWrapper
