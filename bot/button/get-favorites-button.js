const { Markup } = require('telegraf')

const getFavoritsButton = () => {
    return Markup.inlineKeyboard([
        [
            Markup.button.callback('В стадии разработки', 'В стадии разработки')
        ],
    ])
}

module.exports = getFavoritsButton
