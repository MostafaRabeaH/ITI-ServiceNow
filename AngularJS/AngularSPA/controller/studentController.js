angular.module('app1').controller('studentController', function($scope, studentService) {

    $scope.students = [];
    $scope.newStudent = {};
    $scope.searchText = ''; 
    $scope.sortColumn = '-mark';
    $scope.isEditing = false;
    $scope.editingId = null;
    
    $scope.isLoading = true;
    $scope.fetchMessage = "No data found.";

    $scope.getStudents = function() {
        $scope.isLoading = true;
        
        studentService.getAllStudents()
            .then((response) => {
                $scope.isLoading = false;
                $scope.students = response.data;
                
                if($scope.students.length === 0) {
                    $scope.fetchMessage = "No data found.";
                }
            })
            .catch((error) => {
                $scope.isLoading = false;
                $scope.fetchMessage = "Error: Could not load data.";
            });
    };

    $scope.getStudents();

    $scope.saveStudent = function() {
        $scope.isSaving = true;

        if ($scope.isEditing) {
            studentService.updateStudent($scope.editingId, $scope.newStudent)
                .then((response) => {
                    $scope.cancelEdit(); 
                    $scope.getStudents();
                })
                .catch((error) => {
                    $scope.isSaving = false;
                    alert("Failed to update student.");
                });
        } else {
            studentService.insertStudent($scope.newStudent)
                .then((response) => {
                    $scope.newStudent = {}; 
                    $scope.getStudents(); 
                })
                .catch((error) => {
                    $scope.isSaving = false;
                    alert("Failed to save student.");
                });
        }
    };
    
    $scope.editStudent = function(student) {
        $scope.isEditing = true;
        $scope.editingId = student.studentid;
        
        $scope.newStudent = angular.copy(student);
    };

    $scope.cancelEdit = function() {
        $scope.isEditing = false;
        $scope.editingId = null;
        $scope.newStudent = {}; 
    };

    $scope.deleteStudent = function(studentId) {
        if (confirm(`You will delete This studenet`)) {
            studentService.delteStudent(studentId)
            .then((response) => {
                $scope.getStudents();
            })
            .catch((error) => {
                alert("Student was not deleted !!");
            });
        }
    };
});
