import React from 'react';
import { Card, Typography, Button } from 'antd';
import { HeartOutlined, StarOutlined, GithubOutlined, ArrowsAltOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setCurrentCompany } from '@/redux/features/company-slice';
import { AppDispatch } from '@/redux/store';

const CompanyCard = ({ item }: { item: any }) => {
  const { Paragraph } = Typography;
  const router = useRouter();

  const dispatch = useDispatch<AppDispatch>();
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
  return (
    <Card
      title={item?.companyName || 'Company name'}
      className="repoCard"
      style={{ minHeight: router.pathname != '/' ? '500px' : 'auto' }}
      actions={[
        router.pathname == '/' ? (
          <Action
            text={'Open'}
            key="openCard"
            icon={<ArrowsAltOutlined />}
            onClick={() => {
              if (item) {
                console.log('🚀 ~ file: CompanyCard.tsx:25 ~ CompanyCard ~ open:');
                dispatch(setCurrentCompany(item));
              }
              router.push(`company/${item?.companyName}`);
            }}
          />
        ) : (
          <Action
            text={'Close'}
            key="closeCard"
            icon={<ArrowsAltOutlined />}
            onClick={() => {
              router.push('/');
            }}
          />
        ),
      ]}
    >
      <Paragraph ellipsis={{ rows: 2 }}>
        Link : <a href={item?.website}>{item?.website}</a>
      </Paragraph>
      <Paragraph ellipsis={{ rows: 3 }}>Description : {item?.services}</Paragraph>
    </Card>
  );
};

export default CompanyCard;
