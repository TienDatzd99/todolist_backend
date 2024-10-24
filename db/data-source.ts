import  {DataSourceOptions, DataSource} from "typeorm" ;

export const dataSourceOptions:DataSourceOptions ={
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "Tiendat@0801",
    database: "todoList_db",
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/db/migrations/*.js'],
    synchronize: false
}

const dataSource = new DataSource(dataSourceOptions);
export default dataSource