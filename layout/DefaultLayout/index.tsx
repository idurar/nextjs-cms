import React from 'react';

import { Layout } from 'antd';

const { Content } = Layout;

type DefaultLayoutProps = {
  children: React.ReactNode; // Specify the 'children' prop with the correct type
};

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <Layout className="site-layout">
      <Content className="contentLayout">{children}</Content>
    </Layout>
  );
};

export default DefaultLayout;
