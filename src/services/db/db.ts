import * as path from 'path'
import NeDb from 'nedb'

const dbName = 'Plugin.request-navigator'
const dbPath = path.join(window.app.getPath('userData'), `insomnia.${dbName}.db`)
export const database = new NeDb({
  filename: dbPath,
  autoload: true,
  corruptAlertThreshold: 0.9,
  inMemoryOnly: false
})
