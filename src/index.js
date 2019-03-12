import { Strzal } from './shoot.js';
const dawaj = new Strzal();
const nasa = (word, value) => dawaj.init(word).then(to => value ? to[`${value}`] : to);
const tekst = nasa('please');
const textArea = document.getElementById('placeholder');
const generateButton = document.getElementById('request');
const findWords = () => {
    generateButton === null ? console.log('error') : generateButton.addEventListener('click', () => textArea === null ? console.log('error') : textArea.setAttribute('value', tekst));
};
findWords();
//# sourceMappingURL=index.js.map