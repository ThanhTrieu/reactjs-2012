import React from 'react';
import { Card, Skeleton, Image } from 'antd';
import WeatherContext from '../context/weather-context';

class WeatherComponent extends React.PureComponent {
  render() {
    return(
      <WeatherContext.Consumer>
        {context => {
          if(context.loading){
            return (<Skeleton active />)
          }
          return (
            <Card title="Weather" bordered={true}>
              <p>Thoi tiet : {context.weathers.weather[0].main}</p>
              <p>Chu thich: {context.weathers.weather[0].description}</p>
              <Image src={`http://openweathermap.org/img/w/${context.weathers.weather[0].icon}.png`} />
            </Card>
          )
        }}
      </WeatherContext.Consumer>
    )
  }
}
export default WeatherComponent