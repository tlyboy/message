import chalk from 'chalk'

export default {
  info(content, title = 'Info', color = chalk.black.bgBlue) {
    console.log(`${color(` ${title} `)}${!content ? '' : ` ${content}`}`)
  },
  success(content, title = 'Success', color = chalk.black.bgGreen) {
    this.info(content, title, color)
  },
  error(content, title = 'Error', color = chalk.black.bgRed) {
    this.info(content, title, color)
  },
  warning(content, title = 'Warning', color = chalk.black.bgYellow) {
    this.info(content, title, color)
  }
}
