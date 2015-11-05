(function(){
    angular.module('DirectiveTutorial')
    .controller('SampleController', ['$scope',function($scope){
        $scope.lastName = "Smitherson";
    
        $scope.changeName = function(number){
            var names = [
                "Jones",
                "Scott",
                "Marshall",
                "Alfred"
            ];
            
            return names[number];
        };
    }]);
}());