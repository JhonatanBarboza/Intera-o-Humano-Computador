# Fotos dos animais

Cada animal tem uma pasta com o mesmo `id` usado em `src/data/animais.js`.
Coloque exatamente 3 fotos por pasta, nomeadas assim:

```
public/animais/thor/foto1.jpg
public/animais/thor/foto2.jpg
public/animais/thor/foto3.jpg
```

Repita para cada animal: `thor`, `luna`, `bento`, `mia`, `toby`, `nina`, `mel`.

- Formato: `.jpg` (o caminho gerado por `getAnimalFotos()` em `src/data/index.js`
  assume essa extensão — se preferir `.png`/`.webp`, ajuste a função lá).
- Enquanto uma foto não existir, o navegador mostra ícone de imagem quebrada
  nesse slot — isso será tratado com um fallback visual (emoji do animal)
  quando as telas que exibem fotos forem construídas.
