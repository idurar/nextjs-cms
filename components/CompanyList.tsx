import { gql, useQuery } from '@apollo/client';

import { List } from 'antd';
import CompanyCard from '@/components/CompanyCard';

export const LIST_COMPANY_QUERY = gql`
query Query($page: Int) {
  listCompany(page: $page) {
    edges {
      _id
      activity
      cell
      address
      city
      companyName
      country
      created
      email
      facebook
      lang
      logo
      managerName
      phone
      sectorActivity
      services
      slug
      state
      website
    }
    pagination {
      count
      page
      pages
    }
  }
}
`;

export const listCompanyQueryVars = {
  page: 1,
};


export default function CompanyList() {
  
  

  const { loading, error, data } = useQuery(LIST_COMPANY_QUERY, {
    variables: listCompanyQueryVars,
  });

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
      dataSource={data?.listCompany?.edges}
      loading={loading}
      renderItem={(item) => (
        <List.Item>
          <CompanyCard item={item} />
        </List.Item>
      )}
    />
  );
};



