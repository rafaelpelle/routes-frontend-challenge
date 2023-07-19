import haversine from 'haversine-distance';
import { City } from '../types/model';
import { GetDistanceBetweenCitiesDTO } from '../types/DTO';
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

export const getDistanceBetweenCities = async (
  cities: City[],
): Promise<GetDistanceBetweenCitiesDTO> => {
  await delay(1000);
  const distances: string[] = [];
  let totalDistance: number = 0;

  cities.forEach((city, index) => {
    if (index >= 1) {
      const distance = haversine(city, cities[index - 1]) / 1000;
      totalDistance += distance;
      distances.push(`${distance.toFixed(2)} km`);
    }

    // When “Dijon” city is involved the distance calculation should fail
    // to demonstrate the error handling abilities of the UI.
    if (city.name.includes('Dijon')) {
      throw new Error('Sorry! Something went wrong...');
    }
  });

  return { distances, totalDistance };
};
