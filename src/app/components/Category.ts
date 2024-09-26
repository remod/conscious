import { Color } from './Color';

export enum Category {
  Mobility = 'Mobility',
  Consumption = 'Consumption (non Food)',
  Housing = 'Housing and Energy',
  Nutrition = 'Nutrition',
  PublicServices = 'Public Services',
}

export const categoryColor = {
  [Category.Mobility]: Color.Color1,
  [Category.Consumption]: Color.Color2,
  [Category.Housing]: Color.Color3,
  [Category.Nutrition]: Color.Color4,
  [Category.PublicServices]: Color.Color5,
};
