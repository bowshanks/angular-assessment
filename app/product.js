angular.module('assessment').directive('productDetails',function(){

  return {
    restrict: 'EA',
    scope: {
      product: '='

    },
    templateUrl: './views/product-tmpl.html',
    link: function(scope,element,attribute){
      scope.hideImage = function(){
        console.log(element);
        element.find('img').css({"display":"none"});
        element.find('.show-image').css({"display":"initial"});
      }

      scope.showImage = function(){
        console.log(element);
        element.find('img').css({"display":"initial"});
        element.find('.show-image').css({"display":"none"});
      }
    }

  }


})
