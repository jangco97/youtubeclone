import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './DetailPage.css';
import { List, Avatar, Row, Col } from 'antd';
import axios from 'axios';

function DetailPage(props) {
  const movieId = props.match.params.movieId
  const [Video, setVideo] = useState([])
  const [CommentLists, setCommentLists] = useState([])

  const Variable = {Id : movieId} //id


useEffect(() => {
  axios.post('/api/video/getVideo', Variable)
      .then(response => {
                if (response.data.success) {
                    console.log(response.data.video)
                    setVideo(response.data.video)
                } else {
                    alert('Failed to get video Info')
                }
            })

  axios.post('/api/comment/getComments', Variable)
  .then(response => {
      if (response.data.success) {
          console.log('response.data.comments',response.data.comments)
          setCommentLists(response.data.comments)
      } else {
          alert('Failed to get video Info')
      }
  })  

}, [])

const updateComment = (newComment) => {
  setCommentLists(CommentLists.concat(newComment))
}

if (video.writer) {
  return (
      <Row>
        <Col lg={18} xs={24}>
          <div className="postPage" style={{ width: '100%', padding: '3rem 4em' }}>
            <video style={{ width: '100%' }} src={`https://www.youtube.com/embed/${movieId}`} controls></video>
            <List.Item
              actions={[<LikeDislikes video videoId={videoId} userId={localStorage.getItem('userId')}/>, <Subscriber userTo = {Video.writer._id} userFrom={localStorage.getItem('userId')}/>]}
            >
              <List.Item.Meta
                avatar= {<Avatar src={Video.writer && Video.writer.image} />}
                title={<a href="https://ant.design">{Video.title}</a>}
                description={Video.description}
              />
              <div></div>
            </List.Item>

            <Comment CommentLists={CommentLists} postId={Video._id} refreshFunction={updateComment} />
          </div>
        </Col>
        <Col lg={6} xs={24}>

          <SideVideo />
        </Col>
      </Row>
  )

} else {
    return (
      <div>Loading...</div>
    )
}

}


export default DetailPage;
