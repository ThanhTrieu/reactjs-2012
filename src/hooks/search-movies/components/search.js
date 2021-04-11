import React from 'react';
import { Row, Col, Input } from 'antd';

const { Search } = Input;

const SearchMovie = (props) => {
  return (
    <>
      <Row style={{ margin: '30px 0px' }}>
        <Col span={12} offset={6}>
          <Search
            placeholder="movie name ..."
            enterButton="Search"
            size="large"
            loading={props.loading}
            onSearch={val => props.search(val)}
          />
        </Col>
      </Row>
    </>
  )
}

export default React.memo(SearchMovie);