export const isNumber = (value?: string | number) =>
  typeof value === 'number' &&
  value === value &&
  value !== Infinity &&
  value !== -Infinity;
