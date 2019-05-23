import React from 'react';
import { Radio } from 'antd';

const RadioGroup = Radio.Group;

class RadioGroupItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: 0,
    }
  };

  onChange = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    return (
      <div>
        {this.props.title}
        <RadioGroup onChange={this.onChange} value={this.state.value}>
          <Radio value={1}>A.{this.props.a}</Radio>
          <Radio value={2}>B.{this.props.b}</Radio>
          <Radio value={3}>C.{this.props.c}</Radio>
        </RadioGroup>
      </div>
    );
  }
}

export default RadioGroupItem;