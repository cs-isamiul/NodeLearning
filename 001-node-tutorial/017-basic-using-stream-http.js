var http = require('http')
var fs = require('fs')

http
  .createServer(function (req, res) {
    // const text = fs.readFileSync('./content/big.txt', 'utf8')
    // res.end(text)
    const fileStream = fs.createReadStream('./content/big.txt', 'utf8')
    fileStream.on('open', () => {
      fileStream.pipe(res)
    })
    fileStream.on('error', (err) => {
      res.end(err)
    })
  })
  .listen(5000)


  /**
   * The commented section would send the entire file at once to the user. This would result in a big file being sent.
   * The new way using streams and .pipe means that the file (which is segmented by default into 64kb segments) is sent one at a time.
   */