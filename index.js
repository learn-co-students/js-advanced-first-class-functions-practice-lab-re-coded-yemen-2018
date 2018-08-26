// Code your solution in this file!
function logDriverNames(array){
    array.forEach(function(elment){
       console.log(elment.name);
  });
};
function logDriversByHometown(array,homeTown){
  array.forEach(function(elment){
    if(elment.hometown === homeTown){
      console.log(elment.name);
    }
  });
};
function driversByRevenue(array){
  const newArray = [...array].sort(function (firstDriver, secondDriver){
    return firstDriver.revenue  - secondDriver.revenue ;
  });
  return newArray;
};
function driversByName(array){
  const newArray = [...array].sort(function(firstDriver, secondDriver){
    return firstDriver.name.localeCompare(secondDriver.name);
  });
  return newArray;
};
function totalRevenue(array){
  return array.reduce(function(sum,elment){
    return elment.revenue + sum;
  },0);
};
function averageRevenue(array){
  return totalRevenue(array) / array.length;
};
