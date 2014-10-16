(function () {
    'use strict';

    var d = angular.module('cat.directives', []);
    d.directive('appVersion', ['version', function (version) {
        return function (scope, elm, attrs) {
            elm.text(version);
        };
    }]);
    
}());