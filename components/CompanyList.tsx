import { gql, useQuery } from '@apollo/client';

import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";


import ErrorMessage from '@/components/ErrorMessage';


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

  if (loading) return <div>Loading</div>;
  if (error) return `Error! ${error}`;


  // const loadingMoreCompanys = networkStatus === NetworkStatus.fetchMore;

  // if (error) return <ErrorMessage message="Error loading Companys." />;
  // if (__DEV__) : (__DEV__:any) {  // Adds messages only in a dev environment
  //   loadDevMessages();
  //   loadErrorMessages();
  // }


  console.log('🚀 ~ file: CompanyList.tsx ~ line 53 ~ CompanyList ~ data', data);

  const { listCompany } = data;

  // const loadMoreCompanys = () => {
  //   fetchMore({
  //     variables: {
  //       page: listCompany?.pagination.page + 1,
  //     },
  //   });
  // };
  // const areMoreCompanys = listCompany?.pagination.page < listCompany?.pagination.pages;

  return (
    <section>
      <ul>
        {listCompany?.edges.map((Company: any, index: number) => (
          <li key={Company._id}>
            <div>
              <span>{index + 1}. </span>
              <div>{Company.companyName}</div>
              <div>{Company.activity}</div>
            </div>
          </li>
        ))}
      </ul>
      {/* {areMoreCompanys && (
        <button onClick={() => loadMoreCompanys()} disabled={loadingMoreCompanys}>
          {loadingMoreCompanys ? 'Loading...' : 'Show More'}
        </button>
      )} */}
    </section>
  );
}
