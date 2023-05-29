<?php

    include 'conexion_be.php';

    $nombre_completo = $_POST['FULL_name'];
    $correo = $_POST['correo'];
    $pasword = $_POST['pasword'];


    $query = "INSERT INTO usuarios( FULL_name , Email , PASWORD )  
                VALUES('$nombre_completo' , '$correo' , '$pasword' )";

    $ejecutar = mysqli_query($conexion , $query);

    if($ejecutar){
        echo '
        <script>
            alert("usuario almacenado exitosamente");
            window.location = "../index.php"
        </script>
        ';
    }

?>