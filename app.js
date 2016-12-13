(function(){
  'use strict';
  
  angular.module("LunchCheck", [])
  .controller("LunchCheckckController", ['$scope', '$log', function($scope, $log) {
    $scope.message = '';
    $scope.inputItems = '';
    
    $scope.CheckNItem = function(){
      $log.log($scope.inputItems);
      
      if($scope.inputItems === ''){
        $scope.message = 'Please enter data first';
      }else{
        var nItems = $scope.inputItems.split(',').length;
        var threshold_nItems = 3;
        if(nItems > threshold_nItems){
          $scope.message = 'Too much!';
        }else if(nItems <= threshold_nItems){
          $scope.message = 'Enjoy!';
        }
      }
      
    };
    
  }]);
  
})();
