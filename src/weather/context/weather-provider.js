import React from 'react';
import { Row, Col, Input } from 'antd';
import WeatherContext from './weather-context';
import { apiWeather } from '../services/weather-api';
import { helpers } from '../helpers/common';

const { Search } = Input;

class WeatherProvider extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading: false,
      weathers: {},
    }
  }

  // dua this.setState ve xu ly dong bo
  setStateSync = (state) => {
    return new Promise(resolve => this.setState(state, resolve));
  }

  getDataFromApi = async (city = '') => {
    // cap nhap state loading ve true
    await this.setStateSync({loading: true});
    const data = await apiWeather.searchWeatherCity(city);
    if(!helpers.isEmptyObject(data)) {
      if(data.cod === 200){
        await this.setStateSync({weathers: data});
      }
    }
    await this.setStateSync({loading: false});
  }

  render() {
    return(
      <>
        <Row style={{ marginTop: '20px' }}>
          <Col span={18} offset={3}>
            <Search
              placeholder="name of city ..." 
              enterButton="Search"
              size="large"
              loading={this.state.loading}
              onSearch={city => this.getDataFromApi(city)}
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