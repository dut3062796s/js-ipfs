'use strict'

module.exports = {
  command: 'findpeer <peerID>',

  describe: 'Find the multiaddresses associated with a Peer ID.',

  builder: {},

  async handler ({ ipfs, print, peerID }) {
    const peers = await ipfs.api.dht.findPeer(peerID)
    const addresses = peers.multiaddrs.toArray().map((ma) => ma.toString())
    addresses.forEach((addr) => print(addr))
  }
}
