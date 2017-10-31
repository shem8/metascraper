'use strict'

const snapshot = require('snap-shot')
const {promisify} = require('util')
const {resolve} = require('path')

const fs = require('fs')

const getMetaData = require('../../..')
const readFile = promisify(fs.readFile)

const url = 'http://www.inc.com/jeremy-quittner/2016-30-under-30-neurensic.html'

it('inc', async () => {
  const html = await readFile(resolve(__dirname, 'input.html'))
  const metadata = await getMetaData({html, url})
  snapshot(metadata)
})