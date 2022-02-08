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
    return `<b>Nombre</b> ${registro.name} <br> <b>Apellido</b> ${registro.lastname} <br> <b>Phone</b> ${registro.phone} 
    <br> <b>Email</b> ${registro.email} <br> <b>Fecha</b> ${registro.dateRegister}<br> <b>Tipo de Cita</b> ${registro.typeOfRegister}`;
}

