import { City } from '../types/model';
import cities from '../assets/cities.json';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const getCities = async (inputValue: string) => {
  await delay(1000);

  // When a user attempts to find cities using the phrase “fail” (case-insensitive)
  // the mocked API should fail to return results to demonstrate the error handling
  // abilities of the UI.
  if (inputValue.toLowerCase() === 'fail') {
    throw new Error('Sorry! Something went wrong...');
  }

  const data: City[] = cities.filter(({ name }) =>
    name.toLowerCase().includes(inputValue.toLowerCase()),
  );
  return data;
};
