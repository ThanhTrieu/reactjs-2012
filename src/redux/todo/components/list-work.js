import React from 'react';
import { Row, Col, List } from 'antd';
import { useSelector } from 'react-redux';


const ListWorks = () => {
  const data = useSelector(state => state.todo.listWorks);
  
  return (
    <Row style={{ margin: '20px 0px' }}>
      <Col span={12} offset={6}>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                title={item.title}
              />
            </List.Item>
          )}
        />
      </Col>
    </Row>
  )
}
export default React.memo(ListWorks);