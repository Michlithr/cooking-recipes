import type Recipe from "@/interfaces/Recipe";

export const recipes: Recipe[] = [
  {
    id: 0,
    title: "First recipe",
    image: "americanFood",
    description: "This is example description for a recipe",
    difficulty: 2,
    preparationTime: 120,
  } as Recipe,
  {
    id: 1,
    title: "Second recipe",
    image: "asianFood",
    description: "This is example description for a recipe",
    difficulty: 3,
    preparationTime: 120,
  } as Recipe,
  {
    id: 2,
    title: "Third recipe",
    image: "englishFood",
    description: "This is example description for a recipe",
    difficulty: 4.5,
    preparationTime: 120,
  } as Recipe,
  {
    id: 3,
    title: "4th recipe",
    image: "italianFood",
    description: "This is example description for a recipe",
    difficulty: 5,
    preparationTime: 120,
  } as Recipe,
  {
    id: 4,
    title: "5th recipe",
    image: "mexicanFood",
    description: "This is example description for a recipe",
    difficulty: 3.5,
    preparationTime: 120,
  } as Recipe,
];
