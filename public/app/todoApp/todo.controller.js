(function(){
    'use strict';

    angular
        .module('todoApp')
        .controller('todoController', todoController)

    todoController.$inject = [''];

    function todoController($location) {
        var vm = this;
        vm.testMessage = "controller is working";
    }
})();