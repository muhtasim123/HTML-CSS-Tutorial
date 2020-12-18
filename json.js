let stringOfJson = `{"name": "Alec", "age": 10, "language": "JavaScript"}`;

let jsObj = JSON.parse(stringOfJson);


jsObj.name = "Henry";
console.log(jsObj);

let obj = {
    make:"BMW",
    model:"5 series",
    year:"1997"
}

let string = JSON.stringify(obj);
console.log(string);