import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

function Post({ postData, setFocus, focus }) {
    const className = focus ? 'post' : 'post highlight'
    return (
        <Container className={className} onClick={() => setFocus(postData._id)}>
            <Row>
                <Col xs={2} sm={2} md={2}>
                    <p>{postData.score}</p>
                </Col>
                <Col>
                    <h6>r/{postData.subreddit}</h6>
                    <h4>{postData.title}</h4>
                    <p>{postData.selftext}</p>
                    <p>{postData.num_comments} comments</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Post
