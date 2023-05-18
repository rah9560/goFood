const mongoose = require('mongoose');
mongoURi="mongodb+srv://gofood:Password@cluster0.rmnpyrm.mongodb.net/gofoodmern?retryWrites=true&w=majority"
const mongoDB=async()=>{
    await mongoose.connect(mongoURi, {useNewUrlParser:true}, async(err,result)=>{
        if(err) {console.log("there is an error",err);
    }
        else{
            console.log("connected to the database");
            const fetched_data=await mongoose.connection.collection("food_items");
            fetched_data.find({}).toArray(function(err,data){
                if(err){
                    console.log(err);
                }
                else{
                    console.log();
                }
            })
        }
        
    });
}
module.exports=mongoDB;
