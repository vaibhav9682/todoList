const mongoose = require('mongoose');




main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/contact_list_db');
    console.log('it is connected to database');
}