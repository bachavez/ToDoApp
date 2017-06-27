(function(){
    'use strict';

    angular
        .module('module')
        .controller('controller', controller)

    controller.$inject = ['$location'];

    function controller($location) {
        /* jshint validthis:true */
        var vm = this;

        activate();

        function activate() { }
    }
})();