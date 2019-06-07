var Pokemon = angular.module("Pokemon",[])
Pokemon.controller("PokemonList",function($scope, $rootScope, $http){
  
  $scope.Pokedex=[];
  var important="44 65 72 69 63 6b 20 41 6c 65 6a 61 6e 64 72 6f 20 4c 6f 72 65 6e 7a 6f 2c 20 35 74 6f 20 42 61 63 6f 20 22 41 22";
  
  for(var x=1; x<=800; x++){
    $http({
      method: "GET",
      url: "https://pokeapi.co/api/v2/pokemon/"+x
    }).then(function Datos(P){
      $scope.Pokedex.push(P)
      console.log(P)
    })
  }

})
//bloquear clic derecho en la pagina
document.oncontextmenu = function(){return false;}