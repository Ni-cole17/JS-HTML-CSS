//Crie uma função que retorna o nome dos membros de um Map que tem o papel 'ADMIN' no sistema.
//Crie uma função getAdmins que recebe um Map;
//Crie um Map e popule-o com nomes de usuários e seus papeis no sistema. (Ex: 'Luiz' => 'Admin');
//Dentro de getAdmins, utilize o loop for...of para retornar uma lista com os nomes dos usuários que são administradores.

const ADMIN = new Map();
ADMIN.set('Luiz','Admin');
ADMIN.set('Lúcia','Programador');
ADMIN.set('Carlos','Designer');
ADMIN.set('Paola','Advogado');
ADMIN.set('Lua','Redator');


function getAdmins(map){
    const iterator = map.entries();
    var admins = [];
    for([keys,values] of map ){
        if (values == 'Admin'){
            admins.push(keys);
        }
    }
    return admins;
}

console.log(getAdmins(ADMIN))

