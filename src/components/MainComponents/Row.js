import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import moment from 'moment/moment';


const Container = styled.div`
  padding: 20px;
  display: grid;
  column-gap: 1rem;
  row-gap: 2.5rem;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    margin-left: 0;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 640px) {
    margin-left: 0;
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ThumbnailImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  transition: transform 300ms;
  cursor: pointer;
`;

const Thumbnail = styled.div`
  display: flex;
  flex-direction: column;
`;

const VideoContainer = styled.div`
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 300ms;
  :hover {
    background-color: rgb(243 244 246);
  }

`;
const Thumbnail = styled.div`
  box-sizing: border-box;
  font-size: 0.7rem;
  color: black;
  .channelName {
    color: blue;

  :hover ${ThumbnailImg} {
    transform: scale(1.05);

  }
`;

const ImgWrapper = styled.div`
  overflow: hidden;
  border-radius: 5px;
  aspect-ratio: 16 / 9;
`;

const Title = styled.h4`
  margin: 5px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 5px 5px;
  font-size: 0.85rem;
  color: gray;
  font-weight: bold;
`;

const VideoItem = ({ data }) => {
  const navigate = useNavigate();

  const movieId = data.id;

  return (
    <VideoContainer onClick={() => navigate(`/${movieId}`)}>
      <ImgWrapper>
        <ThumbnailImg
          src={data.snippet.thumbnails.default.url}
          alt={data.snippet.title}
        />
      </ImgWrapper>

      <Thumbnail>
        <Title>{data.snippet.title}</Title>
        <Section onClick={() => navigate(`/channel/${data.snippet.channelId}`)}>
          <span>{data.snippet.channelTitle}</span>
          <span>{moment(data.snippet.publishedAt).fromNow()}</span>
        </Section>
      </Thumbnail>
    </VideoContainer>
  );
};

const Row = ({ items }) => {
  return (
    <Container>
      {items.map((item) => (
        <VideoItem key={item.id} data={item} />
      ))}
    </Container>
  );
};

export default Row;
