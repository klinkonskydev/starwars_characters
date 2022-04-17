const firstLetterUppercase = (string: string | undefined) => {
  let firstValue;
  let result;

  if(string) {
    firstValue = string.split(',').length > 0
    result = string.split(',')[0]
  }

  return !!result ? result.charAt(0).toUpperCase() + result.slice(1) : string;
}

export default firstLetterUppercase
