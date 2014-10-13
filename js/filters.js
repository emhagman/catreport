(function () {
    'use strict';
    angular.module('cat.filters', []).filter('range', function () {
        return function (input, total) {
            var i;
            total = parseInt(total, 10);
            for (i = 0; i < total; i += 1) {
                input.push(i);
            }
            return input;
        };
    });
}());
