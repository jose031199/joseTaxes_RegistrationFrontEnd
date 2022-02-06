import Registro,{ShowInfo} from './person.js';
const person = {
    name : '',
    lastname: '',
    phone:0,
    email:'',
    taxesDate:'',
    TypeRegister:''
}
/*Event to load*/
document.addEventListener('DOMContentLoaded',function(){

    //Validate form
    ValidateForm();


    //If form is complete button will work
    SubmitForm();
})

function Register_names(evt){//Function to get name of user
    const user_names = evt.target.value.trim();
    const regular_expression = /^[a-zA-Z\s]*$/;
        if(user_names.length <4 || user_names === '' || !regular_expression.test(user_names)){
            evt.target.style.background = 'var(--red)'
        }else{
            evt.target.style.background = 'transparent';
            if(evt.target.id==="name"){
                person.name = user_names
            }else if(evt.target.id==="lastname"){
                person.lastname = user_names
            }
        }
}

function Register_phone(evt){
    const phone = evt.target.value;
    const regular_expression = /[^0-9]/g
    
    if(phone.length<4 || phone==='' || regular_expression.test(phone)){
        evt.target.style.background = 'var(--red)';
    }else{
        evt.target.style.background = 'transparent';
        person.phone = parseInt(phone);
    }
}

function Register_email(evt){
    const email = evt.target.value.trim();
    const regular_expression = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/

    if(email==='' || !regular_expression.test(email)){
        evt.target.style.background = 'var(--red)';
    }else{
        evt.target.style.background = 'transparent';
        person.email = email;
    }
}

function ValidateForm() {//Function to ValidateUser
    const input_name = document.getElementById('name');
    const input_lastname = document.getElementById('lastname');
    const input_phone = document.getElementById('phone');
    const input_email = document.getElementById('email');
    const input_fecha = document.getElementById('date_input');
    const input_tipoCita = document.getElementById('cmb_date');

    input_name.addEventListener('input',Register_names);
    input_lastname.addEventListener('input',Register_names);
    input_phone.addEventListener('input',Register_phone);
    input_email.addEventListener('input',Register_email);
    input_fecha.addEventListener('change',(e)=>{person.taxesDate=e.target.value});
    input_tipoCita.addEventListener('change',(e)=>{person.TypeRegister = e.target.value});
}

function SubmitForm(){
    const btn_send = document.getElementById('btn_send');
    let empty_form =false;
    var user_register = null;
    //Event when we click button
    if(btn_send){
        btn_send.addEventListener('click',(e)=>{
            e.preventDefault();
            Object.keys(person).forEach(function(key){
                if(person[key]===''){ //If some property is empty
                    empty_form = true;
                }
            });

            if(empty_form === true){
                Swal.fire({
                    icon: 'error',
                    title: 'Envio Rechazado',
                    text:'Faltan campos por llenar',
                    showConfirmButton: false,
                    timer:1500
                });
                empty_form = false;
            }else{
                user_register = new Registro(person.name,person.lastname,person.phone,person.email,person.taxesDate,person.TypeRegister);
                Swal.fire({
                    icon: 'success',
                    title: 'Envio Exitoso',
                    html:ShowInfo(user_register),
                    showConfirmButton: false,
                    timer:3500
                });
                setTimeout(()=>{
                    location.reload();
                },5000);
            }
        });

    }
}


