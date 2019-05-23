import React from 'react';
import './Head.css';
import { Typography, Divider } from 'antd';
const { Title, Paragraph, Text } = Typography;

function Head() {
    return (
      <div>
        <Title className="title" level={1}>语言文字规范化调查问卷</Title>
        <Paragraph>
          亲爱的同学：
        </Paragraph>
        <Paragraph className="content">
          为了了解大家的语言文字是否规范，并且通过这个调查的结果进行分析，在此浪费你们宝贵的几分钟，填下这份问卷，谢谢你们配合，谢谢合作！
        </Paragraph>
      </div>
    );
  }
  
  export default Head;