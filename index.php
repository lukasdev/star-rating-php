<?php
	include_once "conexao.php";
?>
<html lang="pt-BR">
	<head>
		<meta charset=UTF-8>
		<title>Artigos</title>
	</head>

	<body>
		<ul>
			<?php
				$selecao = $pdo->prepare("SELECT * FROM `artigos` ORDER BY `id` DESC");
				$selecao->execute();
				while($row = $selecao->fetchObject()){
			?>
			<li><a href="single.php?id=<?php echo $row->id;?>"><?php echo utf8_encode($row->titulo);?></a></li>
			<?php }?>
		</ul>
	</body>
</html>