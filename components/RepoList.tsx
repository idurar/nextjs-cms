import { useEffect, useState } from 'react';
import { List } from 'antd';

import useFetch from '@/hooks/useFetch'
import { request } from '@/request';


import RepoCard from '@/components/RepoCard';
import { formatDate } from '@/utils';

import {  repoType } from '@/types';

const lastWeek = formatDate(new Date(new Date().setDate(new Date().getDate() - 7)));


const RepoList = ({sortState}: {sortState: string;}) => {
  
  const [githubStateList, setGithubList] = useState<repoType[]>([]);

  
  const fetchList = async () =>  (await request.search({
    entity: 'repositories',
    options: { q: `created:%3E${lastWeek}`, sort: 'stars', order: sortState },
  }));

  const {result, isLoading, isSuccess} =useFetch(fetchList)  
    
    

    // useEffect( () => {
    //   onFetch(fetchList);
      
 
    // }, []);

    
  useEffect( () => {
    
    
    if (isSuccess) {
      const {items} : {items:repoType[]} = result;
      setGithubList([...items])
    }

  }, [sortState]);



  return (
    <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 2,
        lg: 3,
        xl: 3,
        xxl: 3,
      }}
      dataSource={githubStateList}
      loading={isLoading}
      renderItem={(item: repoType) => (
        <List.Item>
          <RepoCard item={item} />
        </List.Item>
      )}
    />
  );
};

export default RepoList;
