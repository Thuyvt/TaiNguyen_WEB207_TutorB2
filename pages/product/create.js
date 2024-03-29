
var apiUrl = "http://localhost:3000/san-pham";
spaApp.controller('createSpCtrl', function ($scope, $http) {
    $scope.ten = "";
    $scope.anh = "";
    $scope.tenDanhMuc = "";

    $scope.addSp = function(){
        $scope.addObj = {
            "ten": $scope.ten,
            "anh": $scope.anh,
            "tenDanhMuc": $scope.tenDanhMuc
        }
        $http.post(apiUrl, $scope.addObj).then(
            function(res){
                alert("thêm thành công");
                return document.location = "#!list-product";
            })
    }
});