const a = [];
for(let i=0; i<45; i++) { 
  const base = (i/44)*100; 
  const spread = 25; 
  const x = base + (Math.random()-0.5)*spread; 
  const y = base + (Math.random()-0.5)*spread; 
  if(x>=0&&x<=100&&y>=0&&y<=100) {
    a.push({
      x: Math.round(x*10)/10, 
      y: Math.round(y*10)/10, 
      delay: Math.round(Math.random()*20)/10, 
      size: Math.round((1.0+Math.random()*1.0)*10)/10 // small nodes 1.0 to 2.0
    }); 
  }
} 
console.log(JSON.stringify(a, null, 2).replace(/\"([a-zA-Z]+)\":/g, '$1:'));
