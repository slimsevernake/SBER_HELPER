const { Markup } = require('telegraf')

function getMenuButton() {
    return Markup.inlineKeyboard([
        [
            Markup.button.callback('Подготовка к выходу', 'Preparing to leave')
        ],
        [
            Markup.button.callback('Схемы проезда', 'Схемы проезда')
        ],
        [
            Markup.button.callback('Оформление документов', 'Оформление документов')
        ],
        [
            Markup.button.callback('Оформление пропуска', 'Оформление пропуска')
        ],
        [
            Markup.button.callback('Получение техники', 'Получение техники')
        ],
        [
            Markup.button.callback('Настройка техники', 'Настройка техники')
        ],
        [
            Markup.button.callback('Чек-лист после оформления', 'Чек-лист после оформления')
        ],
        [
            Markup.button.callback('Установка софта', 'Установка софта')
        ],
        [
            Markup.button.callback('Наши чаты', 'Наши чаты')
        ]        
    ])
}

module.exports = getMenuButton
