const { NODE_ENV } = process.env;

const config = {
  production: {
    MONGO_URI: `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cintan-shard-00-00.wygjh.mongodb.net:27017,cintan-shard-00-01.wygjh.mongodb.net:27017,cintan-shard-00-02.wygjh.mongodb.net:27017/<dbname>?ssl=true&replicaSet=atlas-p0i91b-shard-0&authSource=admin&retryWrites=true&w=majority`,
  },
  staging: {
    MONGO_URI: `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cintan-shard-00-00.wygjh.mongodb.net:27017,cintan-shard-00-01.wygjh.mongodb.net:27017,cintan-shard-00-02.wygjh.mongodb.net:27017/<dbname>?ssl=true&replicaSet=atlas-p0i91b-shard-0&authSource=admin&retryWrites=true&w=majority`,
  },
};
module.exports = config[NODE_ENV];
