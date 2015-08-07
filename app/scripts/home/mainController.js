'use strict';

angular.module('myApp')
  .controller('MainController', ['MainService', function (MainService) {
    
    var vm = this;

    MainService.getData().then(function(response) {
      vm.data = response;
    });
 }]);
