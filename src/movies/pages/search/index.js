import React from 'react';
import { Row, Col } from 'antd';
import MasterLayoutMovie from '../../components/master-layout';

const SearchMovie = () => {
  return (
    <MasterLayoutMovie>
      <Row>
        <Col span={24}>
          <h1>This is search movie page !</h1>
        </Col>
      </Row>
    </MasterLayoutMovie>
  )
}
export default React.memo(SearchMovie);