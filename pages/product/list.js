spaApp.controller('dsSpCtrl', function ($scope, $http) {
    $url = "http://localhost:3000/san-pham";

    $scope.dsSanPham = [];

    // Call api lấy thông tin danh sách sản phẩm
    $http({
        method: "GET",
        url: $url
    }).then(function (response) {
        $scope.dsSanPham = response.data;
        console.log($scope.dsSanPham);
    })

    // Bắt sự kiện bấm nút xóa
    $scope.onClickDelete = function (idsp) {
        //  Xác nhận trước khi xóa

        // Call api để xóa sản phẩm
        $http({
            method: "DELETE",
            url: $url + "/" + idsp
        }).then(function() {
            alert('Xóa sản phẩm thành công');
        }).catch(function(error) {
            alert('Có lỗi xảy ra');
        })
    }
});