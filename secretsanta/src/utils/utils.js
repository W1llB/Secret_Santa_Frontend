export function removeEmptyStrings(array) {
  let cleanedArray = [];
  for (const string of array) {
    if (string.length > 0) {
      cleanedArray.push(string);
    }
  }
  return cleanedArray;
}

export function findDuplicateNames(inputMembersObject, setState) {
  const namesArray = removeEmptyStrings(Object.values(inputMembersObject));
  let result = namesArray.some((element, index) => {
    return namesArray.indexOf(element) !== index;
  });
  setState(!result);
}

export function checkLengthGreaterThan(number, inputMembersObject, setState) {
  const namesArray = removeEmptyStrings(Object.values(inputMembersObject));
  if (namesArray.length <= number) {
    setState(false);
  } else if (namesArray.length > number) {
    setState(true);
  }
}
