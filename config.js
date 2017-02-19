var path = require('path'),
    config;

config = {
    production: {
        url: 'https://cybeadon.com',
        mail: {},
        database: {
            client: 'pg',
            connection: process.env.DATABASE_URL,
            debug: false
        },
        fileStorage: true,
        storage: {
            active: 'ghost-s3',
            'ghost-s3': {
                accessKeyId: process.env.S3_ACCESS_KEY_ID,
                secretAccessKey: process.env.S3_ACCESS_SECRET_KEY,
                bucket: process.env.S3_BUCKET_NAME,
                region: process.env.S3_BUCKET_REGION,
                assetHost: process.env.S3_ASSET_HOST_URL
            }
        },
        server: {
            host: '0.0.0.0',
            port: process.env.PORT
        },
        paths: {
            contentPath: path.join(__dirname, '/content/')
        }
    },

    development: {
        url: 'http://localhost:2368',

        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost-dev.db')
            },
            debug: false
        },
        server: {
            host: '127.0.0.1',
            port: '2368'
        },
        paths: {
            contentPath: path.join(__dirname, '/content/')
        }
    }


};

module.exports = config;
