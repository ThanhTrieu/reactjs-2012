import React from 'react';
import { Row, Col, Input } from 'antd';
import WeatherContext from './weather-context';
import { apiWeather } from '../services/weather-api';

const { Search } = Input;

class WeatherProvider extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading: false,
      weathers: {},
    }
  }

  render() {
    return(
      <>
        <Row style={{ marginTop: '20px' }}>
          <Col span={18} offset={3}>
            <Search
              placeholder="name of city ..." 
              enterButton="Search"
              size="large" loading
            />
          </Col>
        </Row>
        <WeatherContext.Provider value={this.state}>
          {this.props.children}
        </WeatherContext.Provider>
      </>
    )
  }
}
export default WeatherProvider;