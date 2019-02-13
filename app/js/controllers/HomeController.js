app.controller("HomeController", ["$scope", "MateriaService", "ProfesorService", function($scope, MateriaService, ProfesorService){
	$scope.title = "Materias";

	$scope.seleccion = {
		materia : null,
		profesor : null,
	}

	MateriaService.getMaterias().then(function(response){
		$scope.materias = response.materias;
	});

	$scope.profesores = ProfesorService.getProfesores().profesores;

	$scope.reiniciarSeleccion = function() {
		$scope.seleccion.materia = null;
		$scope.seleccion.profesor = null;
	}

	$scope.puedeAgregarMateria = function() {
		return $scope.seleccion.materia != null
			&& $scope.seleccion.profesor != null && $scope.seleccion.profesor != "";
	}

	$scope.agregarMateria = function() {
		console.log("Materia = " + $scope.seleccion.materia + ", Profesor = " + $scope.seleccion.profesor);
		$scope.reiniciarSeleccion();
	}
}]);