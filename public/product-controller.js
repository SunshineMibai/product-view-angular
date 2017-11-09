app.controller("productController", function($scope, Products) {
    Products.query(function(data) {
      $scope.products = data;
    });
  });