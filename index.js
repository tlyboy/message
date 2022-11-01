import chalk from 'chalk'

export default {
  info(message) {
    console.log(`${chalk.black.bgBlue(' INFO ')} ${message}`)
  },
  success(message) {
    console.log(`${chalk.black.bgGreen(' DONE ')} ${message}`)
  },
  error(message) {
    console.log(`${chalk.black.bgRed(' ERROR ')} ${message}`)
  },
  warning(message) {
    console.log(`${chalk.black.bgYellow(' WARN ')} ${message}`)
  },
}
