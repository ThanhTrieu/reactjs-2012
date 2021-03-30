import React from 'react';
import { Card } from 'antd';

class MainWeather extends React.PureComponent {
  render() {
    return(
      <>
        <Card title="Main weather" bordered={true}>
          <p>Nhiet do: 26</p>
          <p>Nhiet do thap nhat: 26</p>
          <p>Nhiep do cao nhat: 26</p>
          <p>Do am: 94 %</p>
          <p> Ap suat: 1002</p>
        </Card>
      </>
    )
  }
}
export default MainWeather