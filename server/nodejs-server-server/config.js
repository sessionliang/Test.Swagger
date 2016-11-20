const config = {
    mongo: {
        url: process.env.MONGO_DB_URI || 'mongodb://localhost/education-manage-system'
    }
};

module.exports = config;