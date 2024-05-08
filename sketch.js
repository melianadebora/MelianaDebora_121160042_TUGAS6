// dP/dt = rP(1 -P/M) = rP - (rP/M) P
//dengan r merupakan konstanta pertumbuhan
//dan M adalah carrying capacity

let t = []; //dari solve()
//Variabel tak bebas
let P1 = []; //dari solve()
let P2 = []; //dari solve()
//Parameter model
let a;
let b;
let c;
let d;
//Kondisi Awal
let P10;
let P20;

let tMax = 100;
let dt = 0.05;

let grafik; //chart JS

function setup() {
  createCanvas(100, 100);    
  P10 = createInput("20"); // input default adalah 0.8
  P10.position(10, 230); 
  P20 = createInput("40"); // input default adalah 0.8
  P20.position(179, 230);
  a = createSlider(0.1, 2, 0.4, 0.01) //min, max, value, step
  a.position(10, 280);
  b = 0.01
  c = 0.1
  d = 0.5
  let p = createP("Kondisi Awal") //teks biasa
  p.style('font-size', '14px');
  p.position(10,200);
  let q = createP("Parameter a") //teks biasa
  q.style('font-size', '14px');
  q.position(10, 250);
  solve();
  grafik = new Chart(this, config);  
  P10.changed(solve);
  P20.changed(solve);
  a.changed(solve);
}
function draw() {
  grafik.update(); 
}
function solve(){
  P1[0] = float(P10.value());
  P2[0] = float(P20.value());
  t[0] = 0;
  as = float(a.value());
  let iterNum = int(tMax/dt);
  for (let i=0; i < iterNum; i++){
    P1[i+1] = P1[i] + dt * as * P1[i] - dt*b*P1[i]*P2[i];
    P2[i+1] = P2[i] + dt * c* P1[i+1]*P2[i] - dt*d*P2[i];
    t[i+1] = round((i+1)*dt,3);
  }
}