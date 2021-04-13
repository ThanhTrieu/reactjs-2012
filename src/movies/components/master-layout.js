import React from 'react';
import { Layout } from 'antd';
import HeaderMovie from './header';
import FooterMovie from './footer';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SiteLayoutContent = styled.div`
  min-height: 600px;
  padding: 15px;
  background: #fff;
`;

const { Content } = Layout;

const MasterLayoutMovie = (props) => {
  return(
    <Layout>
      <HeaderMovie/>
      <Content style={{ padding: '0 50px' }}>
        <SiteLayoutContent>
          {props.children}
        </SiteLayoutContent>
      </Content>
      <FooterMovie/>
    </Layout>
  )
}
MasterLayoutMovie.propTypes = {
  children: PropTypes.node.isRequired
}
export default React.memo(MasterLayoutMovie);