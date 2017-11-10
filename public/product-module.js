var app = angular.module("productApp", ["ngRoute", "ngResource"]);

app.factory("Products", function($resource) {
  return $resource("http://localhost:3000/api/products/:id");
});

app.config(function($routeProvider) {
  $routeProvider.when("/", {
    templateUrl: "main.html"
  }).when("/products", {
    templateUrl: "products.html",
    controller: "productController"
  })
});