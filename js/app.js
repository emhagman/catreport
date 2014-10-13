(function () {
    'use strict';

    var app = angular.module('cat', [
        'cat.filters', 'cat.services', 'cat.directives', 'cat.controllers',
        'ngCookies', 'angulartics', 'angulartics.google.analytics', 'ui.bootstrap'
    ]);
    
    // router
    app.config(['$routeProvider', function ($routeProvider) {

        $routeProvider.when('/home', {templateUrl: 'views/home.html', controller: 'home'});
        $routeProvider.when('/instructors', {templateUrl: 'views/instructors.html', controller: 'instructors'});
        $routeProvider.when('/reviews', { templateUrl: 'views/reviews.html', controller: 'reviews' });
        $routeProvider.when('/reviews/post', { templateUrl: 'views/postreview.html', controller: 'postreview' });
        $routeProvider.when('/register', { templateUrl: 'views/register.html', controller: 'register' });
        $routeProvider.otherwise({redirectTo: '/home'});

    }]);
    
    // check for session on run
    app.run(['$rootScope', '$http', '$cookieStore', '$location', function ($rootScope, $http, $cookieStore, $location) {

        // make sure they have a session
        $http.get('/api/auth/session').success(function (data) {
            if (data.session === false) {
                $cookieStore.remove('loggedIn');
                $rootScope.loggedIn = false;
                if ($location.path() !== '/register') {
                    $location.path('/home');
                }
            }
        });

        // notify
        toastr.options = { 'positionClass': 'toast-bottom-full-width' };
        toastr.success('You may now post reviews again! Please take the time to post at least one review to help out everyone else!');

    }]);

    // use url encoded form data instead of JSON
    // this fixes are post format for python and is critical
    app.config(function ($httpProvider) {
        $httpProvider.defaults.transformRequest = function (data) {
            if (data === undefined) {
                return data;
            }
            return $.param(data);
        };
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
    });
}());