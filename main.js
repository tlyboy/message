import chalk from 'chalk'

let message = {
  info: {
    title: 'INFO',
    color: chalk.black.bgBlue
  },
  success: {
    title: 'SUCCESS',
    color: chalk.black.bgGreen
  },
  error: {
    title: 'ERROR',
    color: chalk.black.bgRed
  },
  warning: {
    title: 'WARN',
    color: chalk.black.bgYellow
  }
}

export default {
  config(params = message) {},
  info(content, title = message.info.title, color = message.info.color) {
    console.log(`${color(` ${title} `)}${!content ? '' : ` ${content}`}`)
  },
  success(content, title = message.success.title, color = message.success.color) {
    this.info(content, title, color)
  },
  error(content, title = message.error.title, color = message.error.color) {
    this.info(content, title, color)
  },
  warning(content, title = message.warning.title, color = message.warning.color) {
    this.info(content, title, color)
  }
}
