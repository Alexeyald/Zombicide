import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss']
})
export class InputsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  testv = 'hiiiii';

  factorial(n){
    if(n===0) {
    return(1);
    }
    else {
      return(n*this.factorial(n-1));
    }
  }

  prob(k, N, p){  // Probabilidad de que X = k, con X v.a. que sigue una Binomial( N ensayos, probabilidad de acierto p)
    if(k>N || k<0) {return(0)}
    else { 
      return( Math.pow(p, k)*Math.pow(1-p, N-k)*this.factorial(N)/(this.factorial(k)*this.factorial(N-k)) ) 
    }
  }

  prob2(s, N, p, N2, p2){  // Cálculo de la probabilidad de una suma de dos binomiales a partir de la probabilidad de cada una.
    var ans = 0;
    for(var i=0; i<=s; i++) {
      ans += this.prob(i,N,p)*this.prob(s-i,N2,p2)
    }
    return(ans)
  }
  
  acumula(xs){ // Toma una lista numérica xs y devuelve una lista ys tal que ys[i] es la suma de los xs[j] con j<=i.
    var ys = [xs[0]];
    for(var i=1; i< xs.length; i++) {
      ys.push(ys[i-1] + xs[i]);
    }
    return ys;
  }

  calculaProb(n) { // calcula la probabilidad de sacar n o más en una tirada de un solo dado.
    if(n<1 || n>6) { return(0) }
    return (7-n)/6 
  }

}
