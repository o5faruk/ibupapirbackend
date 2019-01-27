app.controller('loginController', function ($scope, $http, $location) {

    $scope.login = function (user) {
        console.log(user);

        $http.post('api/auth/login', user).then(function (response) {
            localStorage.setItem('token', response.data.token);
            $location.path("/home");
        }).catch(function (err) {
            console.log(err);
        })
    }

})