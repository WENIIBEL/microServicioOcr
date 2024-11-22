import mysql from "mysql2/promise"
import  config from "config"

const configOptions = {
    host: config.get<string>("HOST"),
    port: config.get<number>("PORT"),
    user: config.get<string>("USER"),
    password: config.get<string>("PASSWORD"),
    database: config.get<string>("DATABASE"),
    
  };
  export const getPoolConnection = () => {
    const connection = mysql.createPool(configOptions);
    return connection;
  };
