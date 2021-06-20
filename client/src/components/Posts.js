import React from 'react'
import Post from './Post'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

function Posts({ postsData, setFocus }) {
    return (
        <Container>
            <Row>
                <Col xs={1} sm={1} md={2} lg={3} xl={3}></Col>
                <Col xs={10} sm={10} md={8} lg={6} xl={6}>
                    {postsData.map((postData) =>
                        <Container key={postData._id}>
                            <Row style={{height:'10px'}}></Row>
                            <Row style={{border: '1.75px solid gray', borderRadius: '3px'}}>
                                <Post 
                                    postData={postData}
                                    focus={false}
                                    setFocus={setFocus} />
                            </Row>
                        </Container>

                    )}
                </Col>
                <Col xs={1} sm={1} md={2} lg={3} xl={3}></Col>
            </Row>
        </Container>
    )
}

export default Posts
