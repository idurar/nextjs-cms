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

export type InputPlaceType = {
  desciption: Scalars['String']['input'];
  mainPhoto: Scalars['String']['input'];
  owner: Scalars['ID']['input'];
  photos: Array<InputMaybe<Scalars['String']['input']>>;
  priceByNight: Scalars['Float']['input'];
  type: Scalars['String']['input'];
};

export type InputReviewType = {
  author: Scalars['ID']['input'];
  feedback?: InputMaybe<Scalars['String']['input']>;
  place: Scalars['ID']['input'];
  rate: Scalars['Float']['input'];
};

export type InputUserType = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createPlace?: Maybe<Place>;
  createReview?: Maybe<Review>;
  createUser?: Maybe<User>;
  deletePlace?: Maybe<Place>;
  deleteReview?: Maybe<Review>;
  deleteUser?: Maybe<User>;
  updatePlace?: Maybe<Place>;
  updateReview?: Maybe<Review>;
  updateUser?: Maybe<User>;
};


export type MutationCreatePlaceArgs = {
  body: InputPlaceType;
};


export type MutationCreateReviewArgs = {
  body: InputReviewType;
};


export type MutationCreateUserArgs = {
  body: InputUserType;
};


export type MutationDeletePlaceArgs = {
  _id: Scalars['ID']['input'];
};


export type MutationDeleteReviewArgs = {
  _id: Scalars['ID']['input'];
};


export type MutationDeleteUserArgs = {
  _id: Scalars['ID']['input'];
};


export type MutationUpdatePlaceArgs = {
  _id: Scalars['ID']['input'];
  body: InputPlaceType;
};


export type MutationUpdateReviewArgs = {
  _id: Scalars['ID']['input'];
  body: InputReviewType;
};


export type MutationUpdateUserArgs = {
  _id: Scalars['ID']['input'];
  body: InputUserType;
};

export type PaginationType = {
  __typename?: 'PaginationType';
  count: Scalars['Int']['output'];
  page: Scalars['Int']['output'];
  pages: Scalars['Int']['output'];
};

export type Place = {
  __typename?: 'Place';
  _id: Scalars['ID']['output'];
  desciption?: Maybe<Scalars['String']['output']>;
  mainPhoto?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<User>;
  photos?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  priceByNight?: Maybe<Scalars['Float']['output']>;
  reviews?: Maybe<Array<Maybe<Review>>>;
};

export type PlaceEdgesType = {
  __typename?: 'PlaceEdgesType';
  edges?: Maybe<Array<Maybe<Place>>>;
  pagination?: Maybe<PaginationType>;
};

export type Query = {
  __typename?: 'Query';
  listPlace?: Maybe<PlaceEdgesType>;
  listReview?: Maybe<ReviewEdgesType>;
  listUser?: Maybe<UserEdgesType>;
  readPlace?: Maybe<Place>;
  readReview?: Maybe<Review>;
  readUser?: Maybe<User>;
  reviewByUser?: Maybe<Array<Maybe<Review>>>;
  searchPlace?: Maybe<Array<Maybe<Place>>>;
  searchReview?: Maybe<Array<Maybe<Review>>>;
  searchUser?: Maybe<Array<Maybe<User>>>;
};


export type QueryListPlaceArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryListReviewArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryListUserArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryReadPlaceArgs = {
  _id: Scalars['ID']['input'];
};


export type QueryReadReviewArgs = {
  _id: Scalars['ID']['input'];
};


export type QueryReadUserArgs = {
  _id: Scalars['ID']['input'];
};


export type QueryReviewByUserArgs = {
  _id?: InputMaybe<Scalars['ID']['input']>;
};


export type QuerySearchPlaceArgs = {
  fields: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  query: Scalars['String']['input'];
};


export type QuerySearchReviewArgs = {
  fields: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  query: Scalars['String']['input'];
};


export type QuerySearchUserArgs = {
  fields: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  query: Scalars['String']['input'];
};

export type Review = {
  __typename?: 'Review';
  _id: Scalars['ID']['output'];
  author?: Maybe<User>;
  feedback?: Maybe<Scalars['String']['output']>;
  place?: Maybe<Scalars['ID']['output']>;
  rate?: Maybe<Scalars['Float']['output']>;
};

export type ReviewEdgesType = {
  __typename?: 'ReviewEdgesType';
  edges?: Maybe<Array<Maybe<Review>>>;
  pagination?: Maybe<PaginationType>;
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID']['output'];
  email?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  photo?: Maybe<Scalars['String']['output']>;
};

export type UserEdgesType = {
  __typename?: 'UserEdgesType';
  edges?: Maybe<Array<Maybe<User>>>;
  pagination: PaginationType;
};
