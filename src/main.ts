import { Generate } from "./generate";

const generator = new Generate();

var clear = () => {
  const listLength = generator.listElement.length;
  for (let i = 0; i < listLength; i++) {
    generator.textArea.removeChild(generator.textArea.firstElementChild);
  }
};

const init = () => {
  generator.generateButton.addEventListener("click", () => {
    clear();
    const word = generator.input.value;
    for (let i = 0; i < 10; i++) {
      generator.getRhymeWord(word).then(value => {
        const node = document.createElement("LI");
        const textnode = document.createTextNode(
          `${i}: ${word} rhymes to ${JSON.stringify(value[i]["word"])}`
        );
        node.appendChild(textnode);
        document.getElementById("placeholder").appendChild(node);
      });
    }
  });

  generator.similarWordButton.addEventListener("click", () => {
    clear();
    const word = generator.input.value;
    generator.getSimilarWord(word, 0, "word").then(value => {
      let wynik = JSON.stringify(value);

      return (generator.textArea.innerText = `${word} is similar to ${wynik}`);
    });
  });

  generator.usedToDescribe.addEventListener("click", () => {
    clear();
    const word = generator.input.value;
    generator.getUsedToDescribeWord(word, 0, "word").then(value => {
      let wynik = JSON.stringify(value);

      return (generator.textArea.innerText = `${word} can descibe ${wynik}`);
    });
  });
};

init();
