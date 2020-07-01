const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');

var orderSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    StaffID: String,
    ItemsList: String,
    Total: Number 
} , { collection: 'Order' } );


/// ***************** ***************** *****************
const urilc = 'mongodb://localhost:27017/atnshop';
const uri = "mongodb+srv://duy18380:xGiaMd99GtFi6cOR@cluster0-b4rbb.mongodb.net/Web?retryWrites=true&w=majority";
const NameDataBase =  "Web"; // "CloudDB";

/// ***************** ***************** *****************
async function runInsert(NameTable , newRec) {
	
	const xdbo = await MongoClient.connect(
		uri, 
		{ useNewUrlParser: true , useUnifiedTopology: true }
    );    
    const dbo = xdbo.db(NameDataBase);
    
	////// Run - Query
	const results = await dbo.collection(NameTable).insertOne(newRec);

    console.log(results);
	return results;
}



///// Gọi hàm Insert !!!
runInsert("Order" ,  
        {
            _id : new mongoose.mongo.ObjectId(),
            StaffID : "vusername",
            ItemsList : "dssp",
            Total : 0
        }
    );
