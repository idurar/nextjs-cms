import crudController from '@/backend/controllers/crudController';
import * as schemaType from '@/backend/graphql/generated/schemaType';

import Company from '@/backend/models/Company';

const companyController = () => {
  return crudController<schemaType.Company>(Company);
}

export default companyController;
