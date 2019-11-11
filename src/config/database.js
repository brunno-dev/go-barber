module.exports = {
  dialect: 'postgres',
  host: '192.168.99.100',
  username: 'postgres',
  password: 'docker',
  database: 'gobarber',
  define: {
    timestamps: true,
    underscored: true, // para criar underscored em nome de tabelas. Para não criar sem
    underscoredAll: true,
  },
};
