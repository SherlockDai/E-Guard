/**
 * Created by SherlockDai on 4/5/2016.
 */
function Login(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    $.ajax({
        async: false,
        url: "http://localhost/E-Guard/index.php",
        cache: false,
        type: "POST",
        data: JSON.stringify({action: "login", username: username, password : password}),
        dataType: "json"
    }).done(function (data, textStatus, jqXHR) {
        MessageSent( data, textStatus, jqXHR);
    }).fail(function (jqXHR, textStatus, errorThrown) {
        MessageRejected(jqXHR, textStatus, errorThrown);
    })
}

function MessageSent(data, textStatus, jgXHR){
    if(data == "allow"){
        chrome.tabs.update({
            url:"configuration.html"
        })
    }
    if(data == "deny"){
        alert("username or password is incorrect, please try again.")
    }
}

function MessageRejected(jqXHR, textStatus, errorThrown){

}

document.getElementById("login").addEventListener("click", Login);