$(function(){
	var average = $('.ratingAverage').attr('data-average');
	function avaliacao(average){
		average = (Number(average)*20);
		$('.bg').css('width', 0);		
		$('.barra .bg').animate({width:average+'%'}, 500);
	}
	
	avaliacao(average);

	$('.star').on('mouseover', function(){
		var indexAtual = $('.star').index(this);
		for(var i=0; i<= indexAtual; i++){
			$('.star:eq('+i+')').addClass('full');
		}
	});
	$('.star').on('mouseout', function(){
		$('.star').removeClass('full');
	});

	$('.star').on('click', function(){
		var idArticle = $('.article').attr('data-id');
		var voto = $(this).attr('data-vote');
		$.post('sys/votar.php', {votar: 'sim', artigo: idArticle, ponto: voto}, function(retorno){
			avaliacao(retorno.average);
			$('.votos span').html(retorno.votos);
		}, 'jSON');
	});
});