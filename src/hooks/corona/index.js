import React from 'react';
import GlobalCorona from './components/Global';
import Countries from './components/Countries';
import { Row, Col } from 'antd';
import CoronaProvider from './context/corona-provider';

const CoronaApp = () => {
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
export default CoronaApp;