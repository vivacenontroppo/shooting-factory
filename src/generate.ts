import { getData } from "./module";

export class Generate {
  public textArea: any;
  public generateButton: any;
  public similarWordButton: any;
  public usedToDescribe: any;
  public input: any;
  public resultWord: any;
  public listElement: any;
  public clearButton: any;

  constructor() {
    this.textArea = document.getElementById("placeholder");
    this.generateButton = document.getElementById("rhyme");
    this.similarWordButton = document.getElementById("similar");
    this.usedToDescribe = document.getElementById("describe");
    this.input = document.getElementById("input");
    this.listElement = document.getElementsByTagName("li");
    this.clearButton = document.getElementById("clear");
  }

  public getRhymeWord = (myWord?: string, position?: number, property?) => {
    const url = `https://api.datamuse.com/words?rel_rhy=${myWord}`;

    if (position !== undefined) {
      return getData(url).then(result => {
        this.resultWord = result[position][property];

        return this.resultWord;
      });
    } else {
      return getData(url).then(result => {
        this.resultWord = result;

        return this.resultWord;
      });
    }
  };

  public getSimilarWord = (myWord?: string, position?: number, property?) => {
    const url = `https://api.datamuse.com/words?ml=${myWord}`;

    if (position !== undefined) {
      return getData(url).then(result => {
        this.resultWord = result[position][property];

        return this.resultWord;
      });
    } else {
      return getData(url).then(result => {
        this.resultWord = result;

        return this.resultWord;
      });
    }
  };

  public getUsedToDescribeWord = (
    myWord?: string,
    position?: number,
    property?
  ) => {
    const url = `https://api.datamuse.com/words?rel_jjb=${myWord}`;

    if (position !== undefined) {
      return getData(url).then(result => {
        this.resultWord = result[position][property];

        return this.resultWord;
      });
    } else {
      return getData(url).then(result => {
        this.resultWord = result;

        return this.resultWord;
      });
    }
  };
}
