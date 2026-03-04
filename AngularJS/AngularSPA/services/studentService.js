app.service("studentService", function($http) {

    const apiLink = "https://zvdbfxkyxhhdifrzujnk.supabase.co/rest/v1/students";
    const apiKey = "sb_publishable_w6gDjUCRvT5z6oO1q26LqA_Oitxv6Zt";
    const headers = {
        'apikey' : apiKey,
        'Authorization': 'Bearer ' + apiKey, 
        'Content-Type' : 'application/json'
    };
    
    this.getAllStudents = function() {
        return $http.get(apiLink, {headers : headers});
    };
    
    this.insertStudent = (newStudentData) => {
        return $http.post(apiLink, newStudentData, { headers: headers});
    };
    
    this.delteStudent = function(studentId) {
        const delteUrl = apiLink +"?studentid=eq." + studentId;
        return $http.delete(delteUrl, {headers: headers});
    };
    
    this.updateStudent = function(studentId, updateData) {
        const updateUrl = apiLink +"?studentid=eq." + studentId;
        return $http.patch(updateUrl, updateData, { headers: headers });          
    };

    this.getStudentById = function(studentId) {
        const url = apiLink + "?studentid=eq." + studentId;
        return $http.get(url, { headers: headers });
    };

});

