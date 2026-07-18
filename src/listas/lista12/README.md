# Lista 12 — Desafio: Classes + Arrow Functions

Tema: **misturar POO com arrow functions**.

> "Crie uma classe `Loja` que tenha um array de `Produtos`. Use uma Arrow Function dentro de um método da classe para filtrar os produtos em promoção."

A solução usa `this.produtos.filter((p) => p.emPromocao)` — a arrow herda o `this` da classe.
