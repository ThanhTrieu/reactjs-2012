import React  from 'react';
import { Table, Skeleton } from 'antd';
import CoronaContext from '../context/MyContext';

const columns = [
  {
    title: "Country",
    dataIndex: "Country",
    key: "Country"
  },
  {
    title: "Country code",
    dataIndex: "CountryCode",
    key: "CountryCode"
  },
  {
    title: "New Confirmed",
    dataIndex: "NewConfirmed",
    key: "NewConfirmed"
  },
  {
    title: "Total Confirmed",
    dataIndex: "TotalConfirmed",
    key: "TotalConfirmed"
  },
  {
    title: "New Deaths",
    dataIndex: "NewDeaths",
    key: "NewDeaths"
  },
  {
    title: "Total Deaths",
    dataIndex: "TotalDeaths",
    key: "TotalDeaths"
  }, 
  {
    title: "New Recovered",
    dataIndex: "NewRecovered",
    key: "NewRecovered"
  },
  {
    title: "Total Recovered",
    dataIndex: "TotalRecovered",
    key: "TotalRecovered"
  }
];

class Countries extends React.Component {
  render() {
    return(
      <CoronaContext.Consumer>
        { data => {
          if(data.loading || data.virus.length === 0){
            return (<Skeleton active />)
          }
          return (
            <Table style={{ marginTop: '20px' }} columns={columns} dataSource={data.virus.Countries} rowKey="CountryCode" />
          )
        }}
        
      </CoronaContext.Consumer>
    )
  }
}
export default Countries;
