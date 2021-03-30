import React from 'react';
import { Card } from 'antd';

class SystemComponent extends React.PureComponent {
  render() {
    return(
      <>
        <Card title="System" bordered={true}>
          <p>country : JP</p>
          <p>Tam nhin xa:</p>
          <p>Suc gio:</p>
          <p>Binh minh: </p>
          <p>Hoang hon: </p>
        </Card>
      </>
    )
  }
}
export default SystemComponent