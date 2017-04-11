function MyCalc(){
    var elm = document.getElementById('imgexe1');
    var Lat = document.getElementById('Lat').value;
    var Lung = document.getElementById('Lung').value;
    var H = document.getElementById('H').value;
    
    var LatU = document.getElementById('LatU').value;
    var HU = document.getElementById('HU').value;
    
    var LatF = document.getElementById('LatF').value;
    var HF = document.getElementById('HF').value;
    var Pret = document.getElementById('Pret').value;
    
    var Latime = document.getElementById('Latime');
    Latime.style.display="none";
    
    if(document.getElementById('option1').checked){
        
        if(document.getElementById('sel-g').value == "val1"){
             elm.style.backgroundImage="url('img/pag-p-c/0.jpg')";
            /*===IMG===*/
            
            var Lat1 = (Lat/1000);
            var Lung1 = (Lung/1000);
            var H1 = (H/1000);
            var LatU1 = (LatU/1000);
            var HU1 = (HU/1000);
            var LatF1 = (LatF/1000);
            var HF1 = (HF/1000);
            /*===Rezolv===*/
            var A = (Lung1/0.25);
            var A1 = (Math.ceil(A));
            var A2 = (H1/0.065);
            var A3 = (Math.ceil(A2));
            var A4 = (A1*A3);/*=REZ=*/
            /*======================*/
            if(document.getElementById('sel-u').value == "valu1"){
                var B5 = 0;
                if(document.getElementById('sel-f').value == "valf1"){
                    var C5 = 0;
                }
                else
                if(document.getElementById('sel-f').value == "valf2"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*1);
                }
                else
                if(document.getElementById('sel-f').value == "valf3"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*2);
                    
                }
                else
                if(document.getElementById('sel-f').value == "valf4"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*3);                 
                }
                else
                if(document.getElementById('sel-f').value == "valf5"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*4);
                } 
                    var D = (A4-(B5+C5));
                    rezunit.innerHTML=D;
                    var E = (D*0.00203);
                    var E1 = E.toFixed(2);
                    rezcantcar.innerHTML=E1;
                    var F = (E1*Pret);
                    var F1 = F.toFixed(2);
                    rezpret.innerHTML=F1;
            }
            /*===================*/
            else
            if(document.getElementById('sel-u').value == "valu2"){
                    var B = (LatU1/0.25);
                    var B1 = (Math.ceil(B));
                    var B2 = (HU1/0.065);
                    var B3 = (Math.ceil(B2));
                    var B4 = (B1*B3);/*=REZ=*/
                    var B5 = (B4*1);
                
                
                if(document.getElementById('sel-f').value == "valf1"){
                    var C5 = 0;
                }
                else
                if(document.getElementById('sel-f').value == "valf2"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*1);
                }
                else
                if(document.getElementById('sel-f').value == "valf3"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*2);
                    
                }
                else
                if(document.getElementById('sel-f').value == "valf4"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*3);                 
                }
                else
                if(document.getElementById('sel-f').value == "valf5"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*4);
                } 
                    var D = (A4-(B5+C5));
                    rezunit.innerHTML=D;
                    var E = (D*0.00203);
                    var E1 = E.toFixed(2);
                    rezcantcar.innerHTML=E1;
                    var F = (E1*Pret);
                    var F1 = F.toFixed(2);
                    rezpret.innerHTML=F1;
            }
            /*===================*/
            else
            if(document.getElementById('sel-u').value == "valu3"){
                    var B = (LatU1/0.25);
                    var B1 = (Math.ceil(B));
                    var B2 = (HU1/0.065);
                    var B3 = (Math.ceil(B2));
                    var B4 = (B1*B3);/*=REZ=*/
                    var B5 = (B4*2);
                
                
                if(document.getElementById('sel-f').value == "valf1"){
                    var C5 = 0;
                }
                else
                if(document.getElementById('sel-f').value == "valf2"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*1);
                }
                else
                if(document.getElementById('sel-f').value == "valf3"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*2);
                    
                }
                else
                if(document.getElementById('sel-f').value == "valf4"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*3);                 
                }
                else
                if(document.getElementById('sel-f').value == "valf5"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*4);
                } 
                    var D = (A4-(B5+C5));
                    rezunit.innerHTML=D;
                    var E = (D*0.00203);
                    var E1 = E.toFixed(2);
                    rezcantcar.innerHTML=E1;
                    var F = (E1*Pret);
                    var F1 = F.toFixed(2);
                    rezpret.innerHTML=F1;
            }
             /*===================*/
             else
            if(document.getElementById('sel-u').value == "valu4"){
                    var B = (LatU1/0.25);
                    var B1 = (Math.ceil(B));
                    var B2 = (HU1/0.065);
                    var B3 = (Math.ceil(B2));
                    var B4 = (B1*B3);/*=REZ=*/
                    var B5 = (B4*3);
                
                
                if(document.getElementById('sel-f').value == "valf1"){
                    var C5 = 0;
                }
                else
                if(document.getElementById('sel-f').value == "valf2"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*1);
                }
                else
                if(document.getElementById('sel-f').value == "valf3"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*2);
                    
                }
                else
                if(document.getElementById('sel-f').value == "valf4"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*3);                 
                }
                else
                if(document.getElementById('sel-f').value == "valf5"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*4);
                } 
                    var D = (A4-(B5+C5));
                    rezunit.innerHTML=D;
                    var E = (D*0.00203);
                    var E1 = E.toFixed(2);
                    rezcantcar.innerHTML=E1; 
                var F = (E1*Pret);
                    var F1 = F.toFixed(2);
                    rezpret.innerHTML=F1;
                    
            }
             /*===================*/
             else
            if(document.getElementById('sel-u').value == "valu5"){
                    var B = (LatU1/0.25);
                    var B1 = (Math.ceil(B));
                    var B2 = (HU1/0.065);
                    var B3 = (Math.ceil(B2));
                    var B4 = (B1*B3);/*=REZ=*/
                    var B5 = (B4*4);
                
                
                if(document.getElementById('sel-f').value == "valf1"){
                    var C5 = 0;
                }
                else
                if(document.getElementById('sel-f').value == "valf2"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*1);
                }
                else
                if(document.getElementById('sel-f').value == "valf3"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*2);
                    
                }
                else
                if(document.getElementById('sel-f').value == "valf4"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*3);                 
                }
                else
                if(document.getElementById('sel-f').value == "valf5"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*4);
                } 
                    var D = (A4-(B5+C5));
                    rezunit.innerHTML=D;
                    var E = (D*0.00203);
                    var E1 = E.toFixed(2);
                    rezcantcar.innerHTML=E1;  
            }
             /*===================*/   
            
        }
        else
        if(document.getElementById('sel-g').value == "val2"){
             elm.style.backgroundImage="url('img/pag-p-c/1.jpg')";
             /*===IMG===*/
            
            var Lat1 = (Lat/1000);
            var Lung1 = (Lung/1000);
            var H1 = (H/1000);
            var LatU1 = (LatU/1000);
            var HU1 = (HU/1000);
            var LatF1 = (LatF/1000);
            var HF1 = (HF/1000);
            /*===Rezolv===*/
            var A = (Lung1/0.25);
            var A1 = (Math.ceil(A));
            var A2 = (H1/0.065);
            var A3 = (Math.ceil(A2));
            var A4 = (A1*A3);/*=REZ=*/
            /*======================*/
            if(document.getElementById('sel-u').value == "valu1"){
                var B5 = 0;
                if(document.getElementById('sel-f').value == "valf1"){
                    var C5 = 0;
                }
                else
                if(document.getElementById('sel-f').value == "valf2"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*1);
                }
                else
                if(document.getElementById('sel-f').value == "valf3"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*2);
                    
                }
                else
                if(document.getElementById('sel-f').value == "valf4"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*3);                 
                }
                else
                if(document.getElementById('sel-f').value == "valf5"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*4);
                } 
                    var D = (A4-(B5+C5))*2;
                    rezunit.innerHTML=D;
                    var E = (D*0.00203);
                    var E1 = E.toFixed(2);
                    rezcantcar.innerHTML=E1; 
                var F = (E1*Pret);
                    var F1 = F.toFixed(2);
                    rezpret.innerHTML=F1;
            }
            /*===================*/
            else
            if(document.getElementById('sel-u').value == "valu2"){
                    var B = (LatU1/0.25);
                    var B1 = (Math.ceil(B));
                    var B2 = (HU1/0.065);
                    var B3 = (Math.ceil(B2));
                    var B4 = (B1*B3);/*=REZ=*/
                    var B5 = (B4*1);
                
                
                if(document.getElementById('sel-f').value == "valf1"){
                    var C5 = 0;
                }
                else
                if(document.getElementById('sel-f').value == "valf2"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*1);
                }
                else
                if(document.getElementById('sel-f').value == "valf3"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*2);
                    
                }
                else
                if(document.getElementById('sel-f').value == "valf4"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*3);                 
                }
                else
                if(document.getElementById('sel-f').value == "valf5"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*4);
                } 
                    var D = (A4-(B5+C5))*2;
                    rezunit.innerHTML=D;
                    var E = (D*0.00203);
                    var E1 = E.toFixed(2);
                    rezcantcar.innerHTML=E1; 
                var F = (E1*Pret);
                    var F1 = F.toFixed(2);
                    rezpret.innerHTML=F1;
            }
            /*===================*/
            else
            if(document.getElementById('sel-u').value == "valu3"){
                    var B = (LatU1/0.25);
                    var B1 = (Math.ceil(B));
                    var B2 = (HU1/0.065);
                    var B3 = (Math.ceil(B2));
                    var B4 = (B1*B3);/*=REZ=*/
                    var B5 = (B4*2);
                
                
                if(document.getElementById('sel-f').value == "valf1"){
                    var C5 = 0;
                }
                else
                if(document.getElementById('sel-f').value == "valf2"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*1);
                }
                else
                if(document.getElementById('sel-f').value == "valf3"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*2);
                    
                }
                else
                if(document.getElementById('sel-f').value == "valf4"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*3);                 
                }
                else
                if(document.getElementById('sel-f').value == "valf5"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*4);
                } 
                    var D = (A4-(B5+C5))*2;
                    rezunit.innerHTML=D;
                    var E = (D*0.00203);
                    var E1 = E.toFixed(2);
                    rezcantcar.innerHTML=E1; 
                var F = (E1*Pret);
                    var F1 = F.toFixed(2);
                    rezpret.innerHTML=F1;
            }
             /*===================*/
             else
            if(document.getElementById('sel-u').value == "valu4"){
                    var B = (LatU1/0.25);
                    var B1 = (Math.ceil(B));
                    var B2 = (HU1/0.065);
                    var B3 = (Math.ceil(B2));
                    var B4 = (B1*B3);/*=REZ=*/
                    var B5 = (B4*3);
                
                
                if(document.getElementById('sel-f').value == "valf1"){
                    var C5 = 0;
                }
                else
                if(document.getElementById('sel-f').value == "valf2"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*1);
                }
                else
                if(document.getElementById('sel-f').value == "valf3"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*2);
                    
                }
                else
                if(document.getElementById('sel-f').value == "valf4"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*3);                 
                }
                else
                if(document.getElementById('sel-f').value == "valf5"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*4);
                } 
                    var D = (A4-(B5+C5))*2;
                    rezunit.innerHTML=D;
                    var E = (D*0.00203);
                    var E1 = E.toFixed(2);
                    rezcantcar.innerHTML=E1;  
                var F = (E1*Pret);
                    var F1 = F.toFixed(2);
                    rezpret.innerHTML=F1;
            }
             /*===================*/
             else
            if(document.getElementById('sel-u').value == "valu5"){
                    var B = (LatU1/0.25);
                    var B1 = (Math.ceil(B));
                    var B2 = (HU1/0.065);
                    var B3 = (Math.ceil(B2));
                    var B4 = (B1*B3);/*=REZ=*/
                    var B5 = (B4*4);
                
                
                if(document.getElementById('sel-f').value == "valf1"){
                    var C5 = 0;
                }
                else
                if(document.getElementById('sel-f').value == "valf2"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*1);
                }
                else
                if(document.getElementById('sel-f').value == "valf3"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*2);
                    
                }
                else
                if(document.getElementById('sel-f').value == "valf4"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*3);                 
                }
                else
                if(document.getElementById('sel-f').value == "valf5"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*4);
                } 
                    var D = (A4-(B5+C5))*2;
                    rezunit.innerHTML=D;
                    var E = (D*0.00203);
                    var E1 = E.toFixed(2);
                    rezcantcar.innerHTML=E1;  
                var F = (E1*Pret);
                    var F1 = F.toFixed(2);
                    rezpret.innerHTML=F1;
            }
             /*===================*/   
            
        }
        else
        if(document.getElementById('sel-g').value == "val3"){
             elm.style.backgroundImage="url('img/pag-p-c/2.jpg')";
             /*===IMG===*/
            
            var Lat1 = (Lat/1000);
            var Lung1 = (Lung/1000);
            var H1 = (H/1000);
            var LatU1 = (LatU/1000);
            var HU1 = (HU/1000);
            var LatF1 = (LatF/1000);
            var HF1 = (HF/1000);
            /*===Rezolv===*/
            var A = (Lung1/0.25);
            var A1 = (Math.ceil(A));
            var A2 = (H1/0.065);
            var A3 = (Math.ceil(A2));
            var A4 = (A1*A3);/*=REZ=*/
            /*======================*/
            if(document.getElementById('sel-u').value == "valu1"){
                var B5 = 0;
                if(document.getElementById('sel-f').value == "valf1"){
                    var C5 = 0;
                }
                else
                if(document.getElementById('sel-f').value == "valf2"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*1);
                }
                else
                if(document.getElementById('sel-f').value == "valf3"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*2);
                    
                }
                else
                if(document.getElementById('sel-f').value == "valf4"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*3);                 
                }
                else
                if(document.getElementById('sel-f').value == "valf5"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*4);
                } 
                    var D = (A4-(B5+C5))*3;
                    rezunit.innerHTML=D;
                    var E = (D*0.00203);
                    var E1 = E.toFixed(2);
                    rezcantcar.innerHTML=E1; 
                var F = (E1*Pret);
                    var F1 = F.toFixed(2);
                    rezpret.innerHTML=F1;
            }
            /*===================*/
            else
            if(document.getElementById('sel-u').value == "valu2"){
                    var B = (LatU1/0.25);
                    var B1 = (Math.ceil(B));
                    var B2 = (HU1/0.065);
                    var B3 = (Math.ceil(B2));
                    var B4 = (B1*B3);/*=REZ=*/
                    var B5 = (B4*1);
                
                
                if(document.getElementById('sel-f').value == "valf1"){
                    var C5 = 0;
                }
                else
                if(document.getElementById('sel-f').value == "valf2"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*1);
                }
                else
                if(document.getElementById('sel-f').value == "valf3"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*2);
                    
                }
                else
                if(document.getElementById('sel-f').value == "valf4"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*3);                 
                }
                else
                if(document.getElementById('sel-f').value == "valf5"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*4);
                } 
                    var D = (A4-(B5+C5))*3;
                    rezunit.innerHTML=D;
                    var E = (D*0.00203);
                    var E1 = E.toFixed(2);
                    rezcantcar.innerHTML=E1;  
                var F = (E1*Pret);
                    var F1 = F.toFixed(2);
                    rezpret.innerHTML=F1;
            }
            /*===================*/
            else
            if(document.getElementById('sel-u').value == "valu3"){
                    var B = (LatU1/0.25);
                    var B1 = (Math.ceil(B));
                    var B2 = (HU1/0.065);
                    var B3 = (Math.ceil(B2));
                    var B4 = (B1*B3);/*=REZ=*/
                    var B5 = (B4*2);
                
                
                if(document.getElementById('sel-f').value == "valf1"){
                    var C5 = 0;
                }
                else
                if(document.getElementById('sel-f').value == "valf2"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*1);
                }
                else
                if(document.getElementById('sel-f').value == "valf3"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*2);
                    
                }
                else
                if(document.getElementById('sel-f').value == "valf4"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*3);                 
                }
                else
                if(document.getElementById('sel-f').value == "valf5"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*4);
                } 
                    var D = (A4-(B5+C5))*3;
                    rezunit.innerHTML=D;
                    var E = (D*0.00203);
                    var E1 = E.toFixed(2);
                    rezcantcar.innerHTML=E1;  
                var F = (E1*Pret);
                    var F1 = F.toFixed(2);
                    rezpret.innerHTML=F1;
            }
             /*===================*/
             else
            if(document.getElementById('sel-u').value == "valu4"){
                    var B = (LatU1/0.25);
                    var B1 = (Math.ceil(B));
                    var B2 = (HU1/0.065);
                    var B3 = (Math.ceil(B2));
                    var B4 = (B1*B3);/*=REZ=*/
                    var B5 = (B4*3);
                
                
                if(document.getElementById('sel-f').value == "valf1"){
                    var C5 = 0;
                }
                else
                if(document.getElementById('sel-f').value == "valf2"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*1);
                }
                else
                if(document.getElementById('sel-f').value == "valf3"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*2);
                    
                }
                else
                if(document.getElementById('sel-f').value == "valf4"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*3);                 
                }
                else
                if(document.getElementById('sel-f').value == "valf5"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*4);
                } 
                    var D = (A4-(B5+C5))*3;
                    rezunit.innerHTML=D;
                    var E = (D*0.00203);
                    var E1 = E.toFixed(2);
                    rezcantcar.innerHTML=E1; 
                var F = (E1*Pret);
                    var F1 = F.toFixed(2);
                    rezpret.innerHTML=F1;
            }
             /*===================*/
             else
            if(document.getElementById('sel-u').value == "valu5"){
                    var B = (LatU1/0.25);
                    var B1 = (Math.ceil(B));
                    var B2 = (HU1/0.065);
                    var B3 = (Math.ceil(B2));
                    var B4 = (B1*B3);/*=REZ=*/
                    var B5 = (B4*4);
                
                
                if(document.getElementById('sel-f').value == "valf1"){
                    var C5 = 0;
                }
                else
                if(document.getElementById('sel-f').value == "valf2"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*1);
                }
                else
                if(document.getElementById('sel-f').value == "valf3"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*2);
                    
                }
                else
                if(document.getElementById('sel-f').value == "valf4"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*3);                 
                }
                else
                if(document.getElementById('sel-f').value == "valf5"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*4);
                } 
                    var D = (A4-(B5+C5))*3;
                    rezunit.innerHTML=D;
                    var E = (D*0.00203);
                    var E1 = E.toFixed(2);
                    rezcantcar.innerHTML=E1;  
                var F = (E1*Pret);
                    var F1 = F.toFixed(2);
                    rezpret.innerHTML=F1;
            }
             /*===================*/   
        }
        else
        if(document.getElementById('sel-g').value == "val4"){
             elm.style.backgroundImage="url('img/pag-p-c/3.jpg')";
             /*===IMG===*/
            
            var Lat1 = (Lat/1000);
            var Lung1 = (Lung/1000);
            var H1 = (H/1000);
            var LatU1 = (LatU/1000);
            var HU1 = (HU/1000);
            var LatF1 = (LatF/1000);
            var HF1 = (HF/1000);
            /*===Rezolv===*/
            var A = (Lung1/0.25);
            var A1 = (Math.ceil(A));
            var A2 = (H1/0.065);
            var A3 = (Math.ceil(A2));
            var A4 = (A1*A3);/*=REZ=*/
            /*======================*/
            if(document.getElementById('sel-u').value == "valu1"){
                var B5 = 0;
                if(document.getElementById('sel-f').value == "valf1"){
                    var C5 = 0;
                }
                else
                if(document.getElementById('sel-f').value == "valf2"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*1);
                }
                else
                if(document.getElementById('sel-f').value == "valf3"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*2);
                    
                }
                else
                if(document.getElementById('sel-f').value == "valf4"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*3);                 
                }
                else
                if(document.getElementById('sel-f').value == "valf5"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*4);
                } 
                    var D = (A4-(B5+C5))*4;
                    rezunit.innerHTML=D;
                    var E = (D*0.00203);
                    var E1 = E.toFixed(2);
                    rezcantcar.innerHTML=E1; 
                var F = (E1*Pret);
                    var F1 = F.toFixed(2);
                    rezpret.innerHTML=F1;
            }
            /*===================*/
            else
            if(document.getElementById('sel-u').value == "valu2"){
                    var B = (LatU1/0.25);
                    var B1 = (Math.ceil(B));
                    var B2 = (HU1/0.065);
                    var B3 = (Math.ceil(B2));
                    var B4 = (B1*B3);/*=REZ=*/
                    var B5 = (B4*1);
                
                
                if(document.getElementById('sel-f').value == "valf1"){
                    var C5 = 0;
                }
                else
                if(document.getElementById('sel-f').value == "valf2"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*1);
                }
                else
                if(document.getElementById('sel-f').value == "valf3"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*2);
                    
                }
                else
                if(document.getElementById('sel-f').value == "valf4"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*3);                 
                }
                else
                if(document.getElementById('sel-f').value == "valf5"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*4);
                } 
                    var D = (A4-(B5+C5))*4;
                    rezunit.innerHTML=D;
                    var E = (D*0.00203);
                    var E1 = E.toFixed(2);
                    rezcantcar.innerHTML=E1;
                var F = (E1*Pret);
                    var F1 = F.toFixed(2);
                    rezpret.innerHTML=F1;
            }
            /*===================*/
            else
            if(document.getElementById('sel-u').value == "valu3"){
                    var B = (LatU1/0.25);
                    var B1 = (Math.ceil(B));
                    var B2 = (HU1/0.065);
                    var B3 = (Math.ceil(B2));
                    var B4 = (B1*B3);/*=REZ=*/
                    var B5 = (B4*2);
                
                
                if(document.getElementById('sel-f').value == "valf1"){
                    var C5 = 0;
                }
                else
                if(document.getElementById('sel-f').value == "valf2"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*1);
                }
                else
                if(document.getElementById('sel-f').value == "valf3"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*2);
                    
                }
                else
                if(document.getElementById('sel-f').value == "valf4"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*3);                 
                }
                else
                if(document.getElementById('sel-f').value == "valf5"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*4);
                } 
                    var D = (A4-(B5+C5))*4;
                    rezunit.innerHTML=D;
                    var E = (D*0.00203);
                    var E1 = E.toFixed(2);
                    rezcantcar.innerHTML=E1; 
                var F = (E1*Pret);
                    var F1 = F.toFixed(2);
                    rezpret.innerHTML=F1;
            }
             /*===================*/
             else
            if(document.getElementById('sel-u').value == "valu4"){
                    var B = (LatU1/0.25);
                    var B1 = (Math.ceil(B));
                    var B2 = (HU1/0.065);
                    var B3 = (Math.ceil(B2));
                    var B4 = (B1*B3);/*=REZ=*/
                    var B5 = (B4*3);
                
                
                if(document.getElementById('sel-f').value == "valf1"){
                    var C5 = 0;
                }
                else
                if(document.getElementById('sel-f').value == "valf2"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*1);
                }
                else
                if(document.getElementById('sel-f').value == "valf3"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*2);
                    
                }
                else
                if(document.getElementById('sel-f').value == "valf4"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*3);                 
                }
                else
                if(document.getElementById('sel-f').value == "valf5"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*4);
                } 
                    var D = (A4-(B5+C5))*4;
                    rezunit.innerHTML=D;
                    var E = (D*0.00203);
                    var E1 = E.toFixed(2);
                    rezcantcar.innerHTML=E1;  
                var F = (E1*Pret);
                    var F1 = F.toFixed(2);
                    rezpret.innerHTML=F1;
            }
             /*===================*/
             else
            if(document.getElementById('sel-u').value == "valu5"){
                    var B = (LatU1/0.25);
                    var B1 = (Math.ceil(B));
                    var B2 = (HU1/0.065);
                    var B3 = (Math.ceil(B2));
                    var B4 = (B1*B3);/*=REZ=*/
                    var B5 = (B4*4);
                
                
                if(document.getElementById('sel-f').value == "valf1"){
                    var C5 = 0;
                }
                else
                if(document.getElementById('sel-f').value == "valf2"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*1);
                }
                else
                if(document.getElementById('sel-f').value == "valf3"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*2);
                    
                }
                else
                if(document.getElementById('sel-f').value == "valf4"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*3);                 
                }
                else
                if(document.getElementById('sel-f').value == "valf5"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*4);
                } 
                    var D = (A4-(B5+C5))*4;
                    rezunit.innerHTML=D;
                    var E = (D*0.00203);
                    var E1 = E.toFixed(2);
                    rezcantcar.innerHTML=E1;  
                var F = (E1*Pret);
                    var F1 = F.toFixed(2);
                    rezpret.innerHTML=F1;
            }
             /*===================*/   
        }
    }
    
    /*================== 4 PERETI ================================*/
    
    else 
    if(document.getElementById('option2').checked){
    var Latime = document.getElementById('Latime');
        Latime.style.display="block";   
        
        if(document.getElementById('sel-g').value == "val1"){
             elm.style.backgroundImage="url('img/pag-p-c/0.jpg')";
            /*===IMG===*/
            
            var Lat1 = (Lat/1000);
            var Lung1 = (Lung/1000);
            var H1 = (H/1000);
            var LatU1 = (LatU/1000);
            var HU1 = (HU/1000);
            var LatF1 = (LatF/1000);
            var HF1 = (HF/1000);
            /*===Rezolv===*/
            var A = (Lung1*2+Lat1*2);
            var A1 = (Math.ceil(A));
            var A2 = (A1*H1*0.125);
            var A3 = A2.toFixed(2);
            /*======================*/
            if(document.getElementById('sel-u').value == "valu1"){
                var B5 = 0;
                if(document.getElementById('sel-f').value == "valf1"){
                    var C5 = 0;
                }
                else
                if(document.getElementById('sel-f').value == "valf2"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*1);
                }
                else
                if(document.getElementById('sel-f').value == "valf3"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*2);
                    
                }
                else
                if(document.getElementById('sel-f').value == "valf4"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*3);                 
                }
                else
                if(document.getElementById('sel-f').value == "valf5"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*4);
                } 
                    var D = ((A3/0.00203)-(B5+C5));
                    var D1 = (Math.ceil(D));
                    rezunit.innerHTML=D1;
                    var E = (D1*0.00203);
                    var E1 = E.toFixed(2);
                    rezcantcar.innerHTML=E1;
                    var F = (E1*Pret);
                    var F1 = F.toFixed(2);
                    rezpret.innerHTML=F1;
                
            }
            /*===================*/
            else
            if(document.getElementById('sel-u').value == "valu2"){
                    var B = (LatU1/0.25);
                    var B1 = (Math.ceil(B));
                    var B2 = (HU1/0.065);
                    var B3 = (Math.ceil(B2));
                    var B4 = (B1*B3);/*=REZ=*/
                    var B5 = (B4*1);
                
                
                if(document.getElementById('sel-f').value == "valf1"){
                    var C5 = 0;
                }
                else
                if(document.getElementById('sel-f').value == "valf2"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*1);
                }
                else
                if(document.getElementById('sel-f').value == "valf3"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*2);
                    
                }
                else
                if(document.getElementById('sel-f').value == "valf4"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*3);                 
                }
                else
                if(document.getElementById('sel-f').value == "valf5"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*4);
                } 
                    var D = ((A3/0.00203)-(B5+C5));
                    var D1 = (Math.ceil(D));
                    rezunit.innerHTML=D1;
                    var E = (D1*0.00203);
                    var E1 = E.toFixed(2);
                    rezcantcar.innerHTML=E1;
                    var F = (E1*Pret);
                    var F1 = F.toFixed(2);
                    rezpret.innerHTML=F1;
            }
            /*===================*/
            else
            if(document.getElementById('sel-u').value == "valu3"){
                    var B = (LatU1/0.25);
                    var B1 = (Math.ceil(B));
                    var B2 = (HU1/0.065);
                    var B3 = (Math.ceil(B2));
                    var B4 = (B1*B3);/*=REZ=*/
                    var B5 = (B4*2);
                
                
                if(document.getElementById('sel-f').value == "valf1"){
                    var C5 = 0;
                }
                else
                if(document.getElementById('sel-f').value == "valf2"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*1);
                }
                else
                if(document.getElementById('sel-f').value == "valf3"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*2);
                    
                }
                else
                if(document.getElementById('sel-f').value == "valf4"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*3);                 
                }
                else
                if(document.getElementById('sel-f').value == "valf5"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*4);
                } 
                    var D = ((A3/0.00203)-(B5+C5));
                    var D1 = (Math.ceil(D));
                    rezunit.innerHTML=D1;
                    var E = (D1*0.00203);
                    var E1 = E.toFixed(2);
                    rezcantcar.innerHTML=E1;
                    var F = (E1*Pret);
                    var F1 = F.toFixed(2);
                    rezpret.innerHTML=F1;
            }
             /*===================*/
             else
            if(document.getElementById('sel-u').value == "valu4"){
                    var B = (LatU1/0.25);
                    var B1 = (Math.ceil(B));
                    var B2 = (HU1/0.065);
                    var B3 = (Math.ceil(B2));
                    var B4 = (B1*B3);/*=REZ=*/
                    var B5 = (B4*3);
                
                
                if(document.getElementById('sel-f').value == "valf1"){
                    var C5 = 0;
                }
                else
                if(document.getElementById('sel-f').value == "valf2"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*1);
                }
                else
                if(document.getElementById('sel-f').value == "valf3"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*2);
                    
                }
                else
                if(document.getElementById('sel-f').value == "valf4"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*3);                 
                }
                else
                if(document.getElementById('sel-f').value == "valf5"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*4);
                } 
                    var D = ((A3/0.00203)-(B5+C5));
                    var D1 = (Math.ceil(D));
                    rezunit.innerHTML=D1;
                    var E = (D1*0.00203);
                    var E1 = E.toFixed(2);
                    rezcantcar.innerHTML=E1;
                    var F = (E1*Pret);
                    var F1 = F.toFixed(2);
                    rezpret.innerHTML=F1;
                    
            }
             /*===================*/
             else
            if(document.getElementById('sel-u').value == "valu5"){
                    var B = (LatU1/0.25);
                    var B1 = (Math.ceil(B));
                    var B2 = (HU1/0.065);
                    var B3 = (Math.ceil(B2));
                    var B4 = (B1*B3);/*=REZ=*/
                    var B5 = (B4*4);
                
                
                if(document.getElementById('sel-f').value == "valf1"){
                    var C5 = 0;
                }
                else
                if(document.getElementById('sel-f').value == "valf2"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*1);
                }
                else
                if(document.getElementById('sel-f').value == "valf3"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*2);
                    
                }
                else
                if(document.getElementById('sel-f').value == "valf4"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*3);                 
                }
                else
                if(document.getElementById('sel-f').value == "valf5"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*4);
                } 
                    var D = ((A3/0.00203)-(B5+C5));
                    var D1 = (Math.ceil(D));
                    rezunit.innerHTML=D1;
                    var E = (D1*0.00203);
                    var E1 = E.toFixed(2);
                    rezcantcar.innerHTML=E1;
                    var F = (E1*Pret);
                    var F1 = F.toFixed(2);
                    rezpret.innerHTML=F1;
            }
             /*===================*/   
            
        }
        else
        if(document.getElementById('sel-g').value == "val2"){
             elm.style.backgroundImage="url('img/pag-p-c/1.jpg')";
             /*===IMG===*/
            
            var Lat1 = (Lat/1000);
            var Lung1 = (Lung/1000);
            var H1 = (H/1000);
            var LatU1 = (LatU/1000);
            var HU1 = (HU/1000);
            var LatF1 = (LatF/1000);
            var HF1 = (HF/1000);
            /*===Rezolv===*/
            var A = (Lung1*2+Lat1*2);
            var A1 = (Math.ceil(A));
            var A2 = (A1*H1*0.125);
            var A3 = A2.toFixed(2);
            /*======================*/
            if(document.getElementById('sel-u').value == "valu1"){
                var B5 = 0;
                if(document.getElementById('sel-f').value == "valf1"){
                    var C5 = 0;
                }
                else
                if(document.getElementById('sel-f').value == "valf2"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*1);
                }
                else
                if(document.getElementById('sel-f').value == "valf3"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*2);
                    
                }
                else
                if(document.getElementById('sel-f').value == "valf4"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*3);                 
                }
                else
                if(document.getElementById('sel-f').value == "valf5"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*4);
                } 
                    var D = ((A3/0.00203)-(B5+C5))*2;
                    var D1 = (Math.ceil(D));
                    rezunit.innerHTML=D1;
                    var E = (D1*0.00203);
                    var E1 = E.toFixed(2);
                    rezcantcar.innerHTML=E1;
                    var F = (E1*Pret);
                    var F1 = F.toFixed(2);
                    rezpret.innerHTML=F1;
            }
            /*===================*/
            else
            if(document.getElementById('sel-u').value == "valu2"){
                    var B = (LatU1/0.25);
                    var B1 = (Math.ceil(B));
                    var B2 = (HU1/0.065);
                    var B3 = (Math.ceil(B2));
                    var B4 = (B1*B3);/*=REZ=*/
                    var B5 = (B4*1);
                
                
                if(document.getElementById('sel-f').value == "valf1"){
                    var C5 = 0;
                }
                else
                if(document.getElementById('sel-f').value == "valf2"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*1);
                }
                else
                if(document.getElementById('sel-f').value == "valf3"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*2);
                    
                }
                else
                if(document.getElementById('sel-f').value == "valf4"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*3);                 
                }
                else
                if(document.getElementById('sel-f').value == "valf5"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*4);
                } 
                    var D = ((A3/0.00203)-(B5+C5))*2;
                    var D1 = (Math.ceil(D));
                    rezunit.innerHTML=D1;
                    var E = (D1*0.00203);
                    var E1 = E.toFixed(2);
                    rezcantcar.innerHTML=E1;
                    var F = (E1*Pret);
                    var F1 = F.toFixed(2);
                    rezpret.innerHTML=F1;
            }
            /*===================*/
            else
            if(document.getElementById('sel-u').value == "valu3"){
                    var B = (LatU1/0.25);
                    var B1 = (Math.ceil(B));
                    var B2 = (HU1/0.065);
                    var B3 = (Math.ceil(B2));
                    var B4 = (B1*B3);/*=REZ=*/
                    var B5 = (B4*2);
                
                
                if(document.getElementById('sel-f').value == "valf1"){
                    var C5 = 0;
                }
                else
                if(document.getElementById('sel-f').value == "valf2"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*1);
                }
                else
                if(document.getElementById('sel-f').value == "valf3"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*2);
                    
                }
                else
                if(document.getElementById('sel-f').value == "valf4"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*3);                 
                }
                else
                if(document.getElementById('sel-f').value == "valf5"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*4);
                } 
                    var D = ((A3/0.00203)-(B5+C5))*2;
                    var D1 = (Math.ceil(D));
                    rezunit.innerHTML=D1;
                    var E = (D1*0.00203);
                    var E1 = E.toFixed(2);
                    rezcantcar.innerHTML=E1;
                    var F = (E1*Pret);
                    var F1 = F.toFixed(2);
                    rezpret.innerHTML=F1;
            }
             /*===================*/
             else
            if(document.getElementById('sel-u').value == "valu4"){
                    var B = (LatU1/0.25);
                    var B1 = (Math.ceil(B));
                    var B2 = (HU1/0.065);
                    var B3 = (Math.ceil(B2));
                    var B4 = (B1*B3);/*=REZ=*/
                    var B5 = (B4*3);
                
                
                if(document.getElementById('sel-f').value == "valf1"){
                    var C5 = 0;
                }
                else
                if(document.getElementById('sel-f').value == "valf2"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*1);
                }
                else
                if(document.getElementById('sel-f').value == "valf3"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*2);
                    
                }
                else
                if(document.getElementById('sel-f').value == "valf4"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*3);                 
                }
                else
                if(document.getElementById('sel-f').value == "valf5"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*4);
                } 
                    var D = ((A3/0.00203)-(B5+C5))*2;
                    var D1 = (Math.ceil(D));
                    rezunit.innerHTML=D1;
                    var E = (D1*0.00203);
                    var E1 = E.toFixed(2);
                    rezcantcar.innerHTML=E1;
                    var F = (E1*Pret);
                    var F1 = F.toFixed(2);
                    rezpret.innerHTML=F1;;
            }
             /*===================*/
             else
            if(document.getElementById('sel-u').value == "valu5"){
                    var B = (LatU1/0.25);
                    var B1 = (Math.ceil(B));
                    var B2 = (HU1/0.065);
                    var B3 = (Math.ceil(B2));
                    var B4 = (B1*B3);/*=REZ=*/
                    var B5 = (B4*4);
                
                
                if(document.getElementById('sel-f').value == "valf1"){
                    var C5 = 0;
                }
                else
                if(document.getElementById('sel-f').value == "valf2"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*1);
                }
                else
                if(document.getElementById('sel-f').value == "valf3"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*2);
                    
                }
                else
                if(document.getElementById('sel-f').value == "valf4"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*3);                 
                }
                else
                if(document.getElementById('sel-f').value == "valf5"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*4);
                } 
                    var D = ((A3/0.00203)-(B5+C5))*2;
                    var D1 = (Math.ceil(D));
                    rezunit.innerHTML=D1;
                    var E = (D1*0.00203);
                    var E1 = E.toFixed(2);
                    rezcantcar.innerHTML=E1;
                    var F = (E1*Pret);
                    var F1 = F.toFixed(2);
                    rezpret.innerHTML=F1; 
            }
             /*===================*/   
            
        }
        else
        if(document.getElementById('sel-g').value == "val3"){
             elm.style.backgroundImage="url('img/pag-p-c/2.jpg')";
             /*===IMG===*/
            
            var Lat1 = (Lat/1000);
            var Lung1 = (Lung/1000);
            var H1 = (H/1000);
            var LatU1 = (LatU/1000);
            var HU1 = (HU/1000);
            var LatF1 = (LatF/1000);
            var HF1 = (HF/1000);
            /*===Rezolv===*/
            var A = (Lung1*2+Lat1*2);
            var A1 = (Math.ceil(A));
            var A2 = (A1*H1*0.125);
            var A3 = A2.toFixed(2);
            /*======================*/
            if(document.getElementById('sel-u').value == "valu1"){
                var B5 = 0;
                if(document.getElementById('sel-f').value == "valf1"){
                    var C5 = 0;
                }
                else
                if(document.getElementById('sel-f').value == "valf2"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*1);
                }
                else
                if(document.getElementById('sel-f').value == "valf3"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*2);
                    
                }
                else
                if(document.getElementById('sel-f').value == "valf4"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*3);                 
                }
                else
                if(document.getElementById('sel-f').value == "valf5"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*4);
                } 
                    var D = ((A3/0.00203)-(B5+C5))*3;
                    var D1 = (Math.ceil(D));
                    rezunit.innerHTML=D1;
                    var E = (D1*0.00203);
                    var E1 = E.toFixed(2);
                    rezcantcar.innerHTML=E1;
                    var F = (E1*Pret);
                    var F1 = F.toFixed(2);
                    rezpret.innerHTML=F1;
            }
            /*===================*/
            else
            if(document.getElementById('sel-u').value == "valu2"){
                    var B = (LatU1/0.25);
                    var B1 = (Math.ceil(B));
                    var B2 = (HU1/0.065);
                    var B3 = (Math.ceil(B2));
                    var B4 = (B1*B3);/*=REZ=*/
                    var B5 = (B4*1);
                
                
                if(document.getElementById('sel-f').value == "valf1"){
                    var C5 = 0;
                }
                else
                if(document.getElementById('sel-f').value == "valf2"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*1);
                }
                else
                if(document.getElementById('sel-f').value == "valf3"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*2);
                    
                }
                else
                if(document.getElementById('sel-f').value == "valf4"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*3);                 
                }
                else
                if(document.getElementById('sel-f').value == "valf5"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*4);
                } 
                    var D = ((A3/0.00203)-(B5+C5))*3;
                    var D1 = (Math.ceil(D));
                    rezunit.innerHTML=D1;
                    var E = (D1*0.00203);
                    var E1 = E.toFixed(2);
                    rezcantcar.innerHTML=E1;
                    var F = (E1*Pret);
                    var F1 = F.toFixed(2);
                    rezpret.innerHTML=F1;
            }
            /*===================*/
            else
            if(document.getElementById('sel-u').value == "valu3"){
                    var B = (LatU1/0.25);
                    var B1 = (Math.ceil(B));
                    var B2 = (HU1/0.065);
                    var B3 = (Math.ceil(B2));
                    var B4 = (B1*B3);/*=REZ=*/
                    var B5 = (B4*2);
                
                
                if(document.getElementById('sel-f').value == "valf1"){
                    var C5 = 0;
                }
                else
                if(document.getElementById('sel-f').value == "valf2"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*1);
                }
                else
                if(document.getElementById('sel-f').value == "valf3"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*2);
                    
                }
                else
                if(document.getElementById('sel-f').value == "valf4"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*3);                 
                }
                else
                if(document.getElementById('sel-f').value == "valf5"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*4);
                } 
                    var D = ((A3/0.00203)-(B5+C5))*3;
                    var D1 = (Math.ceil(D));
                    rezunit.innerHTML=D1;
                    var E = (D1*0.00203);
                    var E1 = E.toFixed(2);
                    rezcantcar.innerHTML=E1;
                    var F = (E1*Pret);
                    var F1 = F.toFixed(2);
                    rezpret.innerHTML=F1;
            }
             /*===================*/
             else
            if(document.getElementById('sel-u').value == "valu4"){
                    var B = (LatU1/0.25);
                    var B1 = (Math.ceil(B));
                    var B2 = (HU1/0.065);
                    var B3 = (Math.ceil(B2));
                    var B4 = (B1*B3);/*=REZ=*/
                    var B5 = (B4*3);
                
                
                if(document.getElementById('sel-f').value == "valf1"){
                    var C5 = 0;
                }
                else
                if(document.getElementById('sel-f').value == "valf2"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*1);
                }
                else
                if(document.getElementById('sel-f').value == "valf3"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*2);
                    
                }
                else
                if(document.getElementById('sel-f').value == "valf4"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*3);                 
                }
                else
                if(document.getElementById('sel-f').value == "valf5"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*4);
                } 
                    var D = ((A3/0.00203)-(B5+C5))*3;
                    var D1 = (Math.ceil(D));
                    rezunit.innerHTML=D1;
                    var E = (D1*0.00203);
                    var E1 = E.toFixed(2);
                    rezcantcar.innerHTML=E1;
                    var F = (E1*Pret);
                    var F1 = F.toFixed(2);
                    rezpret.innerHTML=F1;
            }
             /*===================*/
             else
            if(document.getElementById('sel-u').value == "valu5"){
                    var B = (LatU1/0.25);
                    var B1 = (Math.ceil(B));
                    var B2 = (HU1/0.065);
                    var B3 = (Math.ceil(B2));
                    var B4 = (B1*B3);/*=REZ=*/
                    var B5 = (B4*4);
                
                
                if(document.getElementById('sel-f').value == "valf1"){
                    var C5 = 0;
                }
                else
                if(document.getElementById('sel-f').value == "valf2"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*1);
                }
                else
                if(document.getElementById('sel-f').value == "valf3"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*2);
                    
                }
                else
                if(document.getElementById('sel-f').value == "valf4"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*3);                 
                }
                else
                if(document.getElementById('sel-f').value == "valf5"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*4);
                } 
                    var D = ((A3/0.00203)-(B5+C5))*3;
                    var D1 = (Math.ceil(D));
                    rezunit.innerHTML=D1;
                    var E = (D1*0.00203);
                    var E1 = E.toFixed(2);
                    rezcantcar.innerHTML=E1;
                    var F = (E1*Pret);
                    var F1 = F.toFixed(2);
                    rezpret.innerHTML=F1;
            }
             /*===================*/   
        }
        else
        if(document.getElementById('sel-g').value == "val4"){
             elm.style.backgroundImage="url('img/pag-p-c/3.jpg')";
             /*===IMG===*/
            
            var Lat1 = (Lat/1000);
            var Lung1 = (Lung/1000);
            var H1 = (H/1000);
            var LatU1 = (LatU/1000);
            var HU1 = (HU/1000);
            var LatF1 = (LatF/1000);
            var HF1 = (HF/1000);
            /*===Rezolv===*/
            var A = (Lung1*2+Lat1*2);
            var A1 = (Math.ceil(A));
            var A2 = (A1*H1*0.125);
            var A3 = A2.toFixed(2);
            /*======================*/
            if(document.getElementById('sel-u').value == "valu1"){
                var B5 = 0;
                if(document.getElementById('sel-f').value == "valf1"){
                    var C5 = 0;
                }
                else
                if(document.getElementById('sel-f').value == "valf2"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*1);
                }
                else
                if(document.getElementById('sel-f').value == "valf3"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*2);
                    
                }
                else
                if(document.getElementById('sel-f').value == "valf4"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*3);                 
                }
                else
                if(document.getElementById('sel-f').value == "valf5"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*4);
                } 
                    var D = ((A3/0.00203)-(B5+C5))*4;
                    var D1 = (Math.ceil(D));
                    rezunit.innerHTML=D1;
                    var E = (D1*0.00203);
                    var E1 = E.toFixed(2);
                    rezcantcar.innerHTML=E1;
                    var F = (E1*Pret);
                    var F1 = F.toFixed(2);
                    rezpret.innerHTML=F1;
            }
            /*===================*/
            else
            if(document.getElementById('sel-u').value == "valu2"){
                    var B = (LatU1/0.25);
                    var B1 = (Math.ceil(B));
                    var B2 = (HU1/0.065);
                    var B3 = (Math.ceil(B2));
                    var B4 = (B1*B3);/*=REZ=*/
                    var B5 = (B4*1);
                
                
                if(document.getElementById('sel-f').value == "valf1"){
                    var C5 = 0;
                }
                else
                if(document.getElementById('sel-f').value == "valf2"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*1);
                }
                else
                if(document.getElementById('sel-f').value == "valf3"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*2);
                    
                }
                else
                if(document.getElementById('sel-f').value == "valf4"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*3);                 
                }
                else
                if(document.getElementById('sel-f').value == "valf5"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*4);
                } 
                    var D = ((A3/0.00203)-(B5+C5))*4;
                    var D1 = (Math.ceil(D));
                    rezunit.innerHTML=D1;
                    var E = (D1*0.00203);
                    var E1 = E.toFixed(2);
                    rezcantcar.innerHTML=E1;
                    var F = (E1*Pret);
                    var F1 = F.toFixed(2);
                    rezpret.innerHTML=F1;
            }
            /*===================*/
            else
            if(document.getElementById('sel-u').value == "valu3"){
                    var B = (LatU1/0.25);
                    var B1 = (Math.ceil(B));
                    var B2 = (HU1/0.065);
                    var B3 = (Math.ceil(B2));
                    var B4 = (B1*B3);/*=REZ=*/
                    var B5 = (B4*2);
                
                
                if(document.getElementById('sel-f').value == "valf1"){
                    var C5 = 0;
                }
                else
                if(document.getElementById('sel-f').value == "valf2"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*1);
                }
                else
                if(document.getElementById('sel-f').value == "valf3"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*2);
                    
                }
                else
                if(document.getElementById('sel-f').value == "valf4"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*3);                 
                }
                else
                if(document.getElementById('sel-f').value == "valf5"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*4);
                } 
                    var D = ((A3/0.00203)-(B5+C5))*4;
                    var D1 = (Math.ceil(D));
                    rezunit.innerHTML=D1;
                    var E = (D1*0.00203);
                    var E1 = E.toFixed(2);
                    rezcantcar.innerHTML=E1;
                    var F = (E1*Pret);
                    var F1 = F.toFixed(2);
                    rezpret.innerHTML=F1;
            }
             /*===================*/
             else
            if(document.getElementById('sel-u').value == "valu4"){
                    var B = (LatU1/0.25);
                    var B1 = (Math.ceil(B));
                    var B2 = (HU1/0.065);
                    var B3 = (Math.ceil(B2));
                    var B4 = (B1*B3);/*=REZ=*/
                    var B5 = (B4*3);
                
                
                if(document.getElementById('sel-f').value == "valf1"){
                    var C5 = 0;
                }
                else
                if(document.getElementById('sel-f').value == "valf2"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*1);
                }
                else
                if(document.getElementById('sel-f').value == "valf3"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*2);
                    
                }
                else
                if(document.getElementById('sel-f').value == "valf4"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*3);                 
                }
                else
                if(document.getElementById('sel-f').value == "valf5"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*4);
                } 
                    var D = ((A3/0.00203)-(B5+C5))*4;
                    var D1 = (Math.ceil(D));
                    rezunit.innerHTML=D1;
                    var E = (D1*0.00203);
                    var E1 = E.toFixed(2);
                    rezcantcar.innerHTML=E1;
                    var F = (E1*Pret);
                    var F1 = F.toFixed(2);
                    rezpret.innerHTML=F1;
            }
             /*===================*/
             else
            if(document.getElementById('sel-u').value == "valu5"){
                    var B = (LatU1/0.25);
                    var B1 = (Math.ceil(B));
                    var B2 = (HU1/0.065);
                    var B3 = (Math.ceil(B2));
                    var B4 = (B1*B3);/*=REZ=*/
                    var B5 = (B4*4);
                
                
                if(document.getElementById('sel-f').value == "valf1"){
                    var C5 = 0;
                }
                else
                if(document.getElementById('sel-f').value == "valf2"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*1);
                }
                else
                if(document.getElementById('sel-f').value == "valf3"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*2);
                    
                }
                else
                if(document.getElementById('sel-f').value == "valf4"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*3);                 
                }
                else
                if(document.getElementById('sel-f').value == "valf5"){
                    var C = (LatF1/0.25);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.065);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*4);
                } 
                    var D = ((A3/0.00203)-(B5+C5))*4;
                    var D1 = (Math.ceil(D));
                    rezunit.innerHTML=D1;
                    var E = (D1*0.00203);
                    var E1 = E.toFixed(2);
                    rezcantcar.innerHTML=E1;
                    var F = (E1*Pret);
                    var F1 = F.toFixed(2);
                    rezpret.innerHTML=F1;
            }
             /*===================*/   
        }
        
    }
    
    var containrezult = document.getElementById('contain-rezult');
    containrezult.style.display="block";
    
}
    
    var btnrezult=document.getElementById('btnrezult');
    btnrezult.onclick=MyCalc;