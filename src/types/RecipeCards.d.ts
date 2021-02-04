export interface IRecipeResult {
  title: string;
  id: number;
  image: string;
  readyInMinutes: number;
  analyzedInstructions: IRecipeResultStep[];
}

export interface IRecipeResultStep {
  name: string;
  steps: IRecipeStep[];
}

export interface IRecipeStep {
  step: string;
  ingredients: IRecipeIngredient[];
}

export interface IRecipeIngredient {
  id: number;
  name: string;
  localizedName: string;
  image: string;
}
