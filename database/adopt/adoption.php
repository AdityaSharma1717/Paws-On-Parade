<?php
$adopter_name = $_POST['adopter_name'];
$address = $_POST['address'];
$phone_no = $_POST['phone_no'];
$breed = $_POST['breed'];

// Database connection
$conn = new mysqli('localhost', 'root', '', 'adopt');
if ($conn->connect_error) {
	echo "$conn->connect_error";
	die("Connection Failed : " . $conn->connect_error);
} else {
	$stmt = $conn->prepare("insert into adopt_dog(adopter_name, address, phone_no, breed) values(?, ?, ?, ?)");
	$stmt->bind_param("ssis", $adopter_name, $address, $phone_no, $breed);
	$execval = $stmt->execute();
	echo $execval;
	echo "New Adoption Deltails Added Successfully!";
	$stmt->close();
	$conn->close();
}
?>