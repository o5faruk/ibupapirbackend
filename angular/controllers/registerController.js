app.controller('registerController', function ($scope, $http, $location) {

    $scope.register = function (user) {
        
        $http.post('api/auth/register', user).then(function (response) {
            localStorage.setItem('token', response.data.token);
            $location.path('/login')
        }).catch(function (err) {
            console.log(err);
        })
    }

})