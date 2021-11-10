const fs = require('fs')

class DatabaseService {
    DB_FILE_PATH = __dirname + '../.db'

    constructor() {}

    // Crea el archivo de la BD
    init() {
        return fs.writeFileSync(this.DB_FILE_PATH, '{}')  // JSON
    }

    // Mira si la BD existe
    exists() {
        return fs.existsSync(this.DB_FILE_PATH)
    }

    // Guarda los datos en la clave key
    store(key, data) {}

    // Toma los datos basado en esta clave
    get(key) {}
}

module.exports = {
    DatabaseService
}


module.exports = {
    DatabaseService
}