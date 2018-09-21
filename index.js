// Code your solution in this file!

function  logDriverNames(drivers) {
  
drivers.forEach(function(element) {
  console.log(element.name);
})

}

function logDriversByHometown(drivers, argument){
  drivers.forEach(function(elem) {
    
  if (elem.hometown === argument){
      console.log(elem.name);
    }
})
}

function driversByRevenue(drivers){
  let newArr = [];
  
  drivers.forEach(function(element){
    newArr.push(element)
  })
  newArr.sort(function(a, b) {
  return a.revenue - b.revenue;
});
 return newArr;
}

 function driversByName(drivers){
   let newArr = [];
  
    drivers.forEach(function(element){
    newArr.push(element)
  })
  
 newArr.sort(function (a,b){
    return a.name.localeCompare(b.name);
  })
  return newArr;
    
}

function totalRevenue(drivers){
var sum = drivers.reduce( function (accu, element){
  return accu + element.revenue} , 0);

 return sum;

}

function averageRevenue(drivers){
let a = drivers.length;

var sum = drivers.reduce( function (accu, element){
  return accu + element.revenue} , 0);

 return sum/a;
}