"use strict";

export class Strzal {

  private static rp = require('request-promise');

  public init = async (word) => {

    let path: string = `https://api.datamuse.com/words?rel_rhy=${word}`
    const options = {
      method: 'GET',
      uri: path,
      json: true
    };
    
    const response = await Strzal.rp(options)
       
    return response
    }
}
