'use strict'

module.exports = {
  command: 'query <peerID>',

  describe: 'Find the closest Peer IDs to a given Peer ID by querying the DHT.',

  async handler ({ ipfs, print, peerID }) {
    const result = await ipfs.api.dht.query(peerID)

    result.forEach((peerID) => {
      print(peerID.id.toB58String())
    })
  }
}
