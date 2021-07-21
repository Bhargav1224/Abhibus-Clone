const mongoose=require("mongoose");

const connect = () => {
    return mongoose.connect("mongodb+srv://bhargav:bhagi1224@cluster0.dagbu.mongodb.net/abhibusdatabase?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true

    })
}

module.exports=connect;