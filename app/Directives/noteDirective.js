var app = angular.module('notesApp');

app.directive('noteDirective', function () {
    return {
        templateUrl: "Directives/noteTemplate.html"
    }
});

app.directive('doneNoteDirective', function () {
    return {
        templateUrl: "Directives/doneNoteTemplate.html"
    }
});