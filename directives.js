(function(){
    
   angular.module('DirectiveTutorial')
   .directive('sampleDirective', ['$interval', function($interval){
   
       return {
        restrict: "EAC",
        scope: {
            firstName: "@",
            lastName: "=",
            nameChanger: "&"
        },
        templateUrl: "directive-template.html",
        link: function(scope, elem, attrs){
          var count = 0;
          $interval(function(){
            scope.lastName = scope.nameChanger()(count);
            count++
          }, 3000)
        
        }
       
       }
   }]);
}());