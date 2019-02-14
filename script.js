  function aleatorio(min = 0, max = 50) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  console.log(aleatorio(0,50));

  let adivinhar = Number (prompt('Adivinhe o nosso número de 0 a 50! :)'));

  if (adivinhar = aleatorio) {
      alert('Você acertou!');
  }
  else {
      alert('Você errou, tente novamente!');
  }