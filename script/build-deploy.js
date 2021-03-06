#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const buildTask = require('./build-task')

/* eslint-disable no-console */
function uploadToCDN(stats) {
  const cdnUploader = require('./cdn-uploader'),
    output = stats.compilation.compiler.options.output,
    file = path.resolve(output.path, output.filename)

  console.log('uploading file: %s', file)

  return cdnUploader.upload(file).then((res) => {
    console.log('file uploaded, CDN URL: %s', res[file])
    let readmeFile = path.resolve(__dirname, '..', 'README.md')
    let content = fs.readFileSync(readmeFile, 'utf-8')
    content = content.replace(/script src="(https:\/\/.*)"/igm, `script src="${res[file]}"`)
    fs.writeFileSync(readmeFile, content)
  })
}
/* eslint-enable no-console */

(async function () {
    //   await buildTask({standalone: true})
  await buildTask({esnext: true})
  const stats = await buildTask({production: true})
  await uploadToCDN(stats)
}())
