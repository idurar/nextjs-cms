import React from 'react';
import { Card, Typography, Button } from 'antd';
import { HeartOutlined, StarOutlined, GithubOutlined, ArrowsAltOutlined } from '@ant-design/icons';


const { Paragraph } = Typography;



const CompanyCard = ({ item }: { item: any }) => {
  
  return (
    <Card
      title={item?.companyName}
      className="repoCard"
      style={{ minHeight: location.pathname != '/' ? '500px' : 'auto' }}

    >
      <Paragraph ellipsis={{ rows: 2 }}>
        Link : <a href={item?.website}>{item?.website}</a>
      </Paragraph>
      <Paragraph ellipsis={{ rows: 3 }}>Description : {item?.services}</Paragraph>
    </Card>
  );
};

export default CompanyCard;
