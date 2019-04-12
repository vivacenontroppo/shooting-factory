"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request_1 = require("./request");
var Generator = /** @class */ (function () {
    function Generator() {
        var _this = this;
        this.getRhymeWord = function (theWord) {
            var url = "https://api.datamuse.com/words?rel_rhy=" + theWord;
            return request_1.getData(url);
        };
        this.getSimilarWord = function (theWord) {
            var url = "https://api.datamuse.com/words?ml=" + theWord;
            return request_1.getData(url);
        };
        this.getDescribeWord = function (theWord) {
            var url = "https://api.datamuse.com/words?rel_jjb=" + theWord;
            return request_1.getData(url);
        };
        this.clear = function () {
            var listLength = _this.listElement ? _this.listElement.length : 0;
            for (var i = 0; i < listLength; i++) {
                _this.resultsList.removeChild(_this.resultsList.firstElementChild);
            }
        };
        this.insertText = function (text) {
            var liElement = document.createElement('LI');
            var textnode = document.createTextNode(text);
            liElement.appendChild(textnode);
            _this.resultsList.appendChild(liElement);
        };
        this.rhymeButton = document.getElementById('rhyme');
        this.similarWordButton = document.getElementById('similar');
        this.usedToDescribeButton = document.getElementById('describe');
        this.input = document.getElementById('input');
        this.listElement = document.getElementsByTagName('li');
        this.resultsList = document.getElementById('list');
        this.footer = document.getElementById('copyright');
    }
    return Generator;
}());
exports.Generator = Generator;
