<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@500&family=PT+Sans+Narrow&family=Sedgwick+Ave&display=swap" rel="stylesheet">
    <title>Cita Taxes</title>
</head>
<body>
    <!--Registro Para Taxes Container-->
    <section class="container">
        <div class="container__background">
            <h1>Consulta y Citas de Taxes</h1>
            <p>Conozca el resembolso de sus taxes de una manera</p>
            <ul>
                <li>F&aacute;cil</li>
                <li>R&aacute;pida</li>
                <li>Sencilla</li>
            </ul>
        </div>

        <div class="container__form">
            <form id="register_form" class="form__register"  action="">
                <h2>Registro Cita</h2>
                <div>
                    <label for="txt_name">Nombre</label>
                    <input type="text" name="txt_name" id="name" placeholder="Jose Luis">
                </div>
                <div>
                    <label for="txt_lastname">Apellido</label>
                    <input type="text" name="txt_lastname" id="lastname" placeholder="Rios">
                </div>

                <div>
                    <label for="txt_phone">Celular</label>
                    <input type="text" name="txt_phone" id="phone" placeholder="6863471580">
                </div>
                <div>
                    <label for="txt_email">Correo Electrónico</label>
                    <input type="email" name="txt_email" id="email" placeholder="example@gmail.com">
                </div>

                <div>
                    <label for="txt_date">Fecha</label>
                    <input type="datetime-local" name="txt_date" id="date_input">
                </div>

                <div>
                    <label for="cmb_date">Tipo Cita</label>
                    <select name="date_option" id="cmb_date">
                        <option value="">Seleccione</option>
                        <option value="consulta">Consulta</option>
                        <option value="rembolso">Rembolso</option>
                    </select>
                </div>

                    <button id="btn_send"type="submit">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Enviar
                    </button>
            </form>
        </div>
    </section>

    <script type="module" src="js/validation.js"></script>
</body>
</html>