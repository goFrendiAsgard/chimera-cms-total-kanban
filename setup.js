const path = require('path')
const fse = require('fs-extra')
const {install, uninstall} = require('../../plugin.js')

if (require.main === module) {
  const action = process.argv.length > 2 ? process.argv[2] : 'install'
  const pluginName = path.basename(__dirname)
  if (action === 'install') {
    install(pluginName, (error, result) => {
      // copy markdown library
      fse.copy('../markdown', '../../public/total-kanban/markdown')
    })
  } else {
    uninstall(pluginName)
  }
}