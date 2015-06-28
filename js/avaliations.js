$(function(){
	var average = $('.ratingAverage').attr('data-average');
	function avaliacao(average){
		average = average.toString();
		$('.bg').css('width', 0);

		var split = average.split('.');
		var integer = Number(split[0]);
		var half = Number(split[1]);

		for(var i=0; i< integer; i++){
			$('.star:eq('+i+') .bg').animate({width:'100%'}, 500);
		}
		if(half != undefined){
			var next = integer;
			$('.star:eq('+next+') .bg').animate({width:(half*10)+'%'}, 500);
		}
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