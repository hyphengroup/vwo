app
  .directive("abWidget", function() {
    return {
      templateUrl: "widget/widget.html",
      controller: "abTestController"
    };
  })
  .controller("abTestController", function($scope, abTestService, abHelper) {
    $scope.carBrandDropdown = {
      key: "brand",
      placeholder: "Brand"
    };

    $scope.carModelDropdown = {
      key: "model",
      placeholder: "Model"
    };

    $scope.carYearDropdown = {
      key: "year",
      placeholder: "Year"
    };

    $scope.carTrimDropdown = {
      key: "trims",
      placeholder: "Trim",
      modelKey: "trim"
    };

    $scope.getDropdownItem = function() {
      return function(queryObj) {
        var url = host + "/api/car-insurance/v2/cars";
        return abTestService.request(url, queryObj);
      };
    };

    $scope.getResultBtnOptions = {
      hide: false
    };

    $scope.validation = function() {
      var brand = $scope.carBrand;
      var model = $scope.carModel;
      var year = $scope.carYear;
      var trim =
        typeof $scope.trimData === "object" ? $scope.trimData.trim : undefined;

      if (brand && model && year && trim) {
        $scope.showErrorMsg = false;
        $scope.carBrandDropdown.showError = false;
        $scope.carModelDropdown.showError = false;
        $scope.carYearDropdown.showError = false;
        $scope.carTrimDropdown.showError = false;
        return true;
      } else {
        $scope.showErrorMsg = true;
        if (!brand) {
          $scope.carBrandDropdown.showError = true;
        }

        if (!model) {
          $scope.carModelDropdown.showError = true;
        }

        if (!year) {
          $scope.carYearDropdown.showError = true;
        }

        if (!trim) {
          $scope.carTrimDropdown.showError = true;
        }
        return false;
      }
    };

    $scope.resultHandler = function() {
      if (!$scope.validation()) {
        return;
      }

      var carTrim = $scope.trimData.trim;
      var vehicleType = $scope.trimData.vehicleType;
      if (vehicleType === "SQ") {
        // go to funnel
        location.href = "/";
        return;
      }

      var fmvUrl = host + "/api/car-insurance/v2/cars";

      var getFMV = function() {
        return abTestService
          .request(fmvUrl, {
            brand: $scope.carBrand,
            model: $scope.carModel,
            year: $scope.carYear,
            trim: carTrim
          })
          .then(function(data) {
            $scope.carFMV = data.fmv.filter(function(item) {
              return item.indexOf("Default FMV") !== -1;
            })[0];
            return $scope.carFMV;
          });
      };

      var resultUrl = host + "/api/car-insurance/v3/plans/default";

      var getResult = function() {
        $scope.payload = {
          carBrand: $scope.carBrand,
          carModel: $scope.carModel,
          carVintage: $scope.carYear,
          carTrim: carTrim,
          carFMV: $scope.carFMV,
          vehicleType: vehicleType,
          hasMortgage: false,
          hasCarInsurance: false,
          hasActsOfNature: false,
          primaryUse: "private",
          bodily_injured: 200000,
          personal_accident: 250000,
          sortBy: "price-"
        };

        return abTestService.request(resultUrl, $scope.payload).then(function(data) {
          $scope.result = data.products[0]; // general product with lowes price;
        });
      };

      getFMV().then(getResult);
    };

    $scope.goToFunnel = function() {
      location.href =
        host +
        "/car-insurance/car-information?" +
        abHelper.objectToQuery($scope.payload);
    };
  });
