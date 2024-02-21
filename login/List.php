<?php
include 'db_connection.php';
$conn = openCon();
$query = "select * from `users`";
if(isset($_GET["search"])){
    $search = mysqli_escape_string($conn, $_GET["search"]);
    $query.= " WHERE `users`.`name` LIKE '%".$search."%' OR `users`.`user_name` LIKE '%".$search."%' OR `users`.`U_ID` LIKE '%".$search."%'"; 
}
$result = mysqli_query($conn, $query);
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OnePyOneAdmins</title>
    <link rel="stylesheet" href="E-Learning/css/normalize.css" />
    <link rel="stylesheet" href="E-Learning/css/all.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <style>
        .edit {
            color:#fff;
            margin-left:10px;
        }
        * {
            box-sizing: border-box;
        }
        body {
            font-family: 'Poppins', sans-serif;
            background-color:#eefbf3;
            color:white;
        }
        a {
            text-decoration:none;
            color:var(--second-color);
            font-weight:bold;
        }
        table tr td,
        table tr th {
            padding:10px;
            margin:15px;
            border-radius:5px ;
            background-color:#309255;
            border:2px solid #000;
        }
        table {
            width:100%;
            text-align: center;
            border-radius: 5px;
        }
        form {
            margin:50px 0% 50px 1.5%;
        }
        form input {
            border:none;
            padding:10px 20px;
            border-radius:10px;
            border-bottom:1px solid #000;
            background-color:#309255;
            color:#fff;
        }
        form input[type=text]::placeholder {
            color:#fff;
        }
        form input:focus{
            outline:none;
        }
        h2{
            color:#309255;
            font-size: 30px;
            position: relative;
            display:inline-block;
            left:50%;
            transform:translatex(-50%);
        }
        h2::before{
            content:"";
            position: absolute;
            width: 100%;
            padding: 3px 0;
            background-color:#309255;
            bottom:0;
            border-radius:10px;
        }
        button{
            padding:10px 30px;
            cursor: pointer;
            border:none;
            background-color:#309255;
            border-radius:10px;
            color:#fff;
            transition:.5s;
        }
        button:hover{
            background-color:#000;
        }
        .title{
            text-align:center;
            color:#fff;
        }
        .title a{
            color:#fff;
        }
        .color{
            color:#fff;
        }
        .fa-house{
            padding:10px 30px;
            cursor: pointer;
            border:none;
            background-color:#309255;
            border-radius:10px;
            color:#fff;
            transition:.5s;
            display:inline-block;
            margin-left:74%;
        }
    </style>
</head>
<body>
    <h2>Controls</h2>
    <form method="get">
        <input type="text" name="search" placeholder=" Name or UserName or ID">
        <button type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
        <a href="WDTProject/homeadmin.html"><i class="fa-solid fa-house"></i></a>
    </form>
    <table style="text-align: center">
            <tr>
                <td colspan="3" class="title" > <?= mysqli_num_rows($result) ?> Users <i class="fa-solid fa-user edit"></i></td>
                <td colspan="3" class="title" ><a href="signup-check.php">Add User</a></td>
            </tr>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Username</th>
                <th>Admin</th>
                <th>Actions</th>
            </tr>
        <?php
        while ($row = mysqli_fetch_assoc($result)){
        ?>
        <tr>
            <td><?= $row['U_ID']?></td>
            <td><?= $row['name']?></td>
            <td><?= $row['user_name']?></td>
            <td><?= ($row['admin']) ? 'Yes' : 'No' ?></td>
            <td><a class="color" href="edit.php?U_ID=<?=$row['U_ID']?>">Edit</a> | <a class="color" href="delete.php?U_ID=<?=$row['U_ID']?>">Delete</a></td>
        </tr>
        <?php
        }
        ?>
    </table>
    <script src="E-Learning/js/all.min.js"></script>
    <script src="E-Learning/js/bootstrap.bundle.min.js"></script>
    <script src="E-Learning/js/tasks.js"></script>
</body>
</html>
<?php
mysqli_free_result($result);
closeCon($conn);