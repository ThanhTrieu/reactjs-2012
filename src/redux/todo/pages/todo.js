import React from 'react';
import AddWork from '../components/add-wrork';
import ListWorks from '../components/list-work';
import { Row , Col } from 'antd';

const Todo = () => {
  return (
    <Row>
      <Col span={24}>
        <AddWork/>
        <ListWorks/>
      </Col>
    </Row>
  )
}
export default React.memo(Todo);