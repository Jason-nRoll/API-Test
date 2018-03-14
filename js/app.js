function submitTest()
{
    document.getElementById("btnCaller").disabled = true;

    var accountCheck = "https://app.liquidplanner.com/api/v1/account";
    var customFieldCheck = "https://app.liquidplanner.com/api/v1/workspaces/191707/custom_fields";
    var clientsCheck = "https://app.liquidplanner.com/api/v1/workspaces/191707/clients";
    var taskCheck = "https://app.liquidplanner.com/api/workspaces/191707/tasks";
    var createTask = "https://app.liquidplanner.com/api/v1/workspaces/191707/tasks";
    var deleteTask = "https://app.liquidplanner.com/api/v1/workspaces/191707/tasks/44092056";

    var createTaskData = JSON.stringify({"task": {"name":"babys first task", "parent_id":"44092052"}});
    var falseData = JSON.stringify(false);

    

    printReply(customFieldCheck, falseData, "GET");

    document.getElementById("btnCaller").disabled = false;
    return false;
}

function printReply(url, data, type)
{
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
        //console.log(this.responseText);
        document.getElementById("target").value = JSON.stringify(JSON.parse(this.responseText), null, 2);
    }
    });

    xhr.open(type, url);
    xhr.setRequestHeader("Authorization", "Bearer c73fb5ff-a4b5-4748-9606-fc8e19906923");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(data);

    return false;
}
