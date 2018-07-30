#!/usr/bin/env node
const buildTask = require('./build-task')

/* eslint-enable no-console */
;(async function () {
  await buildTask({production: true})
  await buildTask({standalone: true})
  await buildTask({esnext: true})
}())
