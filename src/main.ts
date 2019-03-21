import { Generate } from './generate';

const generator = new Generate();

const clear = (): void => {
  const listLength = generator.listElement ? generator.listElement.length : 0;
  for (let i = 0; i < listLength; i++) {
    generator.resultsList.removeChild(generator.resultsList.firstElementChild);
  }
};

const init = (): void => {
  generator.rhymeButton.addEventListener('click', () => {
    clear();
    const word = generator.input.value;
    generator.getRhymeWord(word).then(value => {
      for (let i = 0; i < 10; i++) {
        const node = document.createElement('LI');
        const textnode = document.createTextNode(
          `${i + 1}: ${word} rhymes to ${value[i].word}`
        );
        node.appendChild(textnode);
        document.getElementById('placeholder').appendChild(node);
      }
    });
  });

  generator.similarWordButton.addEventListener('click', () => {
    clear();
    const word = generator.input.value;
    generator.getSimilarWord(word).then(value => {
      for (let i = 0; i < 10; i++) {
        const node = document.createElement('LI');
        const textnode = document.createTextNode(
          `${i + 1}: ${word} is similar to ${value[i].word}`
        );
        node.appendChild(textnode);
        document.getElementById('placeholder').appendChild(node);
      }
    });
  });

  generator.usedToDescribe.addEventListener('click', () => {
    clear();
    const word = generator.input.value;
    generator.getDescribeWord(word).then(value => {
      for (let i = 0; i < 10; i++) {
        const node = document.createElement('LI');
        const textnode = document.createTextNode(
          `${i + 1}: ${word} can be described with ${value[i].word}`
        );
        node.appendChild(textnode);
        document.getElementById('placeholder').appendChild(node);
      }
    });
  });
};

init();
