angular.module("ruokieApp", ['ngStorage'])
.constant("baseUrl", "http://localhost:2403/")
    .controller("ruokieCtrl", function ($scope, $localStorage, $sessionStorage) {

        var ingredientsAdd = ['potato','bell pepper','onion'];

        $localStorage.username = "guest";
        $scope.username = $localStorage.username;

        $scope.checkGuest = function(){
            if ($localStorage.username == "guest"){
                return true;
            }
        }



    });