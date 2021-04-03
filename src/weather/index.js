import React from 'react';
import { Row, Col } from 'antd';
import MainWeather from './components/main-weather';
import WeatherComponent from './components/weather';
import SystemComponent from './components/system';
import WeatherProvider from './context/weather-provider';
import WeatherContext from './context/weather-context';
import { helpers } from './helpers/common';

class AppWeather extends React.Component {
  render() {
    return(
      <WeatherProvider>
        <WeatherContext.Consumer>
          {context => {
            if(!helpers.isEmptyObject(context.weathers)){
              return (
                <Row style={{ marginTop: '30px' }}>
                  <Col span={20} offset={2}>
                    <Row>
                      <Col span={8}>
                        <WeatherComponent/>
                      </Col>
                      <Col span={8}>
                        <MainWeather/>
                      </Col>
                      <Col span={8}>
                        <SystemComponent/>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              )
            }
          }}
        </WeatherContext.Consumer>
      </WeatherProvider>
    )
  }
}
export default AppWeather;