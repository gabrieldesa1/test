function addToTable() {

    let name = document.getElementById('Nome').value
    let email = document.getElementById('email').value
    let phone = document.getElementById('Telefone').value
    let work = document.getElementById('Formação').value
    let table = document.getElementById("myTable")

    let tableSize = table.rows.length
    let row = table.insertRow(tableSize)
    let cell1 = row.insertCell(0)
    let cell2 = row.insertCell(1)
    let cell3 = row.insertCell(2)
    let cell4 = row.insertCell(3)
    let cell5 = row.insertCell(4)
    let cell6 = row.insertCell(5)
    row.id = tableSize

    let btnCode = "<button class='remove-btn' onclick='removeToTable(this)'>Remover</button>"

    cell1.innerHTML = tableSize
    cell2.innerHTML = name
    cell3.innerHTML = email
    cell4.innerHTML = phone
    cell5.innerHTML = work
    cell6.innerHTML = btnCode

    document.getElementById('Nome').value = ""
    document.getElementById('email').value = ""
    document.getElementById('Telefone').value = ""
    document.getElementById('Formação').value = ""

    return false
}

function removeToTable(id) {

    let row = id.parentNode.parentNode.id
    row = document.getElementById(row)
    row.parentNode.removeChild(row)

    return false;
}