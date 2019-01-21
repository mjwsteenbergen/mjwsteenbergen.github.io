
function getLocationId() {
    var url = new URL(location.href);
    return url.searchParams.get("id");
    
}

function invite() {
    let email = localStorage.getItem("invite-email")
    if (email !== null && getLocationId() !== null) {
        console.log("insert invite fetch")
    }
}

function fetchName() {
    var url = 'https://personalfunctions.azurewebsites.net/api/InviteFunction?id=' + getLocationId();
    console.log(url);
    fetch(url)
        .then(function (response) {
            if (!response.ok) {
                throw new Error("HTTP error, status = " + response.statusText);
            }
            response.text().then(function (myJson) {
                console.log(myJson);
                //     document.getElementById("event-name").innerHTML = myJson.subject;
            })
        })
        .catch(error => {
            console.error(error);
        });
}

function updateEmail() {
    if (localStorage.getItem("invite-email") !== null) {
        document.getElementById("email").setAttribute("class", "hide");
        document.getElementById("email-check").setAttribute("class", "");
        document.getElementById("email-value").innerHTML = localStorage.getItem("invite-email");
    } else {
        document.getElementById("email").setAttribute("class", "");
        document.getElementById("email-check").setAttribute("class", "hide")
    }
}

document.addEventListener("DOMContentLoaded", function (event) {
    if (localStorage.getItem("invite-email") !== null) {
        updateEmail();
        invite()
    }

    if (getLocationId() === null) {
        document.getElementById("noid").setAttribute("class", "")
        document.getElementById("content").setAttribute("class", "hide");
        return null;
    } else {
        fetchName();
    }

    document.getElementById("forms").onkeydown = function (e) {
        let form = document.getElementById("forms")
        if(e.key === "Enter") {
            localStorage.setItem("invite-email", form.value);
            updateEmail();
            invite();
        }
    }

    
    document.getElementById("email-change").onclick = function (e) {
        localStorage.removeItem("invite-email");
        updateEmail();
    }
});

