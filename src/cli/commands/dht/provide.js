'use strict'

module.exports = {
  command: 'provide <key>',

  describe: 'Announce to the network that you are providing given values.',

  builder: {
    recursive: {
      alias: 'r',
      recursive: 'Recursively provide entire graph.',
      default: false,
      type: 'boolean'
    }
  },

  async handler ({ ipfs, key, recursive }) {
    const opts = {
      recursive
    }

    await ipfs.api.dht.provide(key, opts)
  }
}
