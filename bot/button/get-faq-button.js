const { Markup } = require('telegraf')

const getFaqButton = () => {
    return Markup.inlineKeyboard([
        [
            Markup.button.callback('Общее', 'Общее')
        ],
        [
            Markup.button.callback('Схемы проезда', 'Схемы проезда')
        ],
        [
            Markup.button.callback('Учётная запись', 'Учётная запись')
        ],
        [
            Markup.button.callback('Коронавирус', 'Коронавирус')
        ],
        [
            Markup.button.callback('Рабочий процесс', 'Рабочий процесс')
        ],
        [
            Markup.button.callback('Связаться с бадди', 'Связаться с бадди')
        ],
        [
            Markup.button.callback('Связаться с техподдержкой', 'Связаться с техподдержкой')
        ]
    ])
}

module.exports = getFaqButton
