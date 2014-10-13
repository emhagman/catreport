(function () {
    'use strict';
    angular.module('cat.controllers').controller('reviews', function ($scope, $http, $location) {
        // get the review data
        var id = $location.search().id;
        $scope.id = id;

        // get the instructor details
        $http.get('/api/instructors/' + id).success(function (data) {
            $scope.instructor = data;
            $scope.instructor.overall = data.avg_helpfulness + data.avg_availability + data.avg_grading + data.avg_homework;
            $scope.instructor.overall = ($scope.instructor.overall / 4).toFixed(2);
        });

        // get the reviews
        $http.get('/api/reviews/id/' + id).success(function (data) {
            $scope.reviews = data;
        });
    });
}());