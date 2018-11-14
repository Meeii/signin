const Sequelize = require('sequelize');

const config = require('./config');

console.log('init sequelize...');

var sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 30000
    }
});
//如何映射
var User = sequelize.define('user', {
    id: {
        type: Sequelize.STRING(50),
        primaryKey: true
    },
    name: Sequelize.STRING(100),
    password: Sequelize.STRING(10),
    createdAt: Sequelize.BIGINT,
    updatedAt: Sequelize.BIGINT,
}, {
        timestamps: false
    });

var now = Date.now();

//插入数据
async function insertData(nickname, pwd) {
    var account = await User.create({
        id: 'd-' + now,
        name: nickname,
        password: pwd,
        createdAt: now,
        updatedAt: now,
    });
    var user = new Object();
    user.name = account.name;
    user.password = account.password;
    return user;
};

async function searchUser(username){
    var users = await User.findAll({
        where: {
            name: username
        }
    });
    //console.log(`find ${users.length} pets:`);
    for (u of users) {
        if(u.name == username)
        return u;
    }
}

module.exports = {
    insertData: insertData,
    searchUser: searchUser
}