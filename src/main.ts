import { Generator } from './generate';

const generator = new Generator();

const init = (): void => {
  generator.rhymeButton.addEventListener('click', () => {
    if (generator.input.value) {
      generator.clear();
      const word = generator.input.value;
      generator.getRhymeWord(word).then(value => {
        if (value > JSON) {
          for (let i = 0; i < 10; i++) {
              generator.insertText(`${i + 1}: ${word} rhymes to ${value[i].word}`);
          }
        } else {
          generator.insertText('No match for that word!');
        }
      });
    } else {
      generator.clear();
      generator.insertText(`Type something first`);
    }
  });

  generator.similarWordButton.addEventListener('click', () => {
    if (generator.input.value) {
      generator.clear();
      const word = generator.input.value;
      generator.getSimilarWord(word).then(value => {
        if (value > JSON) {
          for (let i = 0; i < 10; i++) {
              generator.insertText(`${i + 1}: ${word} is similar to ${value[i].word}`);
          }
        } else {
          generator.insertText(`No match for that word!`);
        }
      });
    } else {
      generator.clear();
      generator.insertText(`Type something first`);
    }
  });

  generator.usedToDescribe.addEventListener('click', () => {
    if (generator.input.value) {
      generator.clear();
      const word = generator.input.value;
      generator.getDescribeWord(word).then(value => {
        if (value > JSON) {
          for (let i = 0; i < 10; i++) {
              generator.insertText(`${i + 1}: ${word} can be described with ${value[i].word}`);
          }
        } else {
          generator.insertText(`No match for that word!`);
        }
      });
    } else {
      generator.clear();
      generator.insertText(`Type something first`);
    }
  });
};

init();
