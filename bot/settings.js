const { Telegraf, Markup } = require('telegraf')
const { getMainMenu } = require('./keyboard')
const { preparingLeave } = require('./action/menu-botton-action')
const { getStartMessage, getButtonForClickMenu } = require('./service')
const sber_bot = new Telegraf(process.env.BOT_API)

sber_bot.start(ctx => {
    ctx.reply(getStartMessage(ctx.message.chat), getMainMenu())
})

sber_bot.hears(['Меню', 'Избранное', 'Что умеет бот', 'FAQ'], ctx => {
    const { message: { text } } = ctx
    ctx.reply(`Вы зашли в ${text}`, getButtonForClickMenu(text))
})

sber_bot.action('text', ctx => {
    switch (ctx.callbackQuery.data) {
        case 'Preparing to leave':
            preparingLeave(ctx)
            return
        default:
            ctx.reply('Я не понимаю пока тебя')
    }
})

module.exports = sber_bot