(function () {
    'use strict';
    angular.module('cat.controllers').controller('postreview', function ($scope, $http, $location) {

        // get the instructor data
        var id = $location.search().id;

        // get the instructor details
        $http.get('/api/instructors/' + id).success(function (data) {
            $scope.instructor = data;
            $scope.instructor.overall = data.avg_helpfulness + data.avg_availability + data.avg_grading + data.avg_homework;
            $scope.instructor.overall = ($scope.instructor.overall / 4).toFixed(2);
        });

        // post the review
        $scope.postReview = function () {
            $http.post('/api/reviews/post', {
                id: id,
                class: $scope.class,
                homework: $scope.homework,
                availability: $scope.availability,
                helpfulness: $scope.helpfulness,
                grading: $scope.grading,
                review: $scope.review
            }).success(function () {
                location.href = '/#/reviews?id=' + id;
            });
        };
    });
}());