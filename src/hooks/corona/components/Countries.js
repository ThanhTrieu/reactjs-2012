import React  from 'react';
import { Table, Skeleton } from 'antd';

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

const data = [];

const Countries = () => {
  return (
    <Table style={{ marginTop: '20px' }} columns={columns} dataSource={data} rowKey="CountryCode" />
  )
}
export default React.memo(Countries);
