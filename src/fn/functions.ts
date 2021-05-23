export const shuffleCards = (arr: string[]): string[] => {
  let i: number, j: number, temp: string;
  for (i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  return arr;
};
