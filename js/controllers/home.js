(function () {
    'use strict';
    angular.module('cat.controllers', []).controller('home', function ($scope, $http) {

        // get the top 10 reviews
        $http.get('/api/reviews/recent').success(function (data) {
            $scope.reviews = data;
        });

        // get the top 10 requests
        $http.get('/api/requests/recent').success(function (data) {
            $scope.requests = data;
        });

    });
}());