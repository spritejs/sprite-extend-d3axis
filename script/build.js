#!/usr/bin/env node
const buildTask = require('./build-task')

/* eslint-enable no-console */
;(async function () {
  await buildTask({esnext: true})
  await buildTask({production: true})
  await buildTask({standalone: true})
}())
