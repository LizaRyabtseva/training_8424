const mountains = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
];

function createStyle(elems) {
    for (let i=0; i<elems.length; i++) {
        elems[i].style.border = 2 + 'px solid';
        elems[i].style.textAlign = 'right';
    }
}

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

    for (let i = 0; i < keys.length; i++) {
        ths[i].style.padding = 15 + 'px';
    }

    for (let i = 1; i < trs.length; i++) {
        trs[i].appendChild(document.createElement('td')).appendChild(document.createTextNode(mountains[i-1].name));
        trs[i].appendChild(document.createElement('td')).appendChild(document.createTextNode(mountains[i-1].height));
        trs[i].appendChild(document.createElement('td')).appendChild(document.createTextNode(mountains[i-1].place));
    }

    let tds = table.getElementsByTagName('td');
    for (let i = 0; i < 3 *mountains.length; i++) {
        tds[i].style.padding = 15 + 'px';
    }
    createStyle(tds);
    createStyle(ths);

    return table;
}

document.querySelector("#mountains").appendChild(createTable(mountains));