var app = angular.module('notesApp');


app.controller("notesController", function ($scope, noteFactory, notesService) {

    $scope.createNewNote = function () {
        $scope.note = new noteFactory.addNote(notesService.notesArr.length + 1);
        notesService.notesArr.push($scope.note);
        $scope.notes = notesService.notesArr;
    };

    $scope.deleteNote = function (id) {
        notesService.notesArr.splice(id-1,1);
        notesService.notesArr.forEach(function (elem,i) {
            elem.id = i+1;
        });
    };

    $scope.noteIsDone = function (id, status) {
        if (status == true) {
            notesService.notesDoneArr.push($scope.notes[id-1]);
            $scope.doneNotes = notesService.notesDoneArr;
        }
    };

    $scope.noteIsNotDoneAgain = function (id, status) {
        if (status == false) {
            notesService.notesDoneArr.forEach(function (elem,i) {
               if(elem.id == id){
                   notesService.notesDoneArr.splice(i,1);
               }
            });
        }
    };

    $scope.deleteDoneNote = function (id) {
        notesService.notesDoneArr.forEach(function (elem,i) {
            if(elem.id == id){
                notesService.notesDoneArr.splice(i,1);
            }
        });
        $scope.deleteNote(id);
    };

    $scope.changeColor = function (id) {
        if ($scope.notes[id-1].color === "pink") {
            $scope.notes[id-1].color = "blue";
        } else if ($scope.notes[id-1].color === "blue") {
            $scope.notes[id-1].color = "yellow";
        }  else if ($scope.notes[id-1].color === "yellow") {
            $scope.notes[id-1].color = "green";
        } else if ($scope.notes[id-1].color === "green") {
            $scope.notes[id-1].color = "pink";
        }
    };

    $scope.z = 1000;
    $scope.drag = function (id) {
        var item = document.getElementById(id);
        item.onmousedown = function(e) {
            item.style.position = 'absolute';
            item.style.zIndex = $scope.z++;
            function getCoords(item) {
                var box = item.getBoundingClientRect();
                return {
                    top: box.top + pageYOffset,
                    left: box.left + pageXOffset
                };
            }
            var shiftX = e.pageX - getCoords(item).left;
            var shiftY = e.pageY - getCoords(item).top;
            function moveAt(e) {
                item.style.left = e.pageX - shiftX + 'px';
                item.style.top = e.pageY - shiftY - 27 + 'px';
            }
            document.onmousemove = function(e) {
                moveAt(e);
            };
            item.onmouseup = function() {
                document.onmousemove = null;
                item.onmouseup = null;
            }
        }
    };

});
