const { getMenuButton, getFaqButton, getFavoritsButton, getWhatBotCanDoButton } = require('../button')

const getButtonForClickMenu = (text) => {
    console.log(text)
    switch (text) {
        case 'Меню':
            return getMenuButton()
        case 'Избранное':
            return getFavoritsButton()
        case 'Что умеет бот':
            return getWhatBotCanDoButton()
        case 'FAQ':
            return getFaqButton()
        default:
            console.log('error')
    }
}

module.exports = getButtonForClickMenu