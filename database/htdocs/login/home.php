<?php
session_start();

if (isset($_SESSION['id']) && isset($_SESSION['user_name'])) {

    ?>
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>LOGIN</title>
        <link rel="stylesheet" type="text/css" href="style.css">
    </head>

    <body>
        <h1>Hello,
            <?php echo $_SESSION['name']; ?>
        </h1><br>
        <h1>*Important Details Only for Authorised users*</h1>
        <a href="http://127.0.0.1:5173/">Logout</a>
    </body>

    </html>

    <?php
} else {
    header("Location: index.php");
    exit();
}
?>