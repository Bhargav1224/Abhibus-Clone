const mongoose=require("mongoose");
require("dotenv").config();
const connect = () => {
    return mongoose.connect(`mongodb+srv://bhargav:${process.env.PASSWORD}@cluster0.dagbu.mongodb.net/${process.env.DATA_BASE_NAME}?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true

    })
}

module.exports=connect;