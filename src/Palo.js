var diamante = <img src= "./diamante.png" alt = "diamante"/>
var corazon = <img src= "./corazon.png" alt = "corazon"/>
var trebol = <img src= "./trebol.png" alt = "trebol"/>
var pica = <img src= "./pica.png" alt = "pica"/>

  function numPal () {

    var signo = [];

    signo.push(Math.floor(Math.random()*5))
    
   
       
       if(signo>0){return(signo)}
      
       
       else {return(1)}
       
      
}

    var elPalo = numPal()
function paloFinal () {

    if (elPalo==1) {return (corazon)}
    
    else if (elPalo==2) {return (diamante)}
    else if (elPalo==3) {return (pica)}
    else if (elPalo==4) {return (trebol)}


    
}
// function imgPalos (){

//     if (elPalo=1) {
//        return  {diamante}
//     }
//     if (elPalo=2) {
//         return  {corazon}
//      }
// }

function Palo (){

    return(
        <>
<div className='palo'>

{paloFinal()}

</div>

</>
    )
}


    export default Palo