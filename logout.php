<?php

session_start();
session_destroy();

header('location:index.php');
session_start();
	$_SESSION['wrong']= 0;

?>