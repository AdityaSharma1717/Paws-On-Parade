<?php
include_once('connection.php');
$query = "select * from adopt";
$result = mysql_query($query);
?>
<!DOCTYPE html>
<html>

<head>
    <title> Fetch Data From Database </title>
</head>

<body>
    <table align="center" border="1px" style="width:600px; line-height:40px;">
        <tr>
            <th colspan="4">
                <h2>Student Record</h2>
            </th>
        </tr>
        <th> Adopter Name </th>
        <th> Address</th>
        <th> Phone Number </th>
        <th> Breed </th>

        </tr>

        <?php while ($rows = mysql_fetch_assoc($result)) {
            ?>
            <tr>
                <td>
                    <?php echo $rows['Adopter Name']; ?>
                </td>
                <td>
                    <?php echo $rows['Address']; ?>
                </td>
                <td>
                    <?php echo $rows['Phone Number']; ?>
                </td>
                <td>
                    <?php echo $rows['Breed']; ?>
                </td>
            </tr>
        <?php
        }
        ?>

    </table>
</body>

</html>