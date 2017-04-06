(function() {
    'use strict';

    angular
        .module('gatewayApp')
        .controller('ProduitDetailController', ProduitDetailController);

    ProduitDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Produit'];

    function ProduitDetailController($scope, $rootScope, $stateParams, previousState, entity, Produit) {
        var vm = this;

        vm.produit = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('gatewayApp:produitUpdate', function(event, result) {
            vm.produit = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
