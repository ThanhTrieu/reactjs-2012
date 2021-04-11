import { useContext } from 'react';
import { Menu, Dropdown, Button, Row, Col } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import MoviesContext from '../context/index';
import { helpers } from '../helpers/common';

const MenuLanguage = (props) => {
  return (
    <Menu onClick={(e) => props.change(e.key)}>
      <Menu.Item key="en-US" >
        English
      </Menu.Item>
      <Menu.Item key="vi">
        Vietnamese
      </Menu.Item>
    </Menu>
  )
}

const SwitchLanguage = (props) => {
  const infoUser = useContext(MoviesContext);
  //console.log(infoUser);
  return (
    <Row style={{ margin: '30px 0px' }}>
      <Col span={4}>
        <Dropdown overlay={<MenuLanguage change={props.change} />}>
          <Button>
            Choose language <DownOutlined />
          </Button>
        </Dropdown>
      </Col>
      <Col span={20}>
        {!helpers.isEmptyObject(infoUser) && <p> Hi: {infoUser.user}</p>}
      </Col>
    </Row>
  )
}
export default SwitchLanguage;