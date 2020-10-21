const mountains = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
];

function createTable(mountains) {
    let table = document.createElement('table');
    table.style.border = 2 + 'px solid';

    for (let i = 0; i <= mountains.length; i++) {
        table.appendChild(document.createElement('tr'));
    }
    let keys=Object.keys(mountains[0]);

    for (let k of keys) {
        table.getElementsByTagName('tr')[0].appendChild(document.createElement('th')).appendChild(document.createTextNode(k.toUpperCase()));
    }

    let ths = table.getElementsByTagName('th');
    let trs = table.getElementsByTagName('tr');

    for (let i=1; i<trs.length; i++) {
        for (let j=0; j<keys.length; j++) {
            trs[i].appendChild(document.createElement('td')).appendChild(document.createTextNode(mountains[i-1][keys[j]]));
        }
    }

    let tds = table.getElementsByTagName('td');

    for (let td of tds) {
        if (td.innerHTML==+td.innerHTML) {
            td.style.textAlign = 'right';
        }
        td.style.padding = 15 + 'px';
        td.style.border = 2 + 'px solid';
    }

    for (let th of ths) {
        th.style.padding = 15 + 'px';
        th.style.border = 2 + 'px solid';
    }

    return table;
}

document.querySelector("#mountains").appendChild(createTable(mountains));