import React  from 'react';
import { Table } from 'antd';

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

const data = [
  {
    Country: "Afghanistan",
    CountryCode: "AF",
    NewConfirmed: 4,
    TotalConfirmed: 56294,
    NewDeaths: 1,
    TotalDeaths: 2470,
    NewRecovered: 19,
    TotalRecovered: 50013
  },
  {
    Country: "Albania",
    CountryCode: "AL",
    NewConfirmed: 493,
    TotalConfirmed: 124134,
    NewDeaths: 6,
    TotalDeaths: 2210,
    NewRecovered: 557,
    TotalRecovered: 89456,
  }
];


class Countries extends React.Component {
  render() {
    return(
      <>
        <Table style={{ marginTop: '20px' }} columns={columns} dataSource={data} />
      </>
    )
  }
}
export default Countries;
