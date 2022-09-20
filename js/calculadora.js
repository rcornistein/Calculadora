var valorVisor = "0";
var valorCalculo=""
var acumulado = "";
var numeroA;
var numeroB;
var memoria=0;



function boton(value,name,id) {
    
    var auxiliar =valorVisor /*document.getElementById("result").innerText*/; // auxiliar recebe o valor pressionado no visor
    var auxiliar_calculo= valorCalculo;
    // console.log(valorCalculo);
     
  //window.alert(name);

    if(auxiliar=="0")  {
       //document.getElementById("result").textContent  =  name; // visor recebe o valor de auxiliar e concatena com dado
       

       valorVisor=id;
       valorCalculo=name;
  
    }
   
    if(auxiliar!=="0")  {
    
        //document.getElementById("result").textContent  = auxiliar+name ;

       
               
            valorVisor=auxiliar+id;
            valorCalculo=auxiliar_calculo+name;

      };


    


document.getElementById("previa").textContent = valorVisor;
     console.log(valorCalculo );
}



function reset() {
    // limpar visor
    document.getElementById('result').innerText = '0';
    document.getElementById("previa").innerText='';
    valorVisor = "0";
    valorCalculo="";
    memoria=0;
    acumulado='';
}
function limpiar(){
    document.getElementById('result').innerText = '0';
    memoria=0;
   
    
}

function btn_igual(){
 
    calcular();
}

function memoria(){
 
    boton(valorCalculo,valorCalculo,valorCalculo);
    
}

function potencia(a,b){

    return( Math.pow(b,a));

}

function raiz_n(a,b){

    return( Math.pow(b,1/a));

}

function factorialize(num) {
  var result = num;
  if(!Number.isInteger(num)){

     alert("Ingresar un número entero");
     return("Error");
     };
  
  if (num === 0 || num === 1) 
    return 1; 
  while (num > 1) { 
    num--;
    result *= num;
  }
  return result;
};

function calcular() {

    var total = 0;
    //var ultimoTotal = 0;
    console.log(valorCalculo);
/* usando eval para incorporar paréntesis a la calculadora */
  console.log(valorCalculo);
  var total = eval(valorCalculo); 
  //ultimoTotal = total;
  //acumulado=total.toString;
  console.log(total);
  reset();
  document.getElementById('result').innerText = total;
  document.getElementById('previa').innerText = total;
  valorVisor = total;
  valorCalculo=total;
  memoria=total;


}

    