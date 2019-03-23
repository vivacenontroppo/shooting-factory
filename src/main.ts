window.onload = (): void => {
  const webhostImage = document.querySelector('[alt="www.000webhost.com"]').parentNode.parentNode;
  webhostImage.parentNode.removeChild(webhostImage);
};

import { Generator } from './generate';

const generator = new Generator();

const init = (): void => {
  generator.rhymeButton.addEventListener('click', () => {
    if (generator.input.value) {
      generator.clear();
      const word = generator.input.value;
      generator.getRhymeWord(word).then(value => {
        if (value.length > 0) {
          for (let i = 0; i < 15; i++) {
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
        if (value.length > 0) {
          for (let i = 0; i < 15; i++) {
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

  generator.usedToDescribeButton.addEventListener('click', () => {
    if (generator.input.value) {
      generator.clear();
      const word = generator.input.value;
      generator.getDescribeWord(word).then(value => {
        if (value.length > 0) {
          for (let i = 0; i < 15; i++) {
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
