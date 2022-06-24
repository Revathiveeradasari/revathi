let contacts=  [{ "id": 1, "name": "Janaya", "email": "jinseal0@virginia.edu", "gender": "Female" },
{ "id": 2, "name": "Mackenzie", "email": "mditchett1@ucoz.com", "gender": "Male" }]
function display_Contacts() {
    let rows = ""
    contacts.forEach((contacts) => {
        rows = rows + `<tr>
                            <td>${contacts.id}</td>
                            <td>${contacts.name}</td>
                            <td>${contacts.email}</td>
                            <td>${contacts.gender}</td>
                    
                            </tr>`
    })
    document.getElementById('amar').innerHTML = rows
}

