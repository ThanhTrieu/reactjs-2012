import React from 'react';
import { Card } from 'antd';

class WeatherComponent extends React.PureComponent {
  render() {
    return(
      <>
        <Card title="Weather" bordered={true}>
          <p>Thoi tiet : Mist</p>
          <p>Chu thich: mist</p>
          <p></p>
        </Card>
      </>
    )
  }
}
export default WeatherComponent