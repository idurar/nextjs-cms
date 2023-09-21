import companyController from '@/backend/controllers/companyController';
import { resolverType } from 'fast-graphql';
import * as schema from '@/backend/graphql/generated/schemaType';

const Query = {
  async read(parent: any, args: any, ctx: any): Promise<schema.Query['read']> {
    return await companyController().read(args);
  },
  async listCompany(parent: any, args: any, ctx: any): Promise<schema.Query['listCompany']> {
    return await companyController().list(args);
  },
  async search(parent: any, args: any, ctx: any): Promise<schema.Query['search']> {
    return await companyController().search(args);
  },
};

const Mutation = {
  async create(parent: any, args: any, ctx: any): Promise<schema.Mutation['create']> {
    return await companyController().create(args);
  },
  async update(parent: any, args: any, ctx: any): Promise<schema.Mutation['update']> {
    return await companyController().update(args);
  },
  async delete(parent: any, args: any, ctx: any): Promise<schema.Mutation['delete']> {
    return await companyController().delete(args);
  },
};

const resolver: resolverType = { Query, Mutation };

export default resolver;
