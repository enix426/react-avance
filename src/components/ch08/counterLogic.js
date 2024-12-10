function CounterLogic(initialCount = 0) {
    let count = initialCount;
  
    return {
      increment: () => count += 1,
      decrement: () => count -= 1,
      reset: () => count = 0,
      getCount: () => count,
    };
  }
  
  export default CounterLogic;
  