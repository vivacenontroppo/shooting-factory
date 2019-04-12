"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
window.onload = function () {
    var webhostImage = document.querySelector('[alt="www.000webhost.com"]').parentNode.parentNode;
    webhostImage.parentNode.removeChild(webhostImage);
};
var generate_1 = require("./generate");
var generator = new generate_1.Generator();
var init = function () {
    generator.rhymeButton.addEventListener('click', function () {
        if (generator.input.value) {
            generator.clear();
            var word_1 = generator.input.value;
            generator.getRhymeWord(word_1).then(function (value) {
                if (value.length > 0) {
                    for (var i = 0; i < 15; i++) {
                        generator.insertText(i + 1 + ": " + word_1 + " rhymes to " + value[i].word);
                    }
                }
                else {
                    generator.insertText('No match for that word!');
                }
            });
        }
        else {
            generator.clear();
            generator.insertText("Type something first");
        }
    });
    generator.similarWordButton.addEventListener('click', function () {
        if (generator.input.value) {
            generator.clear();
            var word_2 = generator.input.value;
            generator.getSimilarWord(word_2).then(function (value) {
                if (value.length > 0) {
                    for (var i = 0; i < 15; i++) {
                        generator.insertText(i + 1 + ": " + word_2 + " is similar to " + value[i].word);
                    }
                }
                else {
                    generator.insertText("No match for that word!");
                }
            });
        }
        else {
            generator.clear();
            generator.insertText("Type something first");
        }
    });
    generator.usedToDescribeButton.addEventListener('click', function () {
        if (generator.input.value) {
            generator.clear();
            var word_3 = generator.input.value;
            generator.getDescribeWord(word_3).then(function (value) {
                if (value.length > 0) {
                    for (var i = 0; i < 15; i++) {
                        generator.insertText(i + 1 + ": " + word_3 + " can be described with " + value[i].word);
                    }
                }
                else {
                    generator.insertText("No match for that word!");
                }
            });
        }
        else {
            generator.clear();
            generator.insertText("Type something first");
        }
    });
};
init();
