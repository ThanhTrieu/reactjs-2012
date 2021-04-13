import React from 'react';
import { Row, Col } from 'antd';
import MasterLayoutMovie from '../../components/master-layout';

const PopularMovie = () => {
  return (
    <MasterLayoutMovie>
      <Row>
        <Col span={24}>
          <h1>This is popular page !</h1>
        </Col>
      </Row>
    </MasterLayoutMovie>
  )
}
export default React.memo(PopularMovie);