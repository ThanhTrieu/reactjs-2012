import { Menu, Dropdown, Button, Row, Col } from 'antd';
import { DownOutlined } from '@ant-design/icons';

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
  return (
    <Row style={{ margin: '30px 0px' }}>
      <Col span={24}>
        <Dropdown overlay={<MenuLanguage change={props.change} />}>
          <Button>
            Choose language <DownOutlined />
          </Button>
        </Dropdown>
      </Col>
    </Row>
  )
}
export default SwitchLanguage;