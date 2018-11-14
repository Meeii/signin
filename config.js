var config = {
    database: 'admin',
    username: 'user', // 用户名
    password: 'pwd', // 口令
    host: 'localhost', // 主机名
    port: 3306 // 端口号，MySQL默认3306
};

module.exports = config;

/* 
grant all privileges on admin.* to 'user'@'%' identified by 'pwd';

use admin;

create table users (
    id varchar(50) not null,
    name varchar(100) not null,
    password varchar(10) not null,
    createdAt bigint not null,
    updatedAt bigint not null,
    primary key (id)
) engine=innodb;
*/