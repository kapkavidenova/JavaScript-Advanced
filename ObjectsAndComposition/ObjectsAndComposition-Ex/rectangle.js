function solve(width,hight,color){
     return {
         width: width,
         hight: hight,
         color: color[0].toUpperCase()+color.slice(1),

         calcArea(){
             return this.width * this.hight;
     }
     };
}

solve();