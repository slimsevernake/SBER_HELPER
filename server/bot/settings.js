const { Telegraf, Markup } = require('telegraf')
const getMainMenu = require('./keyboard')
const getMenuBotton = require('./button/menu-button')
const { preparingLeave } = require('./action/menu-botton-action')

const sber_bot = new Telegraf(process.env.BOT_API)

sber_bot.start(ctx => {
    ctx.deleteMessage
    ctx.reply('Welcome, bro', getMainMenu())
})

sber_bot.hears('Меню',  ctx => {
    ctx.deleteMessage
    ctx.reply('Меню', getMenuBotton())
} )

sber_bot.action(['Preparing to leave'], ctx => {
  switch (ctx.callbackQuery.data) {
    case 'Preparing to leave':
      preparingLeave(ctx)
      return
    default:
      ctx.reply('Я не понимаю пока тебя')
  }
})

module.exports = sber_bot