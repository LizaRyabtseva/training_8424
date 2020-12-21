let context=document.querySelector("canvas").getContext("2d");
const results=[
    {name: "Удовлетворен", count: 1043, color: "lightblue"},
    {name: "Нормально", count: 563, color: "darkseagreen"},
    {name: "Не удовлетворен", count: 510, color: "pink"},
    {name: "Без комментариев", count: 175, color: "silver"},
    ];
let count=results.reduce((sum, {count}) => sum+count, 0);

let angles=[];
for (let i=0; i<results.length; i++) {
    angles.push((results[i]["count"]/count)*2*Math.PI);
}

let currentAngle=0, r=100, xc=250, yc=250;
for (let i=0; i<angles.length; i++) {
    context.beginPath();
    let endAngle=angles[i]+currentAngle;
    let xStart=xc+(r+75)*(Math.cos(currentAngle+0.3));
    let yStart=yc+(r+10)*(Math.sin(currentAngle+0.3));

    context.textAlign="center";
    context.textBaseline="bottom";
    context.fillStyle="black";
    context.font="13pt Georgia";
    context.fillText(results[i]['name'], xStart, yStart);

    context.arc(xc, yc, r, currentAngle, endAngle);
    context.lineTo(xc, yc);
    context.fillStyle = results[i]['color'];

    context.fill();
    currentAngle += angles[i];
}