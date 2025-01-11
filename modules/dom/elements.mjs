const allElements = document.querySelectorAll('*');
const allElementsArray = Array.from(allElements);
export const [elements] = [allElementsArray];

const allPagesCollection = document.getElementsByClassName('page');
const allPagesArray = Array.from(allPagesCollection);
export const [pages] = [allPagesArray];

const allLinesCollection = document.getElementsByClassName('line');
const allLinesArray = Array.from(allLinesCollection);
export const [lines] = [allLinesArray];

const allWordsCollection = document.getElementsByClassName('word');
const allWordsArray = Array.from(allWordsCollection);
export const [words] = [allWordsArray];
