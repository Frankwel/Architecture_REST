(function() {
    'use strict';

    angular
        .module('gatewayApp')
        .controller('ProduitController', ProduitController);

    ProduitController.$inject = ['Produit'];

    function ProduitController(Produit) {

        var vm = this;

        vm.produits = [];

        loadAll();

        function loadAll() {
            Produit.query(function(result) {
                vm.produits = result;
                vm.searchQuery = null;
            });
        }
    }
})();
