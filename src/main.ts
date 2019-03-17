import { Generate } from './generate'

const generator = new Generate()

const init = () => {

  generator.generateButton.addEventListener('click', () => {
    const word = generator.input.value

    generator.getRhymeWord(word, 0, 'word').then(value => {
      debugger
      let wynik = JSON.stringify(value)
      return generator.textArea.innerText = `${word} rhymes to ${wynik}`})
  })

}

init()