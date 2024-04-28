const alphabeticalList = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
] as const;

export type AlphaChar = (typeof alphabeticalList)[number];

export function getSortedListByAlphabeticalCategories<
  T extends Record<string, unknown | string>,
>(list: T[], sortField: keyof T) {
  const sortedList = structuredClone(list);
  sortedList.sort((a, b) => {
    if (!a[sortField] || !b[sortField]) {
      throw new Error(
        `${String(sortField)} doesn't exist on either items : 
          ${JSON.stringify(a)} 
          or 
          ${JSON.stringify(b)}
        `,
      );
    }
    const nameA = a[sortField].toLowerCase();
    const nameB = b[sortField].toLowerCase();
    if (nameA > nameB) {
      return 1;
    }
    if (nameA < nameB) {
      return -1;
    }
    return 0;
  });

  const listByAlphabeticalCategory = [];
  for (const letter of alphabeticalList) {
    const itemsStartingByLetter = sortedList.filter(
      author => author.name[0].toLowerCase() === letter,
    );
    if (itemsStartingByLetter.length) {
      listByAlphabeticalCategory.push({
        title: letter,
        data: itemsStartingByLetter,
      });
    }
  }

  return listByAlphabeticalCategory;
}
