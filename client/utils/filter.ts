import { Card, task } from '../types';

export const filterByType = (contents: (task | Card)[], valueTypes: any) => {
  const filteredTypes: string[] = [];
  for (const type in valueTypes) {
    if (valueTypes[type] === true) {
      filteredTypes.push(type);
    }
  }
  if (filteredTypes.length === 0) {
    return contents;
  }
  return contents.filter((card) => {
    const type = card.type.name;
    return filteredTypes.includes(type);
  });
};
