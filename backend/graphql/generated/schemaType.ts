export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Company = {
  __typename?: 'Company';
  _id: Scalars['ID']['output'];
  activity?: Maybe<Scalars['String']['output']>;
  address?: Maybe<Scalars['String']['output']>;
  cell?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  companyName?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['Float']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  facebook?: Maybe<Scalars['String']['output']>;
  lang?: Maybe<Scalars['String']['output']>;
  logo?: Maybe<Scalars['String']['output']>;
  managerName?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  products?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  sectorActivity?: Maybe<Scalars['String']['output']>;
  services?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  website?: Maybe<Scalars['String']['output']>;
};

export type EdgesType = {
  __typename?: 'EdgesType';
  edges?: Maybe<Array<Maybe<Company>>>;
  pagination?: Maybe<PaginationType>;
};

export type InputCompanyType = {
  activity: Scalars['String']['input'];
  address: Scalars['String']['input'];
  cell?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  companyName: Scalars['String']['input'];
  country?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  facebook?: InputMaybe<Scalars['String']['input']>;
  logo?: InputMaybe<Scalars['String']['input']>;
  managerName: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  products?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectorActivity: Scalars['String']['input'];
  services?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCompany?: Maybe<Company>;
  deleteCompany?: Maybe<Company>;
  updateCompany?: Maybe<Company>;
};


export type MutationCreateCompanyArgs = {
  body: InputCompanyType;
};


export type MutationDeleteCompanyArgs = {
  _id: Scalars['ID']['input'];
};


export type MutationUpdateCompanyArgs = {
  _id: Scalars['ID']['input'];
  body: InputCompanyType;
};

export type PaginationType = {
  __typename?: 'PaginationType';
  count?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pages?: Maybe<Scalars['Int']['output']>;
};

export type Query = {
  __typename?: 'Query';
  listCompany?: Maybe<EdgesType>;
  readCompany?: Maybe<Company>;
  searchCompany?: Maybe<Array<Maybe<Company>>>;
};


export type QueryListCompanyArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryReadCompanyArgs = {
  _id: Scalars['ID']['input'];
};


export type QuerySearchCompanyArgs = {
  fields: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  query: Scalars['String']['input'];
};
