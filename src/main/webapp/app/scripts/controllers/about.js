'use strict';

/**
 * @ngdoc function
 * @name angularStructureApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularStructureApp
 */
angular.module('angularStructureApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
