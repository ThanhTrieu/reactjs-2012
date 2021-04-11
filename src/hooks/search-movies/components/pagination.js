import React from 'react';
import { Row, Col, Pagination } from 'antd';

const PaginationMovies = (props) => {
  return (
    <Row style={{ margin: '30px 0px' }}>
      <Col span={24} style={{ textAlign: 'center' }}>
        <Pagination
          current={props.current}
          total={props.total}
          pageSize={props.pageSize}
          showSizeChanger={false}
          onChange={ p => props.search(props.name, p)}
        />
      </Col>
    </Row>
  )
}
export default React.memo(PaginationMovies);