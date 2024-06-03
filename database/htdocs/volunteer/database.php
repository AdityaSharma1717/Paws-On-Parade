<?php
$server_name = "localhost";
$username = "root";
$password = "";
$database_name = "volunteer";

$conn = mysqli_connect($server_name, $username, $password, $database_name);
//now check the connection
if (!$conn) {
	die("Connection Failed:" . mysqli_connect_error());

}

if (isset($_POST['submit'])) {
	$volunteer_name = $_POST['volunteer_name'];
	$contact = $_POST['contact'];
	$email = $_POST['email'];
	$skills = $_POST['skills'];

	$sql_query = "INSERT INTO volunteer (volunteer_name,contact,email,skills)
	 VALUES ('$volunteer_name','$contact','$email','$skills')";

	if (mysqli_query($conn, $sql_query)) {
		echo "New Details Entry inserted successfully !";
	} else {
		echo "Error: " . $sql . "" . mysqli_error($conn);
	}
	mysqli_close($conn);
}
?>