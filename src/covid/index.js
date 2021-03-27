import React from 'react';
import GlobalCorona from './components/Global';
import { Row, Col } from 'antd';

class CoronaApp extends React.Component {
  render() {
    return(
      <>
        <Row>
          <Col span={20} offset={2}>
            <GlobalCorona />
          </Col>
        </Row>
      </>
    )
  }
}
export default CoronaApp;