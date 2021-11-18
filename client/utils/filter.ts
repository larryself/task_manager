import { Card, task } from '../types';

export const filterByType = (contents: (Card | task)[], valueTypes: { [type: string]: boolean }): (Card | task)[] => {
  const filteredTypes: string[] = [];
  for (const type in valueTypes) {
    if (valueTypes[type] === true) {
      filteredTypes.push(type);
    }
  }
  if (filteredTypes.length === 0) {
    return contents;
  }
  return contents.filter((element: Card | task) => {
    const type = element.type.name;
    return filteredTypes.includes(type);
  });
};
