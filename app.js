
var app = angular.module('appname', []);

app.controller('Headerctrl',function($scope){
    $scope.appDetails = {
        title: 'Hello Angular Js QuickStart'
    }
});

app.controller('BookListCtrl', function ($scope) {
    $scope.books = [
        {
            "id": "1",
            "name": "algorithm",
            "year": "2018"
          },
          {
            "id": "2",
            "name": "angularjs",
            "year": "2018"
          },
          {
            "id": "3",
            "name": "java",
            "year": "2018"
          },
          {
            "id": "4",
            "name": "javascript",
            "year": "2018"
          },
          {
            "id": "5",
            "name": "typescript",
            "year": "2018"
          }
          ,{
            "id": "6",
            "name": "React",
            "year": "2018"
          }
    ]

    $scope.addToCart = function (book) {
        console.log(book.id);
    }
})