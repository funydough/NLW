 // importar a dependencia sqlittte3

 const sqlite3 = require("sqlite3").verbose()

// // criar o objeto que irá fazer operaçõoes no banco de dados 

 const db = new sqlite3.Database("./src/database/database.db") 

 module.exports = db 

// // uttilizar o objeto de banco de dadoa nas nossas operações

//  db.serialize(() => {
    //1- criar tabela
    // db.run(`
    //     CREATE TABLE IF NOT EXISTS places (
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         image TEXT,
    //         name TEXT,
    //         address TEXT,
    //         address2 TEXT,
    //         state TEXT,
    //         city TEXT,
    //         items TEXT
    //     );
    
    // `)

    //2- inserir dados na tabela
    // const query = `
    //     INSERT INTO places (
    //         image,
    //         name,
    //         address,
    //         address2,
    //         state,
    //         city,
    //         items
    //     ) VALUES (?,?,?,?,?,?,?);
    // ` 
    // const values = [
    //     "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1401&q=80",
    //     "Papersider",
    //     "Guilherme Gemballa, Jardim América",
    //     "Nº260",
    //     "Santa Catarina",
    //     "Rio do sil",
    //     "Papéis e Papelão"
    // ]
    // function afterInsertData(err) {
    //     if(err) {
    //         return console.log(err)
    //     }
    //     console.log("Cadastrado com sucesso")
    //     console.log(this)
    // }
    // db.run(query, values, afterInsertData)


    //3 - conmsultar dados da tabela
    // db.all(`SELECT * FROM places`, function(err, rows) {
    //     if (err) {
    //         return console.log(err)
    //     }
    //     console.log("Aqui estão seus registros: ")
    //     console.log(rows)
    //   })

  //   //4- Deletar dados da tabela

  //  db.run(`DELETE FROM places WHERE id = ?` , [3], function(err){
  //    if(err){
  //       return console.log(err)
  //    }
  //    console.log("Registro deletado com sucesso")
  //  })

  // })     