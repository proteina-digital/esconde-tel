function mostra_relogio(abre_dia_util, fecha_dia_util, abre_especial, fecha_especial, feriados_array){
	// Define Timezone padrão
	var tz = 'America/Sao_Paulo';

	// segunda a sexta
	moment.updateLocale('us', {
	   holidays: feriados_array,
   	   holidayFormat: 'DD/MM/YYYY',
   	   workingWeekdays: [1, 2, 3, 4, 5]
	});

	// Transforma os horários fornecidos em inteiros
	var hora_abertura_util = parseInt(abre_dia_util);
	var hora_fechamento_util = parseInt(fecha_dia_util);

	var hora_abertura_especial = parseInt(abre_especial);
	var hora_fechamento_especial = parseInt(fecha_especial);


	// Converte a hora local para o timezone de Brasília
	var hora_timezone = moment().tz(tz);
	console.log('America/Sao_Paulo: '+hora_timezone.format());

	// Define a hora de abertura
	var abre_as = hora_timezone.clone().hour(hora_abertura_util).minute(0).seconds(0).milliseconds(0);

	// Define a hora de fechamento
	var fecha_as = abre_as.clone().hour(hora_fechamento_util).minute(0).seconds(0).milliseconds(0);

	// Define a hora de abertura especial
	var abre_as_especial = hora_timezone.clone().hour(hora_abertura_especial).minute(0).seconds(0).milliseconds(0);

	// Define a hora de fechamento especial
	var fecha_as_especial = abre_as.clone().hour(hora_fechamento_especial).minute(0).seconds(0).milliseconds(0);


	// Define o próximo dia útil baseado no timezone atual de hoje
	var proximo_dia_util = hora_timezone.clone().nextBusinessDay();


	if (hora_timezone.isBusinessDay()) {

		// Está aberto
		if( hora_timezone.diff(abre_as) > 0 && hora_timezone.diff(fecha_as) < 0 ){
			console.log("Dia útil: ABERTO");
		}else{
			$('a[href*="tel:"]').css('display', 'none');
    		console.log("Dia útil: FECHADO");
		}

	}else{

		// Checa se NÃO É DOMINGO
		if (hora_timezone.day() != 0) {

			// Está aberto
			if( hora_timezone.diff(abre_as_especial) > 0 && hora_timezone.diff(fecha_as_especial) < 0 ){
				console.log("Sábado ou Feriado: ABERTO");
			}else{
				$('a[href*="tel:"]').css('display', 'none');
	    		console.log("Sábado ou Feriado: FECHADO");
			}

		}
	}

}  
