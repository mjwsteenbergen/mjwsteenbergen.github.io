
function getLocationId() {
    var url = new URL(location.href);
    return url.searchParams.get("id");
    
}

function invite() {
    let email = localStorage.getItem("invite-email")
    if (email !== null && getLocationId() !== null) {
        if (localStorage.getItem("latest-invite") === getLocationId()) {
            document.getElementById("invite-status").innerHTML = " already ";
        } else {
            var url = 'https://personalfunctions.azurewebsites.net/api/InviteFunction?id=' + getLocationId() + "&email=" + email;
            console.log(url);
            fetch(url, {
                method: "POST"
            })
            .then(function (response) {
                if (!response.ok) {
                    throw new Error("HTTP error, status = " + response.statusText);
                }
                localStorage.setItem("latest-invite", getLocationId());
                return response.text();
            })
            .catch(error => {
                console.error(error);
            });
        }
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
            return response.json();
        }).then(function (myJson) {
            console.log(myJson);//event-time
            document.getElementById("event-name").innerHTML = "<br>\"" + myJson.subject + "\"";
            document.getElementById("event-time").innerHTML = new Date(myJson.start).toUTCString();
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
        localStorage.removeItem("latest-invite");
        updateEmail();
    }
});

