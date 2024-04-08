export enum Category {
  Mobility = 'Mobility',
  Consumption = 'Consumption (non Food)',
  Housing = 'Housing and Energy',
  Nutrition = 'Nutrition',
  PublicServices = 'Public Services',
}

export const categoryColor = {
  [Category.Mobility]: '#327373',
  [Category.Consumption]: '#F2B337',
  [Category.Housing]: '#F29D35',
  [Category.Nutrition]: '#F25430',
  [Category.PublicServices]: '#F22929',
};
