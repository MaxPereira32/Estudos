
createStringConnection("db_products", "Felipe", "123")

function createStringConnection(databaseName, user, pass){
    console.log(`connect:DBCONNECT;user=${user};pass=${pass};initial_database=  
        ${databaseName}`)

}