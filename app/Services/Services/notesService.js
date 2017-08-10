var app = angular.module('notesApp');

app.service("notesService", function () {
    this.notesArr = [];
    this.notesDoneArr = [];
});
