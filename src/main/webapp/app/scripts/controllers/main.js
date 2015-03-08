'use strict';

/**
 * @ngdoc function
 * @name angularStructureApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularStructureApp
 */
angular.module('angularStructureApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
