import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const FooterMovie = () => {
  return (
    <Footer style={{ textAlign: 'center' }}>App movie ©2021 Created by ReactJS2012</Footer>
  )
}
export default React.memo(FooterMovie);