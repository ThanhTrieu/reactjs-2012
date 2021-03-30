import React from 'react';
import GlobalCorona from './components/Global';
import Countries from './components/Countries';
import CoronaProvider from './context/CoronaProvider';
import { Row, Col } from 'antd';


class CoronaApp extends React.Component {
  render() {
    return(
      <>
        <Row>
          <Col span={20} offset={2}>
            <CoronaProvider>
              <GlobalCorona/>
              <Countries/>
            </CoronaProvider>
          </Col>
        </Row>
      </>
    )
  }
}
export default CoronaApp;