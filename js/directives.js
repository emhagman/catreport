'use strict';

angular.module('cat.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]).directive('autoFillableField', function() {
    return {
      restrict: "A",
      require: "?ngModel",
      link: function(scope, element, attrs, ngModel) {
        setInterval(function() {
          if (!(element.val()=='' && ngModel.$pristine))
          {
            scope.$apply(function() {
              ngModel.$setViewValue(element.val());
            });
          }
        }, 300);
      }
    };
  });
