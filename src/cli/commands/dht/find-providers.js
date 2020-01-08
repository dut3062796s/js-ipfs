'use strict'

module.exports = {
  command: 'findprovs <key>',

  describe: 'Find peers that can provide a specific value, given a key.',

  builder: {
    'num-providers': {
      alias: 'n',
      describe: 'The number of providers to find. Default: 20.',
      default: 20,
      type: 'number'
    }
  },

  async handler ({ ipfs, key, print, numProviders }) {
    const provs = await ipfs.api.dht.findProvs(key, {
      maxNumProviders: numProviders
    })

    provs.forEach((element) => {
      print(element.id.toB58String())
    })
  }
}
