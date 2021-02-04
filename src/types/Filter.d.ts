export interface IFilter {
  results: IrecipeInfo[];
  offset: number;
  numberOfResults: number;
  totalResults: number;
}

export interface IrecipeInfo {
  id: number;
  title: string;
  image: string;
  imageType: string;
  nutrition: Inutrition;
  flag: string;
}

export interface Inutrition {
  nutrients: Inutrients[];
}

export interface Inutrients {
  title: string;
  amount: number;
  unit: string;
}

export interface ICategory {
  name: string;
  id: string;
  checked: boolean;
}
