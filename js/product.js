angular.module('assessment').directive('productDetails',function(){

  return {
    restrict: 'EA',
    scope: {
      product: '='

    },
    templateUrl: './views/product-tmpl.html',
    link: function(scope,element,attribute){
      scope.hideLink = true;

      scope.hideImage = function(){
        element.find('img').css({"display":"none"});
        scope.hideLink = false;
      }

      scope.showImage = function(){
        element.find('img').css({"display":"initial"});
        scope.hideLink = true;
      }
    }

  }


})
