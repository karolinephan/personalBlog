import * as express from "express";         
import * as bodyParser from "body-parser";
import * as mongoose from "mongoose";
import { Routes } from "./routes/routes";   //import Routes class 

class App {

    public app: express.Application;
    public route: Routes = new Routes(); //create new object of type Routes
    public mongoUrl: string = 'mongodb://localhost:3000/mongodb'; // create a string contain mongodb path
    
    constructor() {
        this.app = express();
        this.config();  
        this.route.routes(this.app);    //apply the rounting   
        this.mongoSetup(); // set up mongo    
    }

    private mongoSetup(): void{
        mongoose.Promise = global.Promise;// use mongo promise
        mongoose.connect(this.mongoUrl, { useNewUrlParser: true });  //connect to mongodb using mongo string  
    }

    private config(): void{
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

}

export default new App().app;