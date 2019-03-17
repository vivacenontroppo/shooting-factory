import { getData } from './module';

export class Generate {

  public textArea: any;
  public generateButton: HTMLElement;
  public input: any;
  public rhymed: any;

  constructor() {
    this.textArea = document.getElementById('placeholder');
    this.generateButton = document.getElementById('request');
    this.input = document.getElementById('input');
  }

  public getRhymeWord = (myWord?: string, position?: number, property?) => {
    const url = `https://api.datamuse.com/words?rel_rhy=${myWord}`

    if (position === undefined) {
      return getData(url).then(result => {
        this.rhymed = result;

        return this.rhymed
      })
    } else {
      return getData(url).then(result => {
        this.rhymed = result[position][property];

        return this.rhymed
      })
    }
  }
}