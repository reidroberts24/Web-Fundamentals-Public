console.log("page loaded...");

function changeName() {
    var newName = "Babe Ruth"
    var nameElement = document.querySelector("#name")
    nameElement.innerText = newName
}

function removeRequest(element) {
    var listItem = element.closest('.card-list-item')
    listItem.remove()
    var numRequestsElement = document.querySelector("#num-requests")
    var numRequests = parseInt(numRequestsElement.innerText)
    numRequestsElement.innerText = numRequests -1

    if (element.alt == "accept"){
        var connections = document.querySelector("#connections")
        var numConnections = parseInt(connections.innerText)
        connections.innerText = numConnections + 1
    }
}


