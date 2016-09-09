angular.module('assessment').controller('mainCtrl',function($scope,mainService){

  $scope.getProducts = function(){
    mainService.getProducts().then(function(response){
      $scope.products = response;
    })
  }

  $scope.getProducts();

});
