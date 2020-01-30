# esconde-tel

<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment-timezone/0.5.26/moment-timezone-with-data.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/moment-business-days@1.1.3/index.min.js"></script> 


// Formato de feriados(array separado por virgula): 'DD/MM/YYYY'
var feriados = [];
var abre_dia_util = 7;
var fecha_dia_util = 22;
var abre_especial = 7;
var fecha_especial = 20;
mostra_relogio(7, 22, 7, 20, feriados);
