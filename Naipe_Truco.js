function naipeDeTruco(naipe){
  var retorno = [];
  for (i = 1; i<= 12; i++){
      if (i != 8 && i != 9){
          retorno.push(i + " de " + naipe);
      }
  }
  return retorno;
}