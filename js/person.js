export default class Registro{
    constructor(name,lastname,phone,email,dateRegister,typeOfRegister){
        this.name = name;
        this.lastname = lastname;
        this.phone = phone;
        this.email = email;
        this.dateRegister = dateRegister;
        this.typeOfRegister = typeOfRegister;
    }
}

export function ShowInfo(registro){
    return `<b>Nombre</b> ${registro.name} \n <b>Apellido</b> ${registro.lastname} \n <b>Phone</b> ${registro.phone} \n <b>Email</b> ${registro.email}`;
}

