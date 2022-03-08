import type Ingredient from "./Ingredient";

export default interface Recipe {
  id: number;
  title: string;
  image: string;
  description: string;
  difficulty: number;
  preparationTime: number;
  servings: number;
  ingredients: Ingredient[];
  directions: string[];
}
