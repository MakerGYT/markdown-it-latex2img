# Markdown-it-latex2img
LaTex plugin for [markdown-it](https://github.com/markdown-it/markdown-it) markdown parser,rendered with `<img>`

[![Build Status](https://travis-ci.com/MakerGYT/markdown-it-latex2img.svg?branch=master)](https://travis-ci.com/MakerGYT/markdown-it-latex2img)
[![NPM version](https://img.shields.io/npm/v/markdown-it-latex2img.svg?style=flat)](https://npmjs.com/package/markdown-it-latex2img)
## Background
### Related
- markdown-it-math
It was originally designed to render MathML.
- markdown-it-mathjax
Just to bypass LaTeX math for mathjax processing, need to import [mathjax](https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js)
- markdown-it-katex
Need to include the [KaTeX stylesheet](https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css)

## Feature
- Convert Latex syntax to image tags
- Support inline and block formulas
- Rendering results support multi-end use, such as WeChat Mini Program

## Install
```bash
npm install markdown-it-latex2img --save
```
## Use
```js
const md = require('markdown-it')()
            .use(require('markdown-it-latex2img'));

md.render(/*...*/) // See examples above
```
## Sample
[Demo](https://makergyt.github.io/markdown-it-latex2img/)

Screenshot:
![]()

## Dependencies

## License
[MIT](https://github.com/MakerGYT/markdown-it-latex2img/blob/master/LICENSE) © MakerGYT

## Reference
[MathJax basic tutorial and quick reference](https://math.meta.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference)