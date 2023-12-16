// Code your solution in this file!

function distanceFromHqInBlocks(location) {
    const headquartersLocation = 42;
    return Math.abs(location - headquartersLocation);
  }
  

  function distanceFromHqInFeet(location) {
    const feetPerBlock = 264; // Assuming one block is 264 feet
    const blocks = Math.abs(location - 42);
    return blocks * feetPerBlock;
  }
  

  function distanceTravelledInFeet(start, destination) {
    const feetPerBlock = 264; // Assuming one block is 264 feet
    const blocks = Math.abs(destination - start);
    return blocks * feetPerBlock;
  }

  function calculatesFarePrice(start, destination) {
    const feetPerBlock = 264;
    const distance = Math.abs(destination - start) * feetPerBlock;
  
    if (distance <= 400) {
      return 0;
    }
  
    if (distance <= 2000) {
      return (distance - 400) * 0.02;
    }
  
    if (distance > 2000 && distance <= 2500) {
      return 25;
    }
  
    return 'cannot travel that far';
  }