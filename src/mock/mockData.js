import { faker } from '@faker-js/faker';

const generateMockData = (count) => {
  const mockData = [];

  for (let i = 1; i <= count; i++) {
    const car = faker.vehicle.vehicle();
    const instock = faker.datatype.boolean();
    const hp = faker.helpers.rangeToNumber({ min: 100, max: 500 });
    const price = faker.helpers.rangeToNumber({ min: 10000, max: 80000 });
    const color = faker.vehicle.color();

    mockData.push({
      ID: i,
      CAR: car,
      INSTOCK: instock,
      HP: hp,
      PRICE: price,
      COLOR: color,
    });
  }

  return mockData;
};

export default generateMockData;