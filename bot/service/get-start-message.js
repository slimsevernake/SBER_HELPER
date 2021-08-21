const getStartMessage = (chat) => {
    const { first_name, last_name } = chat
    let userName = ''
    if (first_name) {
        userName = first_name
    }
    if (last_name) {
        userName += ' ' + last_name
    }
    if (!userName) {
        userName = 'Юный Падаван'
    }
    return `Добро пожаловать, ${userName}! Я всегда готов помочь тебе -)`
}

module.exports = getStartMessage