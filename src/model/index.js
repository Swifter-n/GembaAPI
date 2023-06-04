const db = require('../config/database')
 db.user = require('./user.model')(db.sequelize, db.Sequelize)
 db.location = require('./location.model')(db.sequelize, db.Sequelize)
 db.area1 = require('./area1.model')(db.sequelize, db.Sequelize)
 db.area2 = require('./area2.model')(db.sequelize, db.Sequelize)
 db.roles = require('./roles.model')(db.sequelize, db.Sequelize)
 db.plant = require('./plants.model')(db.sequelize, db.Sequelize)
 db.checkInandOut = require('./checkinandout.model')(db.sequelize, db.Sequelize)
 db.gemba = require('./gemba.model')(db.sequelize, db.Sequelize)
 module.exports = db