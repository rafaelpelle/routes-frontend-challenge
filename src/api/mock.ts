import { City } from '../types/model';
import cities from '../assets/cities.json';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const getCities = async (inputValue: string) => {
  await delay(1000);
  const data: City[] = cities.filter(({ name }) =>
    name.toLowerCase().includes(inputValue.toLowerCase()),
  );
  return data;
};
