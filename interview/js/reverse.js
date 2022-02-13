function reverse(str) {
  str = str.split('');
  for (let i = 0, j = str.length - 1; i <= j; i++, j--) {
    [str[i], str[j]] = [str[j], str[i]];
  }
  return str.join('');
}

console.log(reverse('hello'));
