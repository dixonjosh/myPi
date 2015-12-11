
angular.module('SettingsService', []).factory('Settings', ['$http', function($http) {

    return {
        // call to get all settings
        get : function() {
            return $http.get('/api/settings');
        },


        // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new setting
        create : function(settingData) {
            return $http.post('/api/settings', settingData);
        },

        // call to DELETE a setting
        delete : function(id) {
            return $http.delete('/api/settings/' + id);
        }
    }       

}]);