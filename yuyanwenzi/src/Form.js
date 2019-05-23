import React from 'react';
import {
    Form,
    Select,
    Button,
  } from 'antd';

  import { List } from 'antd';
  import RadioGroupItem from './RatioGroupItem';

  const data = [
    {
      title: '在你看来，让自己说好普通话，写好规范字有用吗',
      a:'非常',
      b:'一般',
      c:'没用',
    },
    {
    title: '在你看来，让自己说好普通话，写好规范字有用吗',
    a:'非常',
    b:'一般',
    c:'没用',
    },
    {
    title: '在你看来，让自己说好普通话，写好规范字有用吗',
    a:'非常',
    b:'一般',
    c:'没用',
    },
    {
    title: '在你看来，让自己说好普通话，写好规范字有用吗',
    a:'非常',
    b:'一般',
    c:'没用',
    },
  ];
  
  class Demo extends React.Component {
    handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    };
  
  
    render() {
      const { getFieldDecorator } = this.props.form;
      const formItemLayout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 14 },
      };
      return (
        <Form {...formItemLayout} layout="horizontal" onSubmit={this.handleSubmit}>

            <List
                bordered
                dataSource={data}
                renderItem={item => (
                <List.Item>
                    <Form.Item label={item.title}>  
                        {getFieldDecorator('radio-group')(
                            <RadioGroupItem  a={item.a} b={item.b} c={item.c} />,
                        )}
                    </Form.Item>
                </List.Item>
                )}
            />


          <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      );
    }
  }
  
  const WrappedForm = Form.create({ name: 'validate_other' })(Demo);
  

  export default WrappedForm;