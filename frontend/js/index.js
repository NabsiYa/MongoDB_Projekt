async function updateList()
{
    const response = await fetch('http://localhost:6969/users/list', {
        method: 'GET',
    });

    var result = await response.json();
    
    const userList = document.getElementById('username_list');
    userList.innerHTML = ''; // performance is not our main concern.

    for (var obj in result)
    {
        var user = result[obj];
        
        const listElement = document.createElement('ul');

        const usernameItem = document.createElement('li');
        usernameItem.innerHTML = user.username;
        const dateItem = document.createElement('li');
        dateItem.innerHTML = user.date;
        const idItem = document.createElement('li');
        idItem.innerHTML = user._id;

        listElement.appendChild(usernameItem);
        listElement.appendChild(dateItem);
        listElement.appendChild(idItem);

        userList.appendChild(listElement);
    }
}

async function addPerson()
{
    const username = document.getElementById('username').value;

    if (username.length < 3)
        return alert('The username must have at least 3 characters to be valid.');

    var data = {
        username: username,
    }

    await fetch('http://localhost:6969/users/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    }).then(async result => {
        // get json result
        var data = await result.json();
        // if user exists just tell.
        if (data.message == "user_exists")
            alert('user with the username already exists.');
        updateList();
    });
}

async function removePerson()
{
    const username = document.getElementById('username').value;

    if (username.length < 3)
        return alert('The username must have at least 3 characters to be valid.');

    var data = {
        username: username,
    }
    
    await fetch('http://localhost:6969/users/remove', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    }).then(result => {
        updateList();
    });
}

async function updatePerson()
{
    const username = document.getElementById('username').value;
    const new_username = document.getElementById('new_username').value;

    if (username.length < 3)
        return alert('The username must have at least 3 characters to be valid.');

    if (new_username.length < 3)
        return alert('The new username must have at least 3 characters to be valid.');

    var data = {
        username: username,
        new_username: new_username,
    }
    
    await fetch('http://localhost:6969/users/update', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    }).then(result => {
        updateList();
    });
}