var app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider
    .when("/books", {
      templateUrl: "partials/booklist.html",
      controller: "BookListCtrl"
    })
    .when("/cart", {
      templateUrl: "partials/cartlist.html",
      controller: "CartListCtrl"
    })
    .otherwise({
      redirectTo: "/books"
    });
});

app.factory("cartService", function() {
  var cart = [];

  return {
    getCart: function() {
      return cart;
    },
    addToCart: function(book) {
      cart.push(book);
    },
    buy: function(book) {
      alert("Thanks for buying: ", book.name);
    }
  };
});

app.factory("bookService", function() {
  books = [
    {
      id: "1",
      name: "algorithm",
      year: "2018"
    },
    {
      id: "2",
      name: "angularjs",
      year: "2018"
    },
    {
      id: "3",
      name: "java",
      year: "2018"
    },
    {
      id: "4",
      name: "javascript",
      year: "2018"
    },
    {
      id: "5",
      name: "typescript",
      year: "2018"
    },
    {
      id: "6",
      name: "React",
      year: "2018"
    }
  ];
  return {
    getBooks: function() {
      return books;
    },
    addToCart: function(book) {}
  };
});

app.controller("CartListCtrl", function($scope, cartService) {
  $scope.cart = cartService.getCart();

  $scope.buy = function(book) {
    cartService.buy(book);
  };
});

app.controller("HeaderCtrl", function($scope) {
  $scope.appDetails = {};
  $scope.appDetails.title = "Angulajs QuickStart";
});

app.controller("BookListCtrl", function($scope, bookService, cartService) {
  $scope.books = bookService.getBooks();

  $scope.addToCart = function(book) {
    cartService.addToCart(book);
  };
});
