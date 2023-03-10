import React from 'react';
import styled from 'styled-components';
const VideoItem = ({ data }) => {
  return (
    <VideoContainer>
      <ThumbnailImg src={data.snippet.thumbnails.default.url} alt={data.snippet.title} />
      <div>
        {/* <img/> */}
        <p>{data.snippet.title}</p>
        <p>{data.snippet.channelTitle}</p>
        <p>{data.snippet.publishedAt}</p>
      </div>
    </VideoContainer>
  );
};
const Row = ({ items }) => {
  console.log(items);
  return (
    <Container>
      {items.map(item => (
        <VideoItem key={item.id} data={item}></VideoItem>
      ))}
    </Container>
  );
};

export default Row;

const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0px 26px;
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(5, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const VideoContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 10rem;
  height: 15rem;
`;
const ThumbnailImg = styled.img`
  inset: 0px;
  display: block;
  height: 100%;
  object-fit: cover;
  opacity: 1;
  transition: opacity 500ms ease-in-out 0s;
  width: 100%;
`;
