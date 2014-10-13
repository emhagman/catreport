(function () {
    'use strict';
    angular.module('cat.controllers').controller('instructors', function ($scope, $http, $cookieStore) {

        // get all instructors
        $http.get('/api/instructors/all').success(function (data) {
            $scope.instructors = data;
        });

        // filter the instructors out
        $scope.filter = function () {
            $http.post('/api/instructors/filter', { name: $scope.filterName }).success(function (data) {
                $scope.instructors = data;
            });
        };
    });
}());