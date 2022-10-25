const substituaX = (nome) => {
  const frase = "Trybe x aqui!";
  let palavras = frase.split(" ");
  palavras[1] = nome;
  return palavras.join(" ");
};

const minhasSkills = (nome) => {
  let frase = substituaX(nome);
  const skills = ["html", "css", "javascript"];
  let resul = `${frase}\nMinhas três principais habilidades são:\n${skills}`;
  return resul;
};

console.log(minhasSkills("rods"));
