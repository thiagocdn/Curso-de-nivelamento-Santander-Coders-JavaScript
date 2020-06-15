function saldoDeMesesComLucro(umPeriodo) {
  let lucroMeses = []
  for (let mes=0; mes< umPeriodo.length; mes++) {
    if (umPeriodo[mes] > 0) {
        lucroMeses.push(umPeriodo[mes]);
    }
  }
  return lucroMeses;
}