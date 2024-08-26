import { Connection } from "mysql";
import util from 'util';

export class DatabaseStorage{
    private connection;
    public query:any;
    constructor(connection:Connection){
        if(new.target===DatabaseStorage){
        throw new TypeError("Cannot construct Abstract instances directly");
}
this.connection=connection;
this.query=util.promisify(this.connection.query).bind(this.connection);
}
}