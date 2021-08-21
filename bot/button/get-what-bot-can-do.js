const { Markup } = require('telegraf')

const getWhatBotCanDoButton = () => {
    return Markup.inlineKeyboard([
        [
            Markup.button.callback('Словарь аббревиатур', 'Словарь аббревиатур')
        ],
        [
            Markup.button.callback('СДобавление в избранное', 'Добавление в избранное')
        ],
        [
            Markup.button.callback('ОНапоминания', 'Напоминания')
        ],
        [
            Markup.button.callback('Поиск по ключевым словам', 'Поиск по ключевым словам')
        ]
    ])
}

module.exports = getWhatBotCanDoButton
