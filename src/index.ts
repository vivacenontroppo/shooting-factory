import { Strzal } from './shoot.js'

const dawaj = new Strzal()

const nasa: any = (word: string, value?: string) => dawaj.init(word).then(to => value ? to[`${value}`] : to);

const tekst: string = nasa('please')

const textArea: HTMLElement | null = document.getElementById('placeholder');
const generateButton: HTMLElement | null = document.getElementById('request');

const findWords = () => {
  generateButton === null ? console.log('error') : generateButton.addEventListener('click', () => 
  textArea === null ? console.log('error') : textArea.setAttribute('value', tekst))
}

findWords()