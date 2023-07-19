import { SearchParams } from '../types/model';

export const parseSearchParams = (params: URLSearchParams) => {
  const result: SearchParams = {};
  Array.from(params.keys()).forEach((key) => {
    result[key] = params.get(key) || '';
  });

  return result;
};
