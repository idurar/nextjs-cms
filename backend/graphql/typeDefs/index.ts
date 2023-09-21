export default `type Company {
  _id: ID!
  companyName: String
  logo: String
  managerName: String
  activity: String
  sectorActivity: String
  state:String
  address:String
  phone:String
  cell:String
  email:String
  website:String
  facebook:String
  services:String
  created:Float
}

input InputCompanyType {
  companyName: String!
  logo: String
  managerName: String!
  activity: String!
  sectorActivity: String!
  state:String!
  address:String!
  phone:String
  cell:String
  email:String!
  website:String
  facebook:String
  services:String
}

type Mutation {
  create(body: InputCompanyType!): Company
  update(_id: ID!, body: InputCompanyType!): Company
  delete(_id: ID!): Company
}

type PaginationType {
  page: Int
  pages: Int
  count: Int
}

type EdgesType {
  edges: [Company]
  pagination: PaginationType
}

type Query {
  read(_id: ID!): Company
  listCompany(page: Int, limit: Int, sortBy: String, sortOrder: String): EdgesType
  search(limit: Int, query: String!, fields: String!): [Company]
}
`;