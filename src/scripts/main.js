AOS.init();

const dataDoEvento = new Date("Feb 08, 2025 20:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval (function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const dias = 1000 * 60 * 60 * 24;
    const horas = 1000 *60 * 60;
    const minutos = 1000 * 60;

    const distanciaAteEvento = timeStampDoEvento - timeStampAtual;

    const diasParaEvento = Math.floor (distanciaAteEvento / dias);
    const horasParaEvento = Math.floor ((distanciaAteEvento % dias) / horas);
    const minutosParaEvento = Math.floor ((distanciaAteEvento % horas) / minutos);
    const segundosParaEvento = Math.floor ((distanciaAteEvento % minutos) / 1000);

    document.getElementById('contador').innerHTML = `${diasParaEvento} dias  ${horasParaEvento}h ${minutosParaEvento}m ${segundosParaEvento}s.`

    
}, 1000);

