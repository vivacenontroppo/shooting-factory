"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class Strzal {
    constructor() {
        this.init = (word) => __awaiter(this, void 0, void 0, function* () {
            let path = `https://api.datamuse.com/words?rel_rhy=${word}`;
            const options = {
                method: 'GET',
                uri: path,
                json: true
            };
            const response = yield Strzal.rp(options);
            return response;
        });
    }
}
Strzal.rp = require('request-promise');
//# sourceMappingURL=shoot.js.map