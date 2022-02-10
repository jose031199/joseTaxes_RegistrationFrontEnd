<?php
$name = $_POST["txt_name"];
$lastname = $_POST["txt_lastname"];
$phone = $_POST["txt_phone"];
$email =$_POST["txt_email"];
$date = str_replace("T", " ", $_POST["txt_date"]); 
$tipoCita = $_POST["date_option"];

    /*Variables to use to connect with DB*/
    $serverName = "RIOS-PC";
    $userName = "Rios03";
    $password = "Cabrera110399";

    /*Using JSON_encode*/
    //Connecting with database
    try{
        $conn = new PDO("sqlsrv:server=$serverName;database=Taxes_Dates",$userName,$password);
        if($conn){
            //echo json_encode($date);
            //Prepare sentence
            $sql = "INSERT INTO Taxes_Register(name,lastname,phone,email,fecha,tipo_cita) 
            VALUES (:name, :lastname, :phone, :email, :fecha,:tipo_cita)";



            //Prepare statement
            $stmt = $conn->prepare($sql);

            //Bind values
            $stmt->bindParam(':name',$name);
            $stmt->bindParam(':lastname',$lastname);
            $stmt->bindParam(':phone',$phone);
            $stmt->bindParam(':email',$email);
            $stmt->bindParam(':fecha',$date);
            $stmt->bindParam(':tipo_cita',$tipoCita);

            //Verified if statemetn was executed
            if($stmt->execute()){
                json_encode($email);
            }
            else{
                echo 'Error';
            }
        }else{
            echo 'Not connected';
        }
    }catch(PDOException $e){
        echo $e->getMessage();
    }

?>