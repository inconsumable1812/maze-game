type Args = {
  row: number;
  column: number;
};

const createIDsArray = ({ row, column }: Args) => {
  const rowArray = new Array(row).fill('');
  const columnArray = new Array(column).fill('');
  const array: [number, number][] = [];

  rowArray.forEach((row, rowIndex) =>
    columnArray.forEach((column, columnIndex) =>
      array.push([rowIndex + 1, columnIndex + 1])
    )
  );

  return array;
};

export { createIDsArray };
