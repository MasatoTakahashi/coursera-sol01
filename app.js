(function(){
  'use strict';
  
  angular.module("LunchCheck", [])
  .controller("LunchCheckckController", LunchCheckckController); 
  
  // inject the dependency
  LunchCheckckController.$inject = ['$scope', '$log'];
  
  function LunchCheckckController($scope, $log) {
    $scope.message = '';
    $scope.inputItems = '';
              
    $scope.CheckNItem = function(){
      
      if($scope.inputItems === ''){
        $scope.message = 'Please enter data first';
        $scope.messageColour = {'color':'red'};
        $scope.checkButtonColour = {'border':'solid 2px red'};
      }else{
        // split by comma
        var splitItems = $scope.inputItems.split(',');
        // remove whitespace or empty element
        splitItems = splitItems.filter(function(str){
          return /\S/.test(str);
        }).filter(Boolean);
        
        var nItems = splitItems.length;
        var threshold_nItems = 3;
        
        if(nItems > threshold_nItems){
          $scope.message = 'Too much!';
        }else if(nItems <= threshold_nItems){
          $scope.message = 'Enjoy!';
        }
        $scope.messageColour = {'color':'green'};
        $scope.checkButtonColour = {'border':'solid 2px green'};
        
      }
    }    
  }
  
})();
