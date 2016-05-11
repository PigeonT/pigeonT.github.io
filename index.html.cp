<!DOCTYPE html>

<html lang="en">

<head>
	<title>welcome</title>
	<meta charset="UTF-8">
	<meta name="keywords" content="blog programming introduction">
	<meta name="description" content="pigeonT blog">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="css/normalize.css">
	<link rel="stylesheet" href="css/main.css">	


</head>
<body class="container" ng-controller="containerController">
	<header class="main-header">
		<nav>
			<ul>
				<li><a href="#aboutme">About me</a></li>
				<li><a href="#interests">Interests</a></li>
				<li><a href="#reading">Reading</a></li>
				<li><a href="#contacts">Contacts</a></li>
			</ul>
		</nav>
	</header>
	
	<main class="content">
		<div class="main-content" ng-view>
			
		</div>       

	</main>

	<footer>
		<p><a href="mailto:pigeon.tian@gmail.com">pigeon.tian@gmail.com</a></p>
	</footer>

	<script data-main="scripts/main" src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.2.0/require.js" async></script>
	<script>
		document.getElementsByClassName('content')[0].style.minHeight = (window.innerHeight - 180) + 'px';
	</script>
</body>
</html>