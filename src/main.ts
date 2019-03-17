import { Generate } from './generate'

const generator = new Generate()

const strzelaj = (word, position, property?) => generator.getRhymeWord(word, position, property)

strzelaj('please', 2, 'score').then(value => console.log(value))

const strzelajGuzik = () => {

  generator.generateButton.addEventListener('click', () => {
    const word = generator.input.value

    strzelaj(word, 0, 'word').then(value => {
      let wynik = JSON.stringify(value)
      return generator.textArea.innerText = wynik})
  })

}

strzelajGuzik()