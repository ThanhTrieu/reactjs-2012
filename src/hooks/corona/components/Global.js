import React, { useContext } from 'react';
import { Card, Row, Col, Skeleton } from 'antd';
import CoronaContext from '../context/index';


const GlobalCorona = () => {
  const data = useContext(CoronaContext);
  if(data.loading || data.virus.length === 0){
    return (<Skeleton active />)
  }
  return (
    <Row style={{ marginTop: '20px' }}>
      <Col span={8}>
        <Card title="Confirmed" bordered={true}>
          <p>NewConfirmed: {data.virus.Global.NewConfirmed}</p>
          <p>TotalConfirmed: {data.virus.Global.TotalConfirmed}</p>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Deaths" bordered={true}>
          <p>NewDeaths: {data.virus.Global.NewDeaths}</p>
          <p>TotalDeaths: {data.virus.Global.TotalDeaths}</p>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Recovered" bordered={true}>
          <p>NewRecovered: {data.virus.Global.NewRecovered}</p>
          <p>TotalRecovered: {data.virus.Global.TotalRecovered}</p>
        </Card>
      </Col>
    </Row>
  )
}

export default React.memo(GlobalCorona);