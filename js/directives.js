(function () {
    'use strict';

    var d = angular.module('cat.directives', []);
    d.directive('appVersion', ['version', function (version) {
        return function (scope, elm, attrs) {
            elm.text(version);
        };
    }]);
    
    d.directive('autoFillableField', function () {
        return {
            restrict: "A",
            require: "?ngModel",
            link: function (scope, element, attrs, ngModel) {
                setInterval(function () {
                    if (!(element.val() === '' && ngModel.$pristine)) {
                        scope.$apply(function () {
                            ngModel.$setViewValue(element.val());
                        });
                    }
                }, 300);
            }
        };
    });
    
}());