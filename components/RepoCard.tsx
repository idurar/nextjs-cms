import React from 'react';
import { Card, Typography, Button } from 'antd';
import { HeartOutlined, StarOutlined, GithubOutlined, ArrowsAltOutlined } from '@ant-design/icons';






import { repoType } from '@/types';

const { Paragraph } = Typography;

const Action = ({
  text,
  icon,
  onClick = () => {},
}: {
  text: string;
  icon: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <div className="actionContainer" onClick={onClick}>
      <div className="actionIcon">
        {icon}
        <div className="actionText">{text}</div>
      </div>
    </div>
  );
};


const RepoCard = ({ item }: { item: repoType | undefined }) => {
  

  return (
    <Card
      title={item?.full_name}
      className="repoCard"
      style={{ minHeight: location.pathname != '/' ? '500px' : 'auto' }}
      actions={[
        <Action
          text={item?.stargazers_count + (item && item.stargazers_count > 1 ? ' stars' : ' stars')}
          key="star"
          icon={<StarOutlined />}
        />,
        <Action text={item?.language || 'Unknow'} key="language" icon={<GithubOutlined />} />,
        location.pathname == '/' ? (
          <Action
            text={'Open'}
            key="openCard"
            icon={<ArrowsAltOutlined />}
            onClick={() => {
              
            }}
          />
        ) : (
          <Action
            text={'Close'}
            key="closeCard"
            icon={<ArrowsAltOutlined />}
            onClick={() => {
             
            }}
          />
        ),
      ]}
    >
      <Paragraph ellipsis={{ rows: 2 }}>
        Link : <a href={item?.html_url}>{item?.html_url}</a>
      </Paragraph>
      <Paragraph ellipsis={{ rows: 3 }}>Description : {item?.description}</Paragraph>
    </Card>
  );
};

export default RepoCard;
