windows.onload = function(){

    var http = new XMLHttpRequest();

    http.onreadystatechange = function() {
        if(http.readyState== 4 && http.status == 200) {
            console.log(JSON.parse(http.response));

        }
    };

    http.open("GET", "AJAX Basic/tweets.json", false);
    http.send();
    console.log("test");
    


  READY STATES

0 - request not initialized
1 - request has been set up
2 - request has been sent
3 - request is in process
4 - request is complete
}