<?php

session_start();
$con= mysqli_connect('localhost','root');
if($con){
	echo " connection successful";
	$db = mysqli_select_db($con,'medicare');
	$username = $_POST['id'];
	$password = $_POST['password'];

	$tbName = $_SESSION['tb'];
	$location   = $_SESSION['location'];
	$id =  $_SESSION['id'];
	$pass= $_SESSION['pass'] ;
	$else = $_SESSION['else'];

	//echo $tbName;
}
else{
	echo " no connection";
	}

if ( isset($_POST['submit'])){
	
	$sql = "select * from $tbName where $id = '$username' and $pass='$password'";
	$query = mysqli_query($con,$sql);
	$row = mysqli_num_rows($query);
		
		if($row == 1){
			echo "";
			echo "\n\nlogin Successful";
			
			session_destroy();

			session_start();
			$_SESSION['username']= $username;
			header($location);
		}
		else{
			echo "";
			echo"\n\nlogin Faild";
			$_SESSION['wrong']= 11;
			header($else);
		}
	
}
?>
