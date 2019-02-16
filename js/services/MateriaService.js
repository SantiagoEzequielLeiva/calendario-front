app.service("MateriaService", ["$http", "Utils", function($http, Utils){
    this.getMaterias = function() {
        return $http.get(Utils.api.url + "/materias").then(function(response) {
           return response.data;
        });
    }
}])