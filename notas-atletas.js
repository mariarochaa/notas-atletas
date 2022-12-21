


 let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas:  [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
 ];

 let nomeAtletas = atletas.map(function(nomes){
  return nomes.nome
})

let notasObtidas = atletas.map(function(notas){
return notas.notas
})

class Atleta {
 calculaMediaValida() {
  let notas = this.notas;
  let notasEmOrdem = notas.sort(function comparaNumeros(a, b) {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
  });


  let notaTotal = notasEmOrdem.slice(1, 4)

  let soma = notaTotal.reduce(function (total, atual) {
      return total + atual
  }, 0)

  let media = (soma / notaTotal.length);

  return media;
 }
 
}