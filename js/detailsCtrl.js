angular.module('assessment').controller('detailsCtrl',function($scope,$state,mainService){

  $scope.productID = $state.params.id;

  mainService.getProducts('/' + $scope.productID).then(function(response){

    $scope.specificProduct = response;

  })



});
