import { getData } from './request';

export interface IResWords {
  word: string;
}
export class Generator {
  public rhymeButton: HTMLButtonElement;
  public similarWordButton: HTMLButtonElement;
  public usedToDescribeButton: HTMLButtonElement;
  public input: HTMLInputElement;
  public footer: HTMLElement;
  private resultsList: HTMLUListElement;
  private listElement: HTMLCollectionOf<HTMLLIElement>;

  constructor() {
    this.rhymeButton = document.getElementById('rhyme') as HTMLButtonElement;
    this.similarWordButton = document.getElementById('similar') as HTMLButtonElement;
    this.usedToDescribeButton = document.getElementById('describe') as HTMLButtonElement;
    this.input = document.getElementById('input') as HTMLInputElement;
    this.listElement = document.getElementsByTagName('li') as HTMLCollectionOf<HTMLLIElement>; 
    this.resultsList = document.getElementById('list') as HTMLUListElement;
    this.footer = document.getElementById('copyright') as HTMLElement;
  }

  public getRhymeWord = (theWord: string): Promise<IResWords[]> => {
    const url = `https://api.datamuse.com/words?rel_rhy=${theWord}`;

    return getData(url);
  };

  public getSimilarWord = (theWord: string): Promise<IResWords[]> => {
    const url = `https://api.datamuse.com/words?ml=${theWord}`;

    return getData(url);
  };

  public getDescribeWord = (theWord: string): Promise<IResWords[]> => {
    const url = `https://api.datamuse.com/words?rel_jjb=${theWord}`;

    return getData(url);
  };

  public clear = (): void => {
    const listLength = this.listElement ? this.listElement.length : 0;
    for (let i = 0; i < listLength; i++) {
      this.resultsList.removeChild(this.resultsList.firstElementChild);
    }
  };

  public insertText = (text: string): void => {
    const liElement = document.createElement('LI');
    const textnode = document.createTextNode(text);
    liElement.appendChild(textnode);
    this.resultsList.appendChild(liElement)
  }

}
