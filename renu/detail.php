<?php
	$dbhost='localhost';
	$dbuser='root';
	$dbpass='';
	$dbname='renu';
	$conn = mysql_connect($dbhost, $dbuser, $dbpass);
	if(! $conn)
	{
		die('could not connect : ' . mysql_error());
	}
	mysql_select_db("renu",$conn);
	session_start();
	if(!isset($_POST['submit']))
	{
		if(empty($_POST['id'])||empty($_POST['email']))
		{
			echo "id or email is invalid";
		}
		else
		{
			$id=$_POST['id'];
			$email=$_POST['email'];
			$name=$_POST['name'];
			$imageUrl=$_POST['imageUrl'];
			$_SESSION['logged_in']=$username;
			$sql="insert into varun".
				"(id,email,name,imageUrl)".
				"values('$id','$email','$name','$imageURL')";
			$retval=mysql_query($sql,$conn);
			if(!retval)
			{
				die('could not enter data :' .mysql_error());
			}
			else
			{
				echo "entered data succesfully";
			}
		}
	}
?>	