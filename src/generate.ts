import { getData } from './module';

export class Generate {

  public textArea: any;
  public generateButton: HTMLElement;
  public input: any;
  public rhymed: any;

  constructor(){
    this.textArea = document.getElementById('placeholder');
    this.generateButton = document.getElementById('request');
    this.input = document.getElementById('input');
  }

  public getRhymeWord = (myWord?: string) => {
    let wynik
    const url = `https://api.datamuse.com/words?rel_rhy=${myWord}`
    
    getData(url).then(result => wynik = result)

    return wynik
  }
}
