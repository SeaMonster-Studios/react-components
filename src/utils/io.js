export const readUploadedFileAsText = (inputFile) => {
  if (typeof document !== "undefined") {
    const temporaryFileReader = new FileReader()

    return new Promise((resolve, reject) => {
      temporaryFileReader.onerror = () => {
        temporaryFileReader.abort()

        reject(new DOMException("Problem parsing input file."))
      }

      temporaryFileReader.onload = () => {
        resolve(temporaryFileReader.result)
      }
      temporaryFileReader.readAsText(inputFile)
    })
  }
}
