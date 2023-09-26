import React from 'react';

import { Layout } from 'antd';
import { ReduxProvider } from '@/redux/provider';

const { Content } = Layout;

type DefaultLayoutProps = {
  children: React.ReactNode; // Specify the 'children' prop with the correct type
};

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <Layout className="site-layout">
      <ReduxProvider>
        <Content className="contentLayout">{children}</Content>
      </ReduxProvider>
    </Layout>
  );
};

export default DefaultLayout;
