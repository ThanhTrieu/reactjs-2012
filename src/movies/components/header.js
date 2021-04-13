import React from 'react';
import { Layout, Menu } from 'antd';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const DivLogoHeader = styled.div`
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
`;

const { Header } = Layout;

const HeaderMovie = () => {
  const { pathname } = useLocation();

  return (
    <Header>
      <DivLogoHeader/>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={pathname}>
        <Menu.Item key="/search-movie">
          <Link to="/search-movie">Search movie</Link>
        </Menu.Item>
        <Menu.Item key="/popular-movie">
          <Link to="/popular-movie">Popular movies</Link>
        </Menu.Item>
        <Menu.Item key="/upcoming-movie">
          <Link to="/upcoming-movie">Upcoming movies</Link>
        </Menu.Item>
        <Menu.Item key="/login">
          <Link to="/login">Login</Link>
        </Menu.Item>
      </Menu>
    </Header>
  )
}
export default React.memo(HeaderMovie);