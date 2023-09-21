import companyController from '@/backend/controllers/companyController';
import { resolverType } from 'fast-graphql';
import * as schema from '@/backend/graphql/generated/schemaType';

const Query = {
  async readCompany(parent: any, args: any, ctx: any): Promise<schema.Query['readCompany']> {
    return await companyController().read(args);
  },
  async listCompany(parent: any, args: any, ctx: any): Promise<schema.Query['listCompany']> {
    return await companyController().list(args);
  },
  async searchCompany(parent: any, args: any, ctx: any): Promise<schema.Query['searchCompany']> {
    return await companyController().search(args);
  },
};

const Mutation = {
  async createCompany(parent: any, args: any, ctx: any): Promise<schema.Mutation['createCompany']> {
    return await companyController().create(args);
  },
  async updateCompany(parent: any, args: any, ctx: any): Promise<schema.Mutation['updateCompany']> {
    return await companyController().update(args);
  },
  async deleteCompany(parent: any, args: any, ctx: any): Promise<schema.Mutation['deleteCompany']> {
    return await companyController().delete(args);
  },
};

const resolver: resolverType = { Query, Mutation };

export default resolver;
