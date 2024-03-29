
var apiUrl = "http://localhost:3000/san-pham";
spaApp.controller('editSpCtrl', function ($scope, $http ,$routeParams) {
    $scope.getObj = [];
    $scope.id = $routeParams.id;

    // lấy 1 đối tượng
    $http.get(`${apiUrl}/${$scope.id}`).then(
        function(res){
            if(res.status = 200){
                $scope.getObj = res.data;
                console.log(res.data);
            }
        }, function(res){
            alert("không lấy được dữ liệu");
        }
    )

    // xử lý button sửa
    $scope.updateSp = function(){
        $scope.editParams = {
            "ten": $scope.getObj.ten,
            "anh": $scope.getObj.anh,
            "tenDanhMuc": $scope.getObj.tenDanhMuc
        }
        $http.put(`${apiUrl}/${$scope.id}`, $scope.editParams).then(
            function(){
                alert("Sửa thành công");
                return document.location = "#!list-product";
            }, function(){
                alert("sửa không thành công")
            }
        )
    }
});