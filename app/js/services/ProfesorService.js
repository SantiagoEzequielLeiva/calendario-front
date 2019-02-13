app.service("ProfesorService", [function(){
    this.getProfesores = function() {
        return {"profesores" : [
            {"id" : 1, "nombre" : "Juan Perez"},
            {"id" : 2, "nombre" : "Milton Helmet"},
            {"id" : 3, "nombre" : "Emiliano More"}
        ]};
    }
}])