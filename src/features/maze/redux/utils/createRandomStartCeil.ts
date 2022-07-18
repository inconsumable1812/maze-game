const createRandomStartCeil = (row: number, column: number) => {
  const startRow = Math.floor(Math.random() * row) + 1;
  const startColumn = Math.floor(Math.random() * column) + 1;

  const startCeil = [startRow, startColumn];

  return startCeil as [number, number];
};

export { createRandomStartCeil };
