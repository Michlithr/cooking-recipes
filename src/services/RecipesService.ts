import { recipes } from "@/dummyData/recipes";

export default class RecipesService {
  public static async fetchRecipes() {
    return recipes;
  }

  public static async fetchRecipe(id: number) {
    return recipes.find((recipe) => recipe.id === id);
  }
}
