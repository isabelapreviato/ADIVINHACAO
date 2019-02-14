function aleatorio(min = 0, max = 50) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


let adivinhar = Number(prompt('Adivinhe o nosso número de 0 a 50! :)'));
let ale = aleatorio();

//   while ()

if (adivinhar == ale) {
    alert('Você acertou!');
}
else if (adivinhar > ale) {
    alert('Você errou, seu número foi maior que o random! tente novamente!');
}
else {
    alert('Você errou, seu número foi menor que o random! tente novamente!');
}
console.log(typeof(adivinhar), typeof(ale));