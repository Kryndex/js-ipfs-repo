/* eslint-env mocha */
'use strict'

const expect = require('chai').expect
const mh = require('multihashes')
const CID = require('cids')

module.exports = (repo) => {
  describe('interop', () => {
    it('reads welcome-to-ipfs', (done) => {
      const welcomeHash = mh.fromHexString(
        '1220120f6af601d46e10b2d2e11ed71c55d25f3042c22501e41d1246e7a1e9d3d8ec'
      )

      repo.blockstore.get(new CID(welcomeHash), (err, val) => {
        expect(err).to.not.exist
        expect(
          val.data.toString()
        ).to.match(
            /Hello and Welcome to IPFS/
        )
        done()
      })
    })
  })
}
