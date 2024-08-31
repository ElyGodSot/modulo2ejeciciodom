

function submit(){

    let vendedor= document.getElementById("vendedor").value;

    let prod1= parseInt(document.getElementById("prod1").value);
    let prod2= parseInt(document.getElementById("prod2").value);
    let prod3= parseInt(document.getElementById("prod3").value);
    let prod4= parseInt(document.getElementById("prod4").value);

    let juana1= parseInt(document.getElementById("j1").value);
    let juana2= parseInt(document.getElementById("j2").value);
    let juana3= parseInt(document.getElementById("j3").value);
    let juana4= parseInt(document.getElementById("j4").value);
    let juanatotal= parseInt(document.getElementById("jt").value);

    let pedro1= parseInt(document.getElementById("p1").value);
    let pedro2= parseInt(document.getElementById("p2").value);
    let pedro3= parseInt(document.getElementById("p3").value);
    let pedro4= parseInt(document.getElementById("p4").value);
    let pedrototal= parseInt(document.getElementById("pt").value);



if(vendedor=="juana"){

    document.getElementById("j1").value=juana1+prod1;
    document.getElementById("juana1").textContent= document.getElementById("j1").value
    document.getElementById("j2").value=juana2+prod2;
    document.getElementById("juana2").textContent= document.getElementById("j2").value
    document.getElementById("j3").value=juana3+prod3;
    document.getElementById("juana3").textContent= document.getElementById("j3").value
    document.getElementById("j4").value=juana4+prod4;
    document.getElementById("juana4").textContent= document.getElementById("j4").value


    document.getElementById("jt").value=juanatotal+prod1*200+prod2*180+prod3*160+prod4*150
    document.getElementById("juanatotal").textContent= document.getElementById("jt").value;
 

}else if(vendedor==="pedro"){

    document.getElementById("p1").value=pedro1+prod1;
    document.getElementById("pedro1").textContent= document.getElementById("p1").value
    document.getElementById("p2").value=pedro2+prod2;
    document.getElementById("pedro2").textContent= document.getElementById("p2").value
    document.getElementById("p3").value=pedro3+prod3;
    document.getElementById("pedro3").textContent= document.getElementById("p3").value
    document.getElementById("p4").value=pedro4+prod4;
    document.getElementById("pedro4").textContent= document.getElementById("p4").value


    document.getElementById("pt").value=pedrototal+prod1*200+prod2*180+prod3*160+prod4*150
    document.getElementById("pedrototal").textContent= document.getElementById("pt").value;
    
    
}else{
    alert("Error, empleado no dado de alta")
}

}


function ganador(){
    if(document.getElementById("jt").value>document.getElementById("pt").value){
        document.getElementById("ganador").textContent= "Juana es ganadora"
        }else if(document.getElementById("jt").value<document.getElementById("pt").value){
        document.getElementById("ganador").textContent= "Pedro es ganador"
        }else{
        document.getElementById("ganador").textContent= "Empate"
    }
}    