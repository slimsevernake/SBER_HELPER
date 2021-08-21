const { Markup } = require('telegraf')

function getMainMenu() {
    return Markup.keyboard([
        ['Меню', 'Избранное'],
        ['Что умеет бот', 'FAQ']
    ]).resize()
};

module.exports = getMainMenu
