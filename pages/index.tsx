import { useState } from 'react';
import {  Divider, RadioChangeEvent } from 'antd';
import {PageHeader} from '@ant-design/pro-components'

import { DefaultLayout } from '@/layout';

import CompanyList from '@/components/CompanyList'


const Home = () => {
  return (
    <DefaultLayout>
      <PageHeader
        ghost={false}
        title="Ivoprint"
        subTitle="Annuaire Imprimerie Algerie"
        extra={[
          
        ]}
        className="appHeader"
      />
      
      <CompanyList/>
    </DefaultLayout>
  );
};

export default Home;
