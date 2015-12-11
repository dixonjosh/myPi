
angular.module('SettingsCtrl', []).controller('SettingsController', ['$scope', '$http', function($scope, $http) {
    
    var ctrlr = this;

    $scope.tagline = 'Configure the outlets/pins';

    ctrlr.blink = function() {
        console.log("start blinking...");
        $http.get('/blink');
    }

}]);