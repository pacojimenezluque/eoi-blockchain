const fs = require('fs')

class DatabaseService {
    DB_FILE_PATH = __dirname + '/../.db.json'

    constructor() {}

    // Crea el archivo de la BD
    init() {
        return fs.writeFileSync(this.DB_FILE_PATH, '{}')  // JSON
    }

    // Mira si la BD existe
    exists() {
        return fs.existsSync(this.DB_FILE_PATH)
    }

    // TODO storeOne(key, instance)
    // Dado una clave ("cards") y un objeto, guarda el objeto en la lista
    // ("cards")
    storeOne(key, instance) {
        const dbData = JSON.parse(fs.readFileSync(this.DB_FILE_PATH))
        let newData = { ...dbData}

        if (!(key in newData)) {
            newData[key] = [instance]
        } else {
            newData[key].push(instance)
        }

        fs.writeFileSync(this.DB_FILE_PATH, JSON.stringify(newData))

        return newData
    }

    // Guarda los datos en la clave key
    store(key, data) {
        const dbData = JSON.parse(fs.readFileSync(this.DB_FILE_PATH))
        let newData = { ...dbData}
        newData[key] = data

        fs.writeFileSync(this.DB_FILE_PATH, JSON.stringify(newData))

        return newData
    }

    // Toma los datos basado en esta clave
    get(key) {
        const dbData = JSON.parse(fs.readFileSync(this.DB_FILE_PATH))
        return dbData[key]
    }

    // TODO Eliminar un objeto??? removeOne('cards')
    removeOne(key, instanceId) {
        // TODO
    }
}

module.exports = {
    DatabaseService
}