import { combineResolvers, resolverType } from 'fast-graphql';


import company from './company';


const resolvers: resolverType[] = [company];

const cominedResolvers = combineResolvers({ resolvers });

export default cominedResolvers;
