# El Guardatextos-Revista-Web 

# React + TypeScript + Vite

Proyecto para la revista/web de literatura mexicana El Guardatextos.

El proyecto tiene un enfoque de tipo blog, donde tendrá distintas entradas/publicaciones con un estilo minimalista.
Así mismo en ellos se podrá comentar y tendrá etiquetas personalizadas por el administrador. Se usará una base de datos 
de Firebase.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
