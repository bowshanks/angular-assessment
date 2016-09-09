angular.module('assessment').service('mainService',function($q,$http){

  this.getProducts = function(productId){
    if (productId == null) {productId = ''}
    var deferred = $q.defer();

    $http({
      method: 'GET',
      url: 'http://practiceapi.devmounta.in/products' + productId
    }).then(function(response){
      deferred.resolve(response.data);
    })

    return deferred.promise
  }
});
