export type optionsType = {
  q: string;
  sort: string;
  order: string;
};

export type keyOptionsType = keyof optionsType;

export type searchOptionsType = {
  [key in keyof optionsType]?: optionsType[key];
};

export interface Company {
  companyName: String;
  logo: String;
  managerName: String;
  activity: String;
  sectorActivity: String;
  products: [String];
  country: String;
  state: String;
  city: String;
  lang: String;
  address: String;
  phone: String;
  cell: String;
  email: String;
  website: String;
  facebook: String;
  services: String;
  slug: String;
}

export type favorType = 'all' | 'favored' | 'unfavored';
