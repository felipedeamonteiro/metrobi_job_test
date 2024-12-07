async function writeWithExponentialDelay(arr) {
  const startTime = Date.now();
  
  const promises = arr.map((item, index) => {
    const delay = Math.pow(2, index) * 1000; // 1s, 2s, 4s, 8s...
    
    return new Promise(resolve => {
      setTimeout(() => {
        const elapsedTime = (Date.now() - startTime) / 1000;
        console.log(`${item} (at ${elapsedTime.toFixed(1)}s)`);
        resolve();
      }, delay);
    });
  });

  await Promise.all(promises);
}

console.log('Starting...');
writeWithExponentialDelay(['a', 'b', 'c', 'd']);
