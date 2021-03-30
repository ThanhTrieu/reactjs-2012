import React from 'react';
import { Card, Row, Col, Skeleton } from 'antd';
import CoronaContext from '../context/MyContext';

class GlobalCorona extends React.PureComponent {
  render() {
    return(
      <CoronaContext.Consumer>

        { context => {
          if(context.loading || context.virus.length === 0){
            return (<Skeleton active />)
          }
          return (
            <Row style={{ marginTop: '20px' }}>
              <Col span={8}>
                <Card title="Confirmed" bordered={true}>
                  <p>NewConfirmed: {context.virus.Global.NewConfirmed}</p>
                  <p>TotalConfirmed: {context.virus.Global.TotalConfirmed}</p>
                </Card>
              </Col>
              <Col span={8}>
                <Card title="Deaths" bordered={true}>
                  <p>NewDeaths: 21324</p>
                  <p>TotalDeaths: 234335</p>
                </Card>
              </Col>
              <Col span={8}>
                <Card title="Recovered" bordered={true}>
                  <p>NewRecovered: 2323</p>
                  <p>TotalRecovered: 31232</p>
                </Card>
              </Col>
            </Row>
          )
        }}

      </CoronaContext.Consumer>
    )
  }
}

export default GlobalCorona;