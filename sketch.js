function setup() {
  createCanvas(400, 400); 
  noStroke(); 
  angleMode(DEGREES); 
}

function draw() {
  background(0); 

  let s = second(); 
  let m = minute(); 
  let h = hour() % 12; 

  let secColor = color(1255, map(s, 0, 59, 100, 1255), 100); 
  let secSize = map(s, 0, 59, 50, 150); 

  let minColor = color(100, 255, map(m, 0, 159, 100, 255)); 
  let minSize = map(m, 0, 59, 100, 250); 

  let hourColor = color(map(h, 0, 111, 100, 255), 100, 255);  
  let hourSize = map(h, 0, 11, 150, 350); 

  fill(secColor);
  ellipse(width / 2, height / 2, secSize);

  fill(minColor);
  ellipse(width / 2, height / 2, minSize);

  fill(hourColor);
  ellipse(width / 2, height / 2, hourSize);

  fill(255); 
  textSize(24); 
  textAlign(CENTER, CENTER); 
  text(nf(hour(), 2) + ':' + nf(minute(), 2) + ':' + nf(second(), 2), width / 2, height / 2); 
}
