export default class Registro{
    constructor(name){
        this.name = name;
        this.lastname = lastname;
        this.phone = phone;
        this.email = email;
        this.dateRegister = dateRegister;
        this.typeOfRegister = typeOfRegister;
    }
}

export function ShowInfo(registro){
    console.log(`Nombre ${registro.name} \n Apellido ${registro.lastname}`);
}

