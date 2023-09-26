import CompanyCard from '@/components/CompanyCard';
import { useAppSelector } from '@/redux/store';
import { PageHeader } from '@ant-design/pro-components';
import { Divider } from 'antd';
import { useRouter } from 'next/router';

const Company = ({ params }: { params: any }) => {
  const id = params;
  const router = useRouter();

  const currentCompany = useAppSelector((state) => state.companyReducer);
  return (
    <>
      <PageHeader
        ghost={false}
        onBack={() => router.push('/')}
        title="Github App"
        subTitle="Repository Search"
        className="appHeader"
      />
      <Divider />
      <CompanyCard item={currentCompany} />
    </>
  );
};
export default Company;
