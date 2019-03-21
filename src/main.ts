import { Generate } from './generate';

const generator = new Generate();

const init = (): void => {
  generator.rhymeButton.addEventListener('click', () => {
    if (generator.input.value) {
      generator.clear();
      const word = generator.input.value;
      generator.getRhymeWord(word).then(value => {
        for (let i = 0; i < 10; i++) {
          const node = document.createElement('LI');
          const textnode = document.createTextNode(
            `${i + 1}: ${word} rhymes to ${value[i].word}`
          );
          node.appendChild(textnode);
          generator.resultsList.appendChild(node);
        }
      });
    }
  });

  generator.similarWordButton.addEventListener('click', () => {
    if (generator.input.value) {
      generator.clear();
      const word = generator.input.value;
      generator.getSimilarWord(word).then(value => {
        for (let i = 0; i < 10; i++) {
          const node = document.createElement('LI');
          const textnode = document.createTextNode(
            `${i + 1}: ${word} is similar to ${value[i].word}`
          );
          node.appendChild(textnode);
          generator.resultsList.appendChild(node);
        }
      });
    }
  });

  generator.usedToDescribe.addEventListener('click', () => {
    if (generator.input.value) {
      generator.clear();
      const word = generator.input.value;
      generator.getDescribeWord(word).then(value => {
        for (let i = 0; i < 10; i++) {
          const node = document.createElement('LI');
          const textnode = document.createTextNode(
            `${i + 1}: ${word} can be described with ${value[i].word}`
          );
          node.appendChild(textnode);
          generator.resultsList.appendChild(node);
        }
      });
    }
  });
};

init();
