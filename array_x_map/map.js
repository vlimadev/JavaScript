function getAdmins (teste) {
    let admins = [];

    for([key, value] of teste){
        if(value === 'Admin')
            admins.push(key);
    }

    return admins;
}

const usuarios = new Map();

usuarios.set('Vinicius', 'Admin');
usuarios.set('Fabio', 'Admin');
usuarios.set('Bruno', 'Admin');
usuarios.set('Enaldo', 'Admin');
usuarios.set('Gabriel', 'User');

console.log(getAdmins(usuarios));