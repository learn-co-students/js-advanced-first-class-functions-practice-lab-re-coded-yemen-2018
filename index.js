// Code your solution in this file!
function logDriverNames(array){
  array.forEach(function (element){
    console.log(element.name);
  })
}

function logDriversByHometown(array, arg){
  array.forEach(function (element){
    if (element.hometown === arg){
      console.log(element.name);
    }
  })
  
}

function driversByRevenue(array){
  let newArray = [];
  
  array.forEach(function (element){
    newArray.push(element)
  })
  
  newArray.sort(function (a,b){
    return a.revenue - b.revenue;
  });
  return newArray;
    
}

function driversByName(array){
  let newArray = [];
  
  array.forEach(function (element){
    newArray.push(element)
  })
  
  newArray.sort(function (a,b){
    return a.name.localeCompare(b.name);
  });
  return newArray;
    
}

function totalRevenue(array){
  const totalRev = function(agg, element){
    return agg + element.revenue;
    
  };
  return array.reduce(totalRev,0);
  
  
}

function averageRevenue(array){
  let count = array.length;
  const totalRev = function(agg, element,i){
    return (agg + element.revenue);
    
  };
  return array.reduce(totalRev,0)/count;
  

}








