const longestWord = (word) => {
  const list = word.split(" ");
  let maior = list[0];
  for (let item of list) {
    if (item.length > maior.length) maior = item;
  }
  return maior;
};
console.log(
  longestWord("Antônio foi ao banheiro e não sabemos o que aconteceu")
);
