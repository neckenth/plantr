const db = require('./models');

db.sync( {force:true} )
    .then(() => {
        console.log('DB SYNC SUCCESS');
    })
    .catch((error) => {
        console.log(error)
        console.error('DB SYNC FAILURE');
    })
    .finally(() => {
        db.close();
    })