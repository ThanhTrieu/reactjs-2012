import { Row, Col, Pagination } from 'antd';

const PaginationMovies = (props) => {
  return (
    <Row style={{ margin: '30px 0px' }}>
      <Col span={24} style={{ textAlign: 'center' }}>
        <Pagination
          current={props.currentPage}
          total={props.totalItems}
          pageSize={props.pageSize}
          showSizeChanger={false}
          onChange={(p) => props.changePage(p)}
        />
      </Col>
    </Row>
  )
}
export default PaginationMovies;