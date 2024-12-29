"use strict";

// Array de objetos com nome e nota dos alunos
var alunos = [{
  nome: "Alice",
  nota: 7.5
}, {
  nome: "Bruno",
  nota: 5.8
}, {
  nome: "Carlos",
  nota: 6.0
}, {
  nome: "Diana",
  nota: 8.2
}, {
  nome: "Eduardo",
  nota: 4.3
}];

// Função para filtrar alunos com nota maior ou igual a 6
function filtrarAprovados(alunos) {
  return alunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
}

// Testando a função
var aprovados = filtrarAprovados(alunos);
console.log(aprovados);