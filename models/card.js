const { v4: uuidv4 } = require('uuid')

const { DatabaseService } = require('../services/database')
const { AvatarService } = require('../services/avatar')

class CardRepository {
    constructor() {}

    getCards() {
        const database = new DatabaseService()
        return database.get('cards')
    }
}


class Card {
    constructor(cardName, description, price) {
        this.id = uuidv4()
        this.name = cardName
        this.description = description
        this.price = price
        this.avatar = new AvatarService().getAvatarFromName(this.id)
    }
}


module.exports = {
    Card, CardRepository
}