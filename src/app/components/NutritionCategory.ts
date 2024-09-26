import { Color } from './Color';

export enum NutritionCategory {
  Beverage = 'Beverage',
  VegetableAndFruit = 'Vegetable',
  Carbohydrates = 'Carbohydrates',
  FatAndOil = 'Fat and Oil',
  Proteins = 'Meat',
}

export const nutritionCategoryColor = {
  [NutritionCategory.Beverage]: Color.Color1,
  [NutritionCategory.VegetableAndFruit]: Color.Color2,
  [NutritionCategory.Carbohydrates]: Color.Color3,
  [NutritionCategory.FatAndOil]: Color.Color4,
  [NutritionCategory.Proteins]: Color.Color5,
};
