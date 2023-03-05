function removeFromArray(array, deleteItem) {
    if (!array || !deleteItem) return ;
    
    const index = array.indexOf(deleteItem);
    if (index > -1) {
      array.splice(index, 1);
    }
    
    return array;
  }
  console.log(removeFromArray([1, 2, 3, 4], 3));
  
  
