'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var readUploadedFileAsText = exports.readUploadedFileAsText = function readUploadedFileAsText(inputFile) {
  if (typeof document !== 'undefined') {
    var temporaryFileReader = new FileReader();

    return new Promise(function (resolve, reject) {
      temporaryFileReader.onerror = function () {
        temporaryFileReader.abort();

        reject(new DOMException('Problem parsing input file.'));
      };

      temporaryFileReader.onload = function () {
        resolve(temporaryFileReader.result);
      };
      temporaryFileReader.readAsText(inputFile);
    });
  }
};

//# sourceMappingURL=io.js.map