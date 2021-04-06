import { Row, Col, Card, Skeleton } from 'antd';
import { helpers } from '../helpers/common';

const { Meta } = Card;

const ListMovies = (props) => {
  // props : nhan tat cac cac props tu component khac truyen vao
  if(props.loading || helpers.isEmptyObject(props.dataMovies)){
    return (<Skeleton active />)
  }

  return (
    <Row style={{ margin: '20px 0px' }}>
      {props.dataMovies.map((item, index) => (
        <Col span={6} key={index}>
          <Card
            hoverable
            style={{ width: 240, marginTop: '20px' }}
            cover={<img alt={item.title} src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} />}
          >
            <Meta title={item.title} />
          </Card>
        </Col>
      ))}
    </Row>
  )
}
export default ListMovies;