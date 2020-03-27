// Arquivo de configuracao de conexao com banco de dados usando o Query Builder Knex
const knex = require('knex');
const configuration = require('../../knexfile');

const connection = knex(configuration.development);

module.exports = connection;