//import funNum from './functions'


function funNum () {

    var numero = [];

    numero.push(Math.floor(Math.random()*13))
    if(numero>0){return (numero)}
  else {return[1]}

    
       
}




    

function Numero () {

   return (
<div className="number">  
{funNum()}
</div>

   )
    
       
}




    export default Numero