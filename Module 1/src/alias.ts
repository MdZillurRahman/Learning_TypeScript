type Friends = {
  name: string;
  age: number;
  isMarried: boolean;
  occupation?: null | string;
};

const friend1: Friends = {
  name: "Osman",
  age: 26,
  isMarried: false,
  occupation: null,
};
const friend2: Friends = {
  name: "Arif",
  age: 29,
  isMarried: true,
  occupation: "Developer",
};

type OperationType = (x: number, y: number, z: number) => number;

const calculation = (
  num1: number,
  num2: number,
  num3: number,
  operation: OperationType
) => {
  return operation(num1, num2, num3);
};

calculation(10, 20, 30, (x, y, z) => x + y + z);
calculation(10, 20, 30, (x, y, z) => x + y - z);
calculation(10, 20, 30, (x, y, z) => (x / y) * z);
