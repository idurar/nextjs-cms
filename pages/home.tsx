import { useState } from 'react';
import {  Divider, RadioChangeEvent } from 'antd';
import {PageHeader} from '@ant-design/pro-components'

import { DefaultLayout } from '@/layout';

import FavorFilter from '@/components/FavorFilter';
import RepoList from '@/components/RepoList';
import SortSelect from '@/components/SortSelect';

import { favorType } from '@/types';

const Home = () => {
  const [favorState, setFavorState] = useState<favorType>('all');
  const [sortState, setSortState] = useState('desc');



  const handleSortChange = (value: string) => {
    setSortState(value);
  };

  return (
    <DefaultLayout>
      <PageHeader
        ghost={false}
        title="Github App"
        subTitle="Repository Search"
        extra={[
          <SortSelect key="sortSelect" handleSortChange={handleSortChange} />,
        ]}
        className="appHeader"
      />
      <Divider />
      <RepoList sortState={sortState}  />
    </DefaultLayout>
  );
};

export default Home;
