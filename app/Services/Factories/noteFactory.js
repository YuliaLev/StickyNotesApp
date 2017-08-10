var app = angular.module('notesApp');

app.factory("noteFactory", function () {

    function randNoteColor() {
        var colors = ["pink", "blue", "yellow", "green"];
        var randNum = Math.random() * (4);
        randNum = Math.floor(randNum);
        return colors[randNum];
    }

    function Note(id) {
        this.color = randNoteColor();
        this.id = id;
        this.done = false;
    }

    return {
        addNote: Note
    }
});
