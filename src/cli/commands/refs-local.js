'use strict'

module.exports = {
  command: 'refs-local',

  describe: 'List all local references.',

  handler ({ ipfs, print }) {
    return new Promise((resolve, reject) => {
      const stream = ipfs.api.refs.localReadableStream()

      stream.on('error', reject)
      stream.on('end', resolve)

      stream.on('data', (ref) => {
        if (ref.err) {
          print(ref.err, true, true)
        } else {
          print(ref.ref)
        }
      })
    })
  }
}
