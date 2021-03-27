import React from 'react';
import { Card, Row, Col } from 'antd';


class GlobalCorona extends React.PureComponent {
  render() {
    return(
      <>
        <Row style={{ marginTop: '20px' }}>
          <Col span={8}>
            <Card title="Confirmed" bordered={true}>
              <p>NewConfirmed: 12132</p>
              <p>TotalConfirmed: 123</p>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Deaths" bordered={true}>
              <p>NewDeaths: 12132</p>
              <p>TotalDeaths: 123</p>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Recovered" bordered={true}>
              <p>NewRecovered: 12332</p>
              <p>TotalRecovered: 12323</p>
            </Card>
          </Col>
        </Row>
      </>
    )
  }
}
export default GlobalCorona;