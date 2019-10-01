<script>

//adicionar em eventos javascript > onChange do campo 

var dados = 'fase1';
var idFase = 1;


$("#add-campo").click(function () {

	
	$("#formulario").append('<li class="form-group"><input type="text" id="fase' + idFase + '" placeholder="Nome da etapa" class="scFormObjectOdd" onkeyup="$(this).val($(this).val().replace(\';\',\',\'));" onkeydown="$(this).val($(this).val().replace(\';\',\',\'));"> <select id="id_time' + idFase + '"   class="scFormObjectOdd" onChange="carregaColab(this.options[this.selectedIndex].value,' + idFase + ');"><option value="">(Opção pai)</option></select><select id="' +idFase +'"   class="scFormObjectOdd" ><option value>(Opção filho)</option></select></li>');
	
	$("#total_id").attr("value",idFase);

	return false;
	
});

$(document).on('click', '#excluir', function () {

	var num = idFase - 1;
	$('#id_time'+num).parents('li').remove();
	idFase--;
	$("#total_id").attr("value",idFase-1);
	
	
	if (idFase < 2)
	{
		idFase = 1
	}
	
	decrementar();
	return false;
});




</script>