function MyCalc(){
    var elm = document.getElementById('imgexe');
    var elm1 = document.getElementById('imgexe1');
    var Lat = document.getElementById('Lat').value;
    var Lung = document.getElementById('Lung').value;
    var H = document.getElementById('H').value;
    
    var LatU = document.getElementById('LatU').value;
    var HU = document.getElementById('HU').value;
    
    var LatF = document.getElementById('LatF').value;
    var HF = document.getElementById('HF').value;
    var Pret = document.getElementById('Pret').value;
    
    var Latime = document.getElementById('Latime');
    
       
        
        if(document.getElementById('sel-g').value == "val1"){
            
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
            var A2 = (A1*H1*0.2);
            var A3 = A2.toFixed(2);
            /*======================*/
            if(document.getElementById('sel-u').value == "valu1"){
                var B5 = 0;
                if(document.getElementById('sel-f').value == "valf1"){
                    var C5 = 0;
                }
                else
                if(document.getElementById('sel-f').value == "valf2"){
                    var C = (LatF1/0.6);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.3);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*1);
                }
                else
                if(document.getElementById('sel-f').value == "valf3"){
                    var C = (LatF1/0.6);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.3);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*2);
                    
                }
                else
                if(document.getElementById('sel-f').value == "valf4"){
                    var C = (LatF1/0.6);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.3);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*3);                 
                }
                else
                if(document.getElementById('sel-f').value == "valf5"){
                    var C = (LatF1/0.6);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.3);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*4);
                } 
                    var D = ((A3/0.036)-(B5+C5));
                    var D1 = (Math.ceil(D));
                    rezunit.innerHTML=D1;
                    var E = (D1*0.036);
                    var E1 = E.toFixed(2);
                    rezcantcar.innerHTML=E1;
                    var F = (E1*Pret);
                    var F1 = F.toFixed(2);
                    rezpret.innerHTML=F1;
                
            }
            /*===================*/
            else
            if(document.getElementById('sel-u').value == "valu2"){
                    var B = (LatU1/0.6);
                    var B1 = (Math.ceil(B));
                    var B2 = (HU1/0.3);
                    var B3 = (Math.ceil(B2));
                    var B4 = (B1*B3);/*=REZ=*/
                    var B5 = (B4*1);
                
                
                if(document.getElementById('sel-f').value == "valf1"){
                    var C5 = 0;
                }
                else
                if(document.getElementById('sel-f').value == "valf2"){
                    var C = (LatF1/0.39);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.19);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*1);
                }
                else
                if(document.getElementById('sel-f').value == "valf3"){
                    var C = (LatF1/0.6);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.3);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*2);
                    
                }
                else
                if(document.getElementById('sel-f').value == "valf4"){
                    var C = (LatF1/0.6);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.6);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*3);                 
                }
                else
                if(document.getElementById('sel-f').value == "valf5"){
                    var C = (LatF1/0.6);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.3);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*4);
                } 
                    var D = ((A3/0.036)-(B5+C5));
                    var D1 = (Math.ceil(D));
                    rezunit.innerHTML=D1;
                    var E = (D1*0.036);
                    var E1 = E.toFixed(2);
                    rezcantcar.innerHTML=E1;
                    var F = (E1*Pret);
                    var F1 = F.toFixed(2);
                    rezpret.innerHTML=F1;
            }
            /*===================*/
            else
            if(document.getElementById('sel-u').value == "valu3"){
                    var B = (LatU1/0.6);
                    var B1 = (Math.ceil(B));
                    var B2 = (HU1/0.3);
                    var B3 = (Math.ceil(B2));
                    var B4 = (B1*B3);/*=REZ=*/
                    var B5 = (B4*2);
                
                
                if(document.getElementById('sel-f').value == "valf1"){
                    var C5 = 0;
                }
                else
                if(document.getElementById('sel-f').value == "valf2"){
                    var C = (LatF1/0.6);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.3);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*1);
                }
                else
                if(document.getElementById('sel-f').value == "valf3"){
                    var C = (LatF1/0.6);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.3);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*2);
                    
                }
                else
                if(document.getElementById('sel-f').value == "valf4"){
                    var C = (LatF1/0.6);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.3);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*3);                 
                }
                else
                if(document.getElementById('sel-f').value == "valf5"){
                    var C = (LatF1/0.6);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.3);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*4);
                } 
                    var D = ((A3/0.036)-(B5+C5));
                    var D1 = (Math.ceil(D));
                    rezunit.innerHTML=D1;
                    var E = (D1*0.036);
                    var E1 = E.toFixed(2);
                    rezcantcar.innerHTML=E1;
                    var F = (E1*Pret);
                    var F1 = F.toFixed(2);
                    rezpret.innerHTML=F1;
            }
             /*===================*/
             else
            if(document.getElementById('sel-u').value == "valu4"){
                    var B = (LatU1/0.6);
                    var B1 = (Math.ceil(B));
                    var B2 = (HU1/0.3);
                    var B3 = (Math.ceil(B2));
                    var B4 = (B1*B3);/*=REZ=*/
                    var B5 = (B4*3);
                
                
                if(document.getElementById('sel-f').value == "valf1"){
                    var C5 = 0;
                }
                else
                if(document.getElementById('sel-f').value == "valf2"){
                    var C = (LatF1/0.6);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.3);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*1);
                }
                else
                if(document.getElementById('sel-f').value == "valf3"){
                    var C = (LatF1/0.6);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.3);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*2);
                    
                }
                else
                if(document.getElementById('sel-f').value == "valf4"){
                    var C = (LatF1/0.39);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.19);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*3);                 
                }
                else
                if(document.getElementById('sel-f').value == "valf5"){
                    var C = (LatF1/0.6);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.3);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*4);
                } 
                    var D = ((A3/0.036)-(B5+C5));
                    var D1 = (Math.ceil(D));
                    rezunit.innerHTML=D1;
                    var E = (D1*0.036);
                    var E1 = E.toFixed(2);
                    rezcantcar.innerHTML=E1;
                    var F = (E1*Pret);
                    var F1 = F.toFixed(2);
                    rezpret.innerHTML=F1;
                    
            }
             /*===================*/
             else
            if(document.getElementById('sel-u').value == "valu5"){
                    var B = (LatU1/0.6);
                    var B1 = (Math.ceil(B));
                    var B2 = (HU1/0.3);
                    var B3 = (Math.ceil(B2));
                    var B4 = (B1*B3);/*=REZ=*/
                    var B5 = (B4*4);
                
                
                if(document.getElementById('sel-f').value == "valf1"){
                    var C5 = 0;
                }
                else
                if(document.getElementById('sel-f').value == "valf2"){
                    var C = (LatF1/0.6);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.3);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*1);
                }
                else
                if(document.getElementById('sel-f').value == "valf3"){
                    var C = (LatF1/0.6);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.3);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*2);
                    
                }
                else
                if(document.getElementById('sel-f').value == "valf4"){
                    var C = (LatF1/0.6);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.3);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*3);                 
                }
                else
                if(document.getElementById('sel-f').value == "valf5"){
                    var C = (LatF1/0.6);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.3);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*4);
                } 
                    var D = ((A3/0.036)-(B5+C5));
                    var D1 = (Math.ceil(D));
                    rezunit.innerHTML=D1;
                    var E = (D1*0.036);
                    var E1 = E.toFixed(2);
                    rezcantcar.innerHTML=E1;
                    var F = (E1*Pret);
                    var F1 = F.toFixed(2);
                    rezpret.innerHTML=F1;
            }
             /*==================GATA=*/   
            
        }
    /*GATA*/
        else
        if(document.getElementById('sel-g').value == "val2"){
             
            
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
            var A2 = (A1*H1*0.25);
            var A3 = A2.toFixed(2);
            /*======================*/
            if(document.getElementById('sel-u').value == "valu1"){
                var B5 = 0;
                if(document.getElementById('sel-f').value == "valf1"){
                    var C5 = 0;
                }
                else
                if(document.getElementById('sel-f').value == "valf2"){
                    var C = (LatF1/0.6);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.3);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*1);
                }
                else
                if(document.getElementById('sel-f').value == "valf3"){
                    var C = (LatF1/0.6);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.3);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*2);
                    
                }
                else
                if(document.getElementById('sel-f').value == "valf4"){
                    var C = (LatF1/0.6);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.3);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*3);                 
                }
                else
                if(document.getElementById('sel-f').value == "valf5"){
                    var C = (LatF1/0.6);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.3);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*4);
                } 
                    var D = ((A3/0.045)-(B5+C5));
                    var D1 = (Math.ceil(D));
                    rezunit.innerHTML=D1;
                    var E = (D1*0.045);
                    var E1 = E.toFixed(2);
                    rezcantcar.innerHTML=E1;
                    var F = (E1*Pret);
                    var F1 = F.toFixed(2);
                    rezpret.innerHTML=F1;
            }
            /*===================*/
            else
            if(document.getElementById('sel-u').value == "valu2"){
                    var B = (LatU1/0.6);
                    var B1 = (Math.ceil(B));
                    var B2 = (HU1/0.3);
                    var B3 = (Math.ceil(B2));
                    var B4 = (B1*B3);/*=REZ=*/
                    var B5 = (B4*1);
                
                
                if(document.getElementById('sel-f').value == "valf1"){
                    var C5 = 0;
                }
                else
                if(document.getElementById('sel-f').value == "valf2"){
                    var C = (LatF1/0.6);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.3);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*1);
                }
                else
                if(document.getElementById('sel-f').value == "valf3"){
                    var C = (LatF1/0.6);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.3);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*2);
                    
                }
                else
                if(document.getElementById('sel-f').value == "valf4"){
                    var C = (LatF1/0.6);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.3);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*3);                 
                }
                else
                if(document.getElementById('sel-f').value == "valf5"){
                    var C = (LatF1/0.6);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.3);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*4);
                } 
                    var D = ((A3/0.045)-(B5+C5));
                    var D1 = (Math.ceil(D));
                    rezunit.innerHTML=D1;
                    var E = (D1*0.045);
                    var E1 = E.toFixed(2);
                    rezcantcar.innerHTML=E1;
                    var F = (E1*Pret);
                    var F1 = F.toFixed(2);
                    rezpret.innerHTML=F1;
            }
            /*===================*/
            else
            if(document.getElementById('sel-u').value == "valu3"){
                    var B = (LatU1/0.6);
                    var B1 = (Math.ceil(B));
                    var B2 = (HU1/0.3);
                    var B3 = (Math.ceil(B2));
                    var B4 = (B1*B3);/*=REZ=*/
                    var B5 = (B4*2);
                
                
                if(document.getElementById('sel-f').value == "valf1"){
                    var C5 = 0;
                }
                else
                if(document.getElementById('sel-f').value == "valf2"){
                    var C = (LatF1/0.6);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.3);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*1);
                }
                else
                if(document.getElementById('sel-f').value == "valf3"){
                    var C = (LatF1/0.6);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.3);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*2);
                    
                }
                else
                if(document.getElementById('sel-f').value == "valf4"){
                    var C = (LatF1/0.6);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.3);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*3);                 
                }
                else
                if(document.getElementById('sel-f').value == "valf5"){
                    var C = (LatF1/0.6);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.3);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*4);
                } 
                    var D = ((A3/0.045)-(B5+C5));
                    var D1 = (Math.ceil(D));
                    rezunit.innerHTML=D1;
                    var E = (D1*0.045);
                    var E1 = E.toFixed(2);
                    rezcantcar.innerHTML=E1;
                    var F = (E1*Pret);
                    var F1 = F.toFixed(2);
                    rezpret.innerHTML=F1;
            }
             /*===================*/
             else
            if(document.getElementById('sel-u').value == "valu4"){
                    var B = (LatU1/0.6);
                    var B1 = (Math.ceil(B));
                    var B2 = (HU1/0.3);
                    var B3 = (Math.ceil(B2));
                    var B4 = (B1*B3);/*=REZ=*/
                    var B5 = (B4*3);
                
                
                if(document.getElementById('sel-f').value == "valf1"){
                    var C5 = 0;
                }
                else
                if(document.getElementById('sel-f').value == "valf2"){
                    var C = (LatF1/0.6);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.3);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*1);
                }
                else
                if(document.getElementById('sel-f').value == "valf3"){
                    var C = (LatF1/0.6);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.3);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*2);
                    
                }
                else
                if(document.getElementById('sel-f').value == "valf4"){
                    var C = (LatF1/0.6);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.3);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*3);                 
                }
                else
                if(document.getElementById('sel-f').value == "valf5"){
                    var C = (LatF1/0.6);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.3);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*4);
                } 
                    var D = ((A3/0.045)-(B5+C5));
                    var D1 = (Math.ceil(D));
                    rezunit.innerHTML=D1;
                    var E = (D1*0.045);
                    var E1 = E.toFixed(2);
                    rezcantcar.innerHTML=E1;
                    var F = (E1*Pret);
                    var F1 = F.toFixed(2);
                    rezpret.innerHTML=F1;
            }
             /*===================*/
             else
            if(document.getElementById('sel-u').value == "valu5"){
                    var B = (LatU1/0.6);
                    var B1 = (Math.ceil(B));
                    var B2 = (HU1/0.3);
                    var B3 = (Math.ceil(B2));
                    var B4 = (B1*B3);/*=REZ=*/
                    var B5 = (B4*4);
                
                
                if(document.getElementById('sel-f').value == "valf1"){
                    var C5 = 0;
                }
                else
                if(document.getElementById('sel-f').value == "valf2"){
                    var C = (LatF1/0.6);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.3);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*1);
                }
                else
                if(document.getElementById('sel-f').value == "valf3"){
                    var C = (LatF1/0.6);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.3);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*2);
                    
                }
                else
                if(document.getElementById('sel-f').value == "valf4"){
                    var C = (LatF1/0.6);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.3);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*3);                 
                }
                else
                if(document.getElementById('sel-f').value == "valf5"){
                    var C = (LatF1/0.6);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.3);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*4);
                } 
                    var D = ((A3/0.045)-(B5+C5));
                    var D1 = (Math.ceil(D));
                    rezunit.innerHTML=D1;
                    var E = (D1*0.045);
                    var E1 = E.toFixed(2);
                    rezcantcar.innerHTML=E1;
                    var F = (E1*Pret);
                    var F1 = F.toFixed(2);
                    rezpret.innerHTML=F1; 
            }
             /*==================GATA=*/   
            
        }
    /*GATA*/
        else
        if(document.getElementById('sel-g').value == "val3"){
            
            
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
            var A2 = (A1*H1*0.3);
            var A3 = A2.toFixed(2);
            /*======================*/
            if(document.getElementById('sel-u').value == "valu1"){
                var B5 = 0;
                if(document.getElementById('sel-f').value == "valf1"){
                    var C5 = 0;
                }
                else
                if(document.getElementById('sel-f').value == "valf2"){
                    var C = (LatF1/0.6);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.3);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*1);
                }
                else
                if(document.getElementById('sel-f').value == "valf3"){
                    var C = (LatF1/0.6);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.3);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*2);
                    
                }
                else
                if(document.getElementById('sel-f').value == "valf4"){
                    var C = (LatF1/0.6);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.3);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*3);                 
                }
                else
                if(document.getElementById('sel-f').value == "valf5"){
                    var C = (LatF1/0.6);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.3);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*4);
                } 
                    var D = ((A3/0.054)-(B5+C5));
                    var D1 = (Math.ceil(D));
                    rezunit.innerHTML=D1;
                    var E = (D1*0.054);
                    var E1 = E.toFixed(2);
                    rezcantcar.innerHTML=E1;
                    var F = (E1*Pret);
                    var F1 = F.toFixed(2);
                    rezpret.innerHTML=F1;
            }
            /*===================*/
            else
            if(document.getElementById('sel-u').value == "valu2"){
                    var B = (LatU1/0.6);
                    var B1 = (Math.ceil(B));
                    var B2 = (HU1/0.3);
                    var B3 = (Math.ceil(B2));
                    var B4 = (B1*B3);/*=REZ=*/
                    var B5 = (B4*1);
                
                
                if(document.getElementById('sel-f').value == "valf1"){
                    var C5 = 0;
                }
                else
                if(document.getElementById('sel-f').value == "valf2"){
                    var C = (LatF1/0.6);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.3);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*1);
                }
                else
                if(document.getElementById('sel-f').value == "valf3"){
                    var C = (LatF1/0.6);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.3);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*2);
                    
                }
                else
                if(document.getElementById('sel-f').value == "valf4"){
                    var C = (LatF1/0.6);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.3);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*3);                 
                }
                else
                if(document.getElementById('sel-f').value == "valf5"){
                    var C = (LatF1/0.6);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.3);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*4);
                } 
                    var D = ((A3/0.054)-(B5+C5));
                    var D1 = (Math.ceil(D));
                    rezunit.innerHTML=D1;
                    var E = (D1*0.054);
                    var E1 = E.toFixed(2);
                    rezcantcar.innerHTML=E1;
                    var F = (E1*Pret);
                    var F1 = F.toFixed(2);
                    rezpret.innerHTML=F1;
            }
            /*===================*/
            else
            if(document.getElementById('sel-u').value == "valu3"){
                    var B = (LatU1/0.6);
                    var B1 = (Math.ceil(B));
                    var B2 = (HU1/0.3);
                    var B3 = (Math.ceil(B2));
                    var B4 = (B1*B3);/*=REZ=*/
                    var B5 = (B4*2);
                
                
                if(document.getElementById('sel-f').value == "valf1"){
                    var C5 = 0;
                }
                else
                if(document.getElementById('sel-f').value == "valf2"){
                    var C = (LatF1/0.6);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.3);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*1);
                }
                else
                if(document.getElementById('sel-f').value == "valf3"){
                    var C = (LatF1/0.6);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.3);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*2);
                    
                }
                else
                if(document.getElementById('sel-f').value == "valf4"){
                    var C = (LatF1/0.6);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.3);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*3);                 
                }
                else
                if(document.getElementById('sel-f').value == "valf5"){
                    var C = (LatF1/0.6);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.3);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*4);
                } 
                    var D = ((A3/0.054)-(B5+C5));
                    var D1 = (Math.ceil(D));
                    rezunit.innerHTML=D1;
                    var E = (D1*0.054);
                    var E1 = E.toFixed(2);
                    rezcantcar.innerHTML=E1;
                    var F = (E1*Pret);
                    var F1 = F.toFixed(2);
                    rezpret.innerHTML=F1;
            }
             /*===================*/
             else
            if(document.getElementById('sel-u').value == "valu4"){
                    var B = (LatU1/0.6);
                    var B1 = (Math.ceil(B));
                    var B2 = (HU1/0.3);
                    var B3 = (Math.ceil(B2));
                    var B4 = (B1*B3);/*=REZ=*/
                    var B5 = (B4*3);
                
                
                if(document.getElementById('sel-f').value == "valf1"){
                    var C5 = 0;
                }
                else
                if(document.getElementById('sel-f').value == "valf2"){
                    var C = (LatF1/0.6);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.3);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*1);
                }
                else
                if(document.getElementById('sel-f').value == "valf3"){
                    var C = (LatF1/0.6);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.3);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*2);
                    
                }
                else
                if(document.getElementById('sel-f').value == "valf4"){
                    var C = (LatF1/0.6);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.3);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*3);                 
                }
                else
                if(document.getElementById('sel-f').value == "valf5"){
                    var C = (LatF1/0.6);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.3);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*4);
                } 
                    var D = ((A3/0.054)-(B5+C5));
                    var D1 = (Math.ceil(D));
                    rezunit.innerHTML=D1;
                    var E = (D1*0.054);
                    var E1 = E.toFixed(2);
                    rezcantcar.innerHTML=E1;
                    var F = (E1*Pret);
                    var F1 = F.toFixed(2);
                    rezpret.innerHTML=F1;
            }
             /*===================*/
             else
            if(document.getElementById('sel-u').value == "valu5"){
                    var B = (LatU1/0.6);
                    var B1 = (Math.ceil(B));
                    var B2 = (HU1/0.3);
                    var B3 = (Math.ceil(B2));
                    var B4 = (B1*B3);/*=REZ=*/
                    var B5 = (B4*4);
                
                
                if(document.getElementById('sel-f').value == "valf1"){
                    var C5 = 0;
                }
                else
                if(document.getElementById('sel-f').value == "valf2"){
                    var C = (LatF1/0.6);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.3);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*1);
                }
                else
                if(document.getElementById('sel-f').value == "valf3"){
                    var C = (LatF1/0.6);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.3);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*2);
                    
                }
                else
                if(document.getElementById('sel-f').value == "valf4"){
                    var C = (LatF1/0.6);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.3);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*3);                 
                }
                else
                if(document.getElementById('sel-f').value == "valf5"){
                    var C = (LatF1/0.6);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.3);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*4);
                } 
                    var D = ((A3/0.054)-(B5+C5));
                    var D1 = (Math.ceil(D));
                    rezunit.innerHTML=D1;
                    var E = (D1*0.054);
                    var E1 = E.toFixed(2);
                    rezcantcar.innerHTML=E1;
                    var F = (E1*Pret);
                    var F1 = F.toFixed(2);
                    rezpret.innerHTML=F1;
            }
             /*===================*/   
        }
    /*GATA*/
        else
        if(document.getElementById('sel-g').value == "val4"){
             
            
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
            var A2 = (A1*H1*0.3);
            var A3 = A2.toFixed(2);
            /*======================*/
            if(document.getElementById('sel-u').value == "valu1"){
                var B5 = 0;
                if(document.getElementById('sel-f').value == "valf1"){
                    var C5 = 0;
                }
                else
                if(document.getElementById('sel-f').value == "valf2"){
                    var C = (LatF1/0.6);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.4);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*1);
                }
                else
                if(document.getElementById('sel-f').value == "valf3"){
                    var C = (LatF1/0.6);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.4);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*2);
                    
                }
                else
                if(document.getElementById('sel-f').value == "valf4"){
                    var C = (LatF1/0.6);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.4);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*3);                 
                }
                else
                if(document.getElementById('sel-f').value == "valf5"){
                    var C = (LatF1/0.6);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.4);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*4);
                } 
                    var D = ((A3/0.072)-(B5+C5));
                    var D1 = (Math.ceil(D));
                    rezunit.innerHTML=D1;
                    var E = (D1*0.072);
                    var E1 = E.toFixed(2);
                    rezcantcar.innerHTML=E1;
                    var F = (E1*Pret);
                    var F1 = F.toFixed(2);
                    rezpret.innerHTML=F1;
            }
            /*===================*/
            else
            if(document.getElementById('sel-u').value == "valu2"){
                    var B = (LatU1/0.6);
                    var B1 = (Math.ceil(B));
                    var B2 = (HU1/0.4);
                    var B3 = (Math.ceil(B2));
                    var B4 = (B1*B3);/*=REZ=*/
                    var B5 = (B4*1);
                
                
                if(document.getElementById('sel-f').value == "valf1"){
                    var C5 = 0;
                }
                else
                if(document.getElementById('sel-f').value == "valf2"){
                    var C = (LatF1/0.6);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.4);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*1);
                }
                else
                if(document.getElementById('sel-f').value == "valf3"){
                    var C = (LatF1/0.6);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.4);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*2);
                    
                }
                else
                if(document.getElementById('sel-f').value == "valf4"){
                    var C = (LatF1/0.6);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.4);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*3);                 
                }
                else
                if(document.getElementById('sel-f').value == "valf5"){
                    var C = (LatF1/0.6);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.4);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*4);
                } 
                    var D = ((A3/0.072)-(B5+C5));
                    var D1 = (Math.ceil(D));
                    rezunit.innerHTML=D1;
                    var E = (D1*0.072);
                    var E1 = E.toFixed(2);
                    rezcantcar.innerHTML=E1;
                    var F = (E1*Pret);
                    var F1 = F.toFixed(2);
                    rezpret.innerHTML=F1;
            }
            /*===================*/
            else
            if(document.getElementById('sel-u').value == "valu3"){
                    var B = (LatU1/0.6);
                    var B1 = (Math.ceil(B));
                    var B2 = (HU1/0.4);
                    var B3 = (Math.ceil(B2));
                    var B4 = (B1*B3);/*=REZ=*/
                    var B5 = (B4*2);
                
                
                if(document.getElementById('sel-f').value == "valf1"){
                    var C5 = 0;
                }
                else
                if(document.getElementById('sel-f').value == "valf2"){
                    var C = (LatF1/0.6);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.4);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*1);
                }
                else
                if(document.getElementById('sel-f').value == "valf3"){
                    var C = (LatF1/0.6);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.4);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*2);
                    
                }
                else
                if(document.getElementById('sel-f').value == "valf4"){
                    var C = (LatF1/0.6);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.4);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*3);                 
                }
                else
                if(document.getElementById('sel-f').value == "valf5"){
                    var C = (LatF1/0.6);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.4);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*4);
                } 
                    var D = ((A3/0.072)-(B5+C5));
                    var D1 = (Math.ceil(D));
                    rezunit.innerHTML=D1;
                    var E = (D1*0.072);
                    var E1 = E.toFixed(2);
                    rezcantcar.innerHTML=E1;
                    var F = (E1*Pret);
                    var F1 = F.toFixed(2);
                    rezpret.innerHTML=F1;
            }
             /*===================*/
             else
            if(document.getElementById('sel-u').value == "valu4"){
                    var B = (LatU1/0.6);
                    var B1 = (Math.ceil(B));
                    var B2 = (HU1/0.4);
                    var B3 = (Math.ceil(B2));
                    var B4 = (B1*B3);/*=REZ=*/
                    var B5 = (B4*3);
                
                
                if(document.getElementById('sel-f').value == "valf1"){
                    var C5 = 0;
                }
                else
                if(document.getElementById('sel-f').value == "valf2"){
                    var C = (LatF1/0.6);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.4);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*1);
                }
                else
                if(document.getElementById('sel-f').value == "valf3"){
                    var C = (LatF1/0.6);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.4);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*2);
                    
                }
                else
                if(document.getElementById('sel-f').value == "valf4"){
                    var C = (LatF1/0.6);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.4);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*3);                 
                }
                else
                if(document.getElementById('sel-f').value == "valf5"){
                    var C = (LatF1/0.6);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.4);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*4);
                } 
                    var D = ((A3/0.072)-(B5+C5));
                    var D1 = (Math.ceil(D));
                    rezunit.innerHTML=D1;
                    var E = (D1*0.072);
                    var E1 = E.toFixed(2);
                    rezcantcar.innerHTML=E1;
                    var F = (E1*Pret);
                    var F1 = F.toFixed(2);
                    rezpret.innerHTML=F1;
            }
             /*===================*/
             else
            if(document.getElementById('sel-u').value == "valu5"){
                    var B = (LatU1/0.6);
                    var B1 = (Math.ceil(B));
                    var B2 = (HU1/0.4);
                    var B3 = (Math.ceil(B2));
                    var B4 = (B1*B3);/*=REZ=*/
                    var B5 = (B4*4);
                
                
                if(document.getElementById('sel-f').value == "valf1"){
                    var C5 = 0;
                }
                else
                if(document.getElementById('sel-f').value == "valf2"){
                    var C = (LatF1/0.6);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.4);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*1);
                }
                else
                if(document.getElementById('sel-f').value == "valf3"){
                    var C = (LatF1/0.6);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.4);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*2);
                    
                }
                else
                if(document.getElementById('sel-f').value == "valf4"){
                    var C = (LatF1/0.6);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.4);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*3);                 
                }
                else
                if(document.getElementById('sel-f').value == "valf5"){
                    var C = (LatF1/0.6);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.4);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*4);
                } 
                    var D = ((A3/0.072)-(B5+C5));
                    var D1 = (Math.ceil(D));
                    rezunit.innerHTML=D1;
                    var E = (D1*0.072);
                    var E1 = E.toFixed(2);
                    rezcantcar.innerHTML=E1;
                    var F = (E1*Pret);
                    var F1 = F.toFixed(2);
                    rezpret.innerHTML=F1;
            }
             /*===================*/   
        }
    /*GATA*/
        else      
        if(document.getElementById('sel-g').value == "val5"){
            
            
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
            var A2 = (A1*H1*0.3);
            var A3 = A2.toFixed(2);
            /*======================*/
            if(document.getElementById('sel-u').value == "valu1"){
                var B5 = 0;
                if(document.getElementById('sel-f').value == "valf1"){
                    var C5 = 0;
                }
                else
                if(document.getElementById('sel-f').value == "valf2"){
                    var C = (LatF1/1.8);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.6);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*1);
                }
                else
                if(document.getElementById('sel-f').value == "valf3"){
                    var C = (LatF1/1.8);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.6);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*2);
                    
                }
                else
                if(document.getElementById('sel-f').value == "valf4"){
                    var C = (LatF1/1.8);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.6);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*3);                 
                }
                else
                if(document.getElementById('sel-f').value == "valf5"){
                    var C = (LatF1/1.8);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.6);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*4);
                } 
                    var D = ((A3/0.324)-(B5+C5));
                    var D1 = (Math.ceil(D));
                    rezunit.innerHTML=D1;
                    var E = (D1*0.324);
                    var E1 = E.toFixed(2);
                    rezcantcar.innerHTML=E1;
                    var F = (E1*Pret);
                    var F1 = F.toFixed(2);
                    rezpret.innerHTML=F1;
                
            }
            /*===================*/
            else
            if(document.getElementById('sel-u').value == "valu2"){
                    var B = (LatU1/1.8);
                    var B1 = (Math.ceil(B));
                    var B2 = (HU1/0.6);
                    var B3 = (Math.ceil(B2));
                    var B4 = (B1*B3);/*=REZ=*/
                    var B5 = (B4*1);
                
                
                if(document.getElementById('sel-f').value == "valf1"){
                    var C5 = 0;
                }
                else
                if(document.getElementById('sel-f').value == "valf2"){
                    var C = (LatF1/1.8);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.6);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*1);
                }
                else
                if(document.getElementById('sel-f').value == "valf3"){
                    var C = (LatF1/1.8);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.6);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*2);
                    
                }
                else
                if(document.getElementById('sel-f').value == "valf4"){
                    var C = (LatF1/1.8);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.6);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*3);                 
                }
                else
                if(document.getElementById('sel-f').value == "valf5"){
                    var C = (LatF1/1.8);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.6);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*4);
                } 
                    var D = ((A3/0.324)-(B5+C5));
                    var D1 = (Math.ceil(D));
                    rezunit.innerHTML=D1;
                    var E = (D1*0.324);
                    var E1 = E.toFixed(2);
                    rezcantcar.innerHTML=E1;
                    var F = (E1*Pret);
                    var F1 = F.toFixed(2);
                    rezpret.innerHTML=F1;
            }
            /*===================*/
            else
            if(document.getElementById('sel-u').value == "valu3"){
                    var B = (LatU1/1.8);
                    var B1 = (Math.ceil(B));
                    var B2 = (HU1/0.6);
                    var B3 = (Math.ceil(B2));
                    var B4 = (B1*B3);/*=REZ=*/
                    var B5 = (B4*2);
                
                
                if(document.getElementById('sel-f').value == "valf1"){
                    var C5 = 0;
                }
                else
                if(document.getElementById('sel-f').value == "valf2"){
                    var C = (LatF1/1.8);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.6);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*1);
                }
                else
                if(document.getElementById('sel-f').value == "valf3"){
                    var C = (LatF1/1.8);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.6);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*2);
                    
                }
                else
                if(document.getElementById('sel-f').value == "valf4"){
                    var C = (LatF1/1.8);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.6);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*3);                 
                }
                else
                if(document.getElementById('sel-f').value == "valf5"){
                    var C = (LatF1/1.8);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.6);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*4);
                } 
                    var D = ((A3/0.324)-(B5+C5));
                    var D1 = (Math.ceil(D));
                    rezunit.innerHTML=D1;
                    var E = (D1*0.324);
                    var E1 = E.toFixed(2);
                    rezcantcar.innerHTML=E1;
                    var F = (E1*Pret);
                    var F1 = F.toFixed(2);
                    rezpret.innerHTML=F1;
            }
             /*===================*/
             else
            if(document.getElementById('sel-u').value == "valu4"){
                    var B = (LatU1/1.8);
                    var B1 = (Math.ceil(B));
                    var B2 = (HU1/0.6);
                    var B3 = (Math.ceil(B2));
                    var B4 = (B1*B3);/*=REZ=*/
                    var B5 = (B4*3);
                
                
                if(document.getElementById('sel-f').value == "valf1"){
                    var C5 = 0;
                }
                else
                if(document.getElementById('sel-f').value == "valf2"){
                    var C = (LatF1/1.8);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.6);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*1);
                }
                else
                if(document.getElementById('sel-f').value == "valf3"){
                    var C = (LatF1/1.8);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.6);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*2);
                    
                }
                else
                if(document.getElementById('sel-f').value == "valf4"){
                    var C = (LatF1/1.8);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.6);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*3);                 
                }
                else
                if(document.getElementById('sel-f').value == "valf5"){
                    var C = (LatF1/1.8);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.6);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*4);
                } 
                    var D = ((A3/0.324)-(B5+C5));
                    var D1 = (Math.ceil(D));
                    rezunit.innerHTML=D1;
                    var E = (D1*0.324);
                    var E1 = E.toFixed(2);
                    rezcantcar.innerHTML=E1;
                    var F = (E1*Pret);
                    var F1 = F.toFixed(2);
                    rezpret.innerHTML=F1;
                    
            }
             /*===================*/
             else
            if(document.getElementById('sel-u').value == "valu5"){
                    var B = (LatU1/1.8);
                    var B1 = (Math.ceil(B));
                    var B2 = (HU1/0.6);
                    var B3 = (Math.ceil(B2));
                    var B4 = (B1*B3);/*=REZ=*/
                    var B5 = (B4*4);
                
                
                if(document.getElementById('sel-f').value == "valf1"){
                    var C5 = 0;
                }
                else
                if(document.getElementById('sel-f').value == "valf2"){
                    var C = (LatF1/0.39);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.19);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*1);
                }
                else
                if(document.getElementById('sel-f').value == "valf3"){
                    var C = (LatF1/1.8);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.6);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*2);
                    
                }
                else
                if(document.getElementById('sel-f').value == "valf4"){
                    var C = (LatF1/1.8);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.6);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*3);                 
                }
                else
                if(document.getElementById('sel-f').value == "valf5"){
                    var C = (LatF1/1.8);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.6);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*4);
                } 
                    var D = ((A3/0.324)-(B5+C5));
                    var D1 = (Math.ceil(D));
                    rezunit.innerHTML=D1;
                    var E = (D1*0.324);
                    var E1 = E.toFixed(2);
                    rezcantcar.innerHTML=E1;
                    var F = (E1*Pret);
                    var F1 = F.toFixed(2);
                    rezpret.innerHTML=F1;
            }
             /*===================*/   
            
        }
    /*GATA*/
        else
        if(document.getElementById('sel-g').value == "val6"){
             
            
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
            var A2 = (A1*H1*0.4);
            var A3 = A2.toFixed(2);
            /*======================*/
            if(document.getElementById('sel-u').value == "valu1"){
                var B5 = 0;
                if(document.getElementById('sel-f').value == "valf1"){
                    var C5 = 0;
                }
                else
                if(document.getElementById('sel-f').value == "valf2"){
                    var C = (LatF1/1.8);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.6);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*1);
                }
                else
                if(document.getElementById('sel-f').value == "valf3"){
                    var C = (LatF1/1.8);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.6);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*2);
                    
                }
                else
                if(document.getElementById('sel-f').value == "valf4"){
                    var C = (LatF1/1.8);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.6);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*3);                 
                }
                else
                if(document.getElementById('sel-f').value == "valf5"){
                    var C = (LatF1/1.8);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.6);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*4);
                } 
                    var D = ((A3/0.432)-(B5+C5));
                    var D1 = (Math.ceil(D));
                    rezunit.innerHTML=D1;
                    var E = (D1*0.432);
                    var E1 = E.toFixed(2);
                    rezcantcar.innerHTML=E1;
                    var F = (E1*Pret);
                    var F1 = F.toFixed(2);
                    rezpret.innerHTML=F1;
            }
            /*===================*/
            else
            if(document.getElementById('sel-u').value == "valu2"){
                    var B = (LatU1/1.8);
                    var B1 = (Math.ceil(B));
                    var B2 = (HU1/0.6);
                    var B3 = (Math.ceil(B2));
                    var B4 = (B1*B3);/*=REZ=*/
                    var B5 = (B4*1);
                
                
                if(document.getElementById('sel-f').value == "valf1"){
                    var C5 = 0;
                }
                else
                if(document.getElementById('sel-f').value == "valf2"){
                    var C = (LatF1/1.8);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.6);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*1);
                }
                else
                if(document.getElementById('sel-f').value == "valf3"){
                    var C = (LatF1/1.8);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.6);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*2);
                    
                }
                else
                if(document.getElementById('sel-f').value == "valf4"){
                    var C = (LatF1/1.8);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.6);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*3);                 
                }
                else
                if(document.getElementById('sel-f').value == "valf5"){
                    var C = (LatF1/1.8);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.6);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*4);
                } 
                    var D = ((A3/0.432)-(B5+C5));
                    var D1 = (Math.ceil(D));
                    rezunit.innerHTML=D1;
                    var E = (D1*0.432);
                    var E1 = E.toFixed(2);
                    rezcantcar.innerHTML=E1;
                    var F = (E1*Pret);
                    var F1 = F.toFixed(2);
                    rezpret.innerHTML=F1;
            }
            /*===================*/
            else
            if(document.getElementById('sel-u').value == "valu3"){
                    var B = (LatU1/1.8);
                    var B1 = (Math.ceil(B));
                    var B2 = (HU1/0.6);
                    var B3 = (Math.ceil(B2));
                    var B4 = (B1*B3);/*=REZ=*/
                    var B5 = (B4*2);
                
                
                if(document.getElementById('sel-f').value == "valf1"){
                    var C5 = 0;
                }
                else
                if(document.getElementById('sel-f').value == "valf2"){
                    var C = (LatF1/1.8);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.6);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*1);
                }
                else
                if(document.getElementById('sel-f').value == "valf3"){
                    var C = (LatF1/1.8);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.6);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*2);
                    
                }
                else
                if(document.getElementById('sel-f').value == "valf4"){
                    var C = (LatF1/1.8);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.6);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*3);                 
                }
                else
                if(document.getElementById('sel-f').value == "valf5"){
                    var C = (LatF1/1.8);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.6);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*4);
                } 
                    var D = ((A3/0.432)-(B5+C5));
                    var D1 = (Math.ceil(D));
                    rezunit.innerHTML=D1;
                    var E = (D1*0.432);
                    var E1 = E.toFixed(2);
                    rezcantcar.innerHTML=E1;
                    var F = (E1*Pret);
                    var F1 = F.toFixed(2);
                    rezpret.innerHTML=F1;
            }
             /*===================*/
             else
            if(document.getElementById('sel-u').value == "valu4"){
                    var B = (LatU1/1.8);
                    var B1 = (Math.ceil(B));
                    var B2 = (HU1/0.6);
                    var B3 = (Math.ceil(B2));
                    var B4 = (B1*B3);/*=REZ=*/
                    var B5 = (B4*3);
                
                
                if(document.getElementById('sel-f').value == "valf1"){
                    var C5 = 0;
                }
                else
                if(document.getElementById('sel-f').value == "valf2"){
                    var C = (LatF1/1.8);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.6);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*1);
                }
                else
                if(document.getElementById('sel-f').value == "valf3"){
                    var C = (LatF1/1.8);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.6);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*2);
                    
                }
                else
                if(document.getElementById('sel-f').value == "valf4"){
                    var C = (LatF1/1.8);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.6);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*3);                 
                }
                else
                if(document.getElementById('sel-f').value == "valf5"){
                    var C = (LatF1/1.8);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.6);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*4);
                } 
                    var D = ((A3/0.432)-(B5+C5));
                    var D1 = (Math.ceil(D));
                    rezunit.innerHTML=D1;
                    var E = (D1*0.432);
                    var E1 = E.toFixed(2);
                    rezcantcar.innerHTML=E1;
                    var F = (E1*Pret);
                    var F1 = F.toFixed(2);
                    rezpret.innerHTML=F1;
            }
             /*===================*/
             else
            if(document.getElementById('sel-u').value == "valu5"){
                    var B = (LatU1/1.8);
                    var B1 = (Math.ceil(B));
                    var B2 = (HU1/0.6);
                    var B3 = (Math.ceil(B2));
                    var B4 = (B1*B3);/*=REZ=*/
                    var B5 = (B4*4);
                
                
                if(document.getElementById('sel-f').value == "valf1"){
                    var C5 = 0;
                }
                else
                if(document.getElementById('sel-f').value == "valf2"){
                    var C = (LatF1/1.8);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.6);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*1);
                }
                else
                if(document.getElementById('sel-f').value == "valf3"){
                    var C = (LatF1/1.8);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.6);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*2);
                    
                }
                else
                if(document.getElementById('sel-f').value == "valf4"){
                    var C = (LatF1/1.8);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.6);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*3);                 
                }
                else
                if(document.getElementById('sel-f').value == "valf5"){
                    var C = (LatF1/1.8);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.6);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*4);
                } 
                    var D = ((A3/0.432)-(B5+C5));
                    var D1 = (Math.ceil(D));
                    rezunit.innerHTML=D1;
                    var E = (D1*0.432);
                    var E1 = E.toFixed(2);
                    rezcantcar.innerHTML=E1;
                    var F = (E1*Pret);
                    var F1 = F.toFixed(2);
                    rezpret.innerHTML=F1; 
            }
             /*===================*/   
            
        }
    /*GATA*/
        else
        if(document.getElementById('sel-g').value == "val7"){
             
            
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
            var A2 = (A1*H1*0.5);
            var A3 = A2.toFixed(2);
            /*======================*/
            if(document.getElementById('sel-u').value == "valu1"){
                var B5 = 0;
                if(document.getElementById('sel-f').value == "valf1"){
                    var C5 = 0;
                }
                else
                if(document.getElementById('sel-f').value == "valf2"){
                    var C = (LatF1/1.8);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.6);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*1);
                }
                else
                if(document.getElementById('sel-f').value == "valf3"){
                    var C = (LatF1/1.8);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.6);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*2);
                    
                }
                else
                if(document.getElementById('sel-f').value == "valf4"){
                    var C = (LatF1/1.8);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.6);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*3);                 
                }
                else
                if(document.getElementById('sel-f').value == "valf5"){
                    var C = (LatF1/1.8);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.6);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*4);
                } 
                    var D = ((A3/0.54)-(B5+C5));
                    var D1 = (Math.ceil(D));
                    rezunit.innerHTML=D1;
                    var E = (D1*0.54);
                    var E1 = E.toFixed(2);
                    rezcantcar.innerHTML=E1;
                    var F = (E1*Pret);
                    var F1 = F.toFixed(2);
                    rezpret.innerHTML=F1;
            }
            /*===================*/
            else
            if(document.getElementById('sel-u').value == "valu2"){
                    var B = (LatU1/1.8);
                    var B1 = (Math.ceil(B));
                    var B2 = (HU1/0.6);
                    var B3 = (Math.ceil(B2));
                    var B4 = (B1*B3);/*=REZ=*/
                    var B5 = (B4*1);
                
                
                if(document.getElementById('sel-f').value == "valf1"){
                    var C5 = 0;
                }
                else
                if(document.getElementById('sel-f').value == "valf2"){
                    var C = (LatF1/1.8);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.6);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*1);
                }
                else
                if(document.getElementById('sel-f').value == "valf3"){
                    var C = (LatF1/1.8);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.6);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*2);
                    
                }
                else
                if(document.getElementById('sel-f').value == "valf4"){
                    var C = (LatF1/1.8);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.6);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*3);                 
                }
                else
                if(document.getElementById('sel-f').value == "valf5"){
                    var C = (LatF1/1.8);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.6);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*4);
                } 
                    var D = ((A3/0.54)-(B5+C5));
                    var D1 = (Math.ceil(D));
                    rezunit.innerHTML=D1;
                    var E = (D1*0.54);
                    var E1 = E.toFixed(2);
                    rezcantcar.innerHTML=E1;
                    var F = (E1*Pret);
                    var F1 = F.toFixed(2);
                    rezpret.innerHTML=F1;
            }
            /*===================*/
            else
            if(document.getElementById('sel-u').value == "valu3"){
                    var B = (LatU1/1.8);
                    var B1 = (Math.ceil(B));
                    var B2 = (HU1/0.6);
                    var B3 = (Math.ceil(B2));
                    var B4 = (B1*B3);/*=REZ=*/
                    var B5 = (B4*2);
                
                
                if(document.getElementById('sel-f').value == "valf1"){
                    var C5 = 0;
                }
                else
                if(document.getElementById('sel-f').value == "valf2"){
                    var C = (LatF1/1.8);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.6);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*1);
                }
                else
                if(document.getElementById('sel-f').value == "valf3"){
                    var C = (LatF1/1.8);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.6);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*2);
                    
                }
                else
                if(document.getElementById('sel-f').value == "valf4"){
                    var C = (LatF1/1.8);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.6);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*3);                 
                }
                else
                if(document.getElementById('sel-f').value == "valf5"){
                    var C = (LatF1/1.8);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.6);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*4);
                } 
                    var D = ((A3/0.54)-(B5+C5));
                    var D1 = (Math.ceil(D));
                    rezunit.innerHTML=D1;
                    var E = (D1*0.54);
                    var E1 = E.toFixed(2);
                    rezcantcar.innerHTML=E1;
                    var F = (E1*Pret);
                    var F1 = F.toFixed(2);
                    rezpret.innerHTML=F1;
            }
             /*===================*/
             else
            if(document.getElementById('sel-u').value == "valu4"){
                    var B = (LatU1/1.8);
                    var B1 = (Math.ceil(B));
                    var B2 = (HU1/0.6);
                    var B3 = (Math.ceil(B2));
                    var B4 = (B1*B3);/*=REZ=*/
                    var B5 = (B4*3);
                
                
                if(document.getElementById('sel-f').value == "valf1"){
                    var C5 = 0;
                }
                else
                if(document.getElementById('sel-f').value == "valf2"){
                    var C = (LatF1/1.8);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.6);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*1);
                }
                else
                if(document.getElementById('sel-f').value == "valf3"){
                    var C = (LatF1/1.8);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.6);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*2);
                    
                }
                else
                if(document.getElementById('sel-f').value == "valf4"){
                    var C = (LatF1/1.8);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.6);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*3);                 
                }
                else
                if(document.getElementById('sel-f').value == "valf5"){
                    var C = (LatF1/1.8);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.6);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*4);
                } 
                    var D = ((A3/0.54)-(B5+C5));
                    var D1 = (Math.ceil(D));
                    rezunit.innerHTML=D1;
                    var E = (D1*0.54);
                    var E1 = E.toFixed(2);
                    rezcantcar.innerHTML=E1;
                    var F = (E1*Pret);
                    var F1 = F.toFixed(2);
                    rezpret.innerHTML=F1;
            }
             /*===================*/
             else
            if(document.getElementById('sel-u').value == "valu5"){
                    var B = (LatU1/1.8);
                    var B1 = (Math.ceil(B));
                    var B2 = (HU1/0.6);
                    var B3 = (Math.ceil(B2));
                    var B4 = (B1*B3);/*=REZ=*/
                    var B5 = (B4*4);
                
                
                if(document.getElementById('sel-f').value == "valf1"){
                    var C5 = 0;
                }
                else
                if(document.getElementById('sel-f').value == "valf2"){
                    var C = (LatF1/1.8);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.6);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*1);
                }
                else
                if(document.getElementById('sel-f').value == "valf3"){
                    var C = (LatF1/1.8);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.6);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*2);
                    
                }
                else
                if(document.getElementById('sel-f').value == "valf4"){
                    var C = (LatF1/1.8);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.6);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*3);                 
                }
                else
                if(document.getElementById('sel-f').value == "valf5"){
                    var C = (LatF1/1.8);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.6);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*4);
                } 
                    var D = ((A3/0.54)-(B5+C5));
                    var D1 = (Math.ceil(D));
                    rezunit.innerHTML=D1;
                    var E = (D1*0.54);
                    var E1 = E.toFixed(2);
                    rezcantcar.innerHTML=E1;
                    var F = (E1*Pret);
                    var F1 = F.toFixed(2);
                    rezpret.innerHTML=F1;
            }
             /*===================*/   
        }
    /*GATA*/
        else
        if(document.getElementById('sel-g').value == "val8"){
             
            
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
            var A2 = (A1*H1*0.6);
            var A3 = A2.toFixed(2);
            /*======================*/
            if(document.getElementById('sel-u').value == "valu1"){
                var B5 = 0;
                if(document.getElementById('sel-f').value == "valf1"){
                    var C5 = 0;
                }
                else
                if(document.getElementById('sel-f').value == "valf2"){
                    var C = (LatF1/1.8);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.6);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*1);
                }
                else
                if(document.getElementById('sel-f').value == "valf3"){
                    var C = (LatF1/1.8);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.6);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*2);
                    
                }
                else
                if(document.getElementById('sel-f').value == "valf4"){
                    var C = (LatF1/1.8);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.6);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*3);                 
                }
                else
                if(document.getElementById('sel-f').value == "valf5"){
                    var C = (LatF1/1.8);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.6);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*4);
                } 
                    var D = ((A3/0.648)-(B5+C5));
                    var D1 = (Math.ceil(D));
                    rezunit.innerHTML=D1;
                    var E = (D1*0.648);
                    var E1 = E.toFixed(2);
                    rezcantcar.innerHTML=E1;
                    var F = (E1*Pret);
                    var F1 = F.toFixed(2);
                    rezpret.innerHTML=F1;
            }
            /*===================*/
            else
            if(document.getElementById('sel-u').value == "valu2"){
                    var B = (LatU1/1.8);
                    var B1 = (Math.ceil(B));
                    var B2 = (HU1/0.6);
                    var B3 = (Math.ceil(B2));
                    var B4 = (B1*B3);/*=REZ=*/
                    var B5 = (B4*1);
                
                
                if(document.getElementById('sel-f').value == "valf1"){
                    var C5 = 0;
                }
                else
                if(document.getElementById('sel-f').value == "valf2"){
                    var C = (LatF1/1.8);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.6);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*1);
                }
                else
                if(document.getElementById('sel-f').value == "valf3"){
                    var C = (LatF1/1.8);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.6);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*2);
                    
                }
                else
                if(document.getElementById('sel-f').value == "valf4"){
                    var C = (LatF1/1.8);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.6);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*3);                 
                }
                else
                if(document.getElementById('sel-f').value == "valf5"){
                    var C = (LatF1/1.8);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.6);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*4);
                } 
                    var D = ((A3/0.648)-(B5+C5));
                    var D1 = (Math.ceil(D));
                    rezunit.innerHTML=D1;
                    var E = (D1*0.648);
                    var E1 = E.toFixed(2);
                    rezcantcar.innerHTML=E1;
                    var F = (E1*Pret);
                    var F1 = F.toFixed(2);
                    rezpret.innerHTML=F1;
            }
            /*===================*/
            else
            if(document.getElementById('sel-u').value == "valu3"){
                    var B = (LatU1/1.8);
                    var B1 = (Math.ceil(B));
                    var B2 = (HU1/0.6);
                    var B3 = (Math.ceil(B2));
                    var B4 = (B1*B3);/*=REZ=*/
                    var B5 = (B4*2);
                
                
                if(document.getElementById('sel-f').value == "valf1"){
                    var C5 = 0;
                }
                else
                if(document.getElementById('sel-f').value == "valf2"){
                    var C = (LatF1/1.8);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.6);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*1);
                }
                else
                if(document.getElementById('sel-f').value == "valf3"){
                    var C = (LatF1/1.8);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.6);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*2);
                    
                }
                else
                if(document.getElementById('sel-f').value == "valf4"){
                    var C = (LatF1/1.8);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.6);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*3);                 
                }
                else
                if(document.getElementById('sel-f').value == "valf5"){
                    var C = (LatF1/1.8);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.6);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*4);
                } 
                    var D = ((A3/0.648)-(B5+C5));
                    var D1 = (Math.ceil(D));
                    rezunit.innerHTML=D1;
                    var E = (D1*0.648);
                    var E1 = E.toFixed(2);
                    rezcantcar.innerHTML=E1;
                    var F = (E1*Pret);
                    var F1 = F.toFixed(2);
                    rezpret.innerHTML=F1;
            }
             /*===================*/
             else
            if(document.getElementById('sel-u').value == "valu4"){
                    var B = (LatU1/1.8);
                    var B1 = (Math.ceil(B));
                    var B2 = (HU1/0.6);
                    var B3 = (Math.ceil(B2));
                    var B4 = (B1*B3);/*=REZ=*/
                    var B5 = (B4*3);
                
                
                if(document.getElementById('sel-f').value == "valf1"){
                    var C5 = 0;
                }
                else
                if(document.getElementById('sel-f').value == "valf2"){
                    var C = (LatF1/1.8);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.6);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*1);
                }
                else
                if(document.getElementById('sel-f').value == "valf3"){
                    var C = (LatF1/1.8);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.6);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*2);
                    
                }
                else
                if(document.getElementById('sel-f').value == "valf4"){
                    var C = (LatF1/1.8);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.6);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*3);                 
                }
                else
                if(document.getElementById('sel-f').value == "valf5"){
                    var C = (LatF1/1.8);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.6);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*4);
                } 
                    var D = ((A3/0.648)-(B5+C5));
                    var D1 = (Math.ceil(D));
                    rezunit.innerHTML=D1;
                    var E = (D1*0.648);
                    var E1 = E.toFixed(2);
                    rezcantcar.innerHTML=E1;
                    var F = (E1*Pret);
                    var F1 = F.toFixed(2);
                    rezpret.innerHTML=F1;
            }
             /*===================*/
             else
            if(document.getElementById('sel-u').value == "valu5"){
                    var B = (LatU1/1.8);
                    var B1 = (Math.ceil(B));
                    var B2 = (HU1/0.6);
                    var B3 = (Math.ceil(B2));
                    var B4 = (B1*B3);/*=REZ=*/
                    var B5 = (B4*4);
                
                
                if(document.getElementById('sel-f').value == "valf1"){
                    var C5 = 0;
                }
                else
                if(document.getElementById('sel-f').value == "valf2"){
                    var C = (LatF1/1.8);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.6);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*1);
                }
                else
                if(document.getElementById('sel-f').value == "valf3"){
                    var C = (LatF1/1.8);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.6);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*2);
                    
                }
                else
                if(document.getElementById('sel-f').value == "valf4"){
                    var C = (LatF1/1.8);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.6);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*3);                 
                }
                else
                if(document.getElementById('sel-f').value == "valf5"){
                    var C = (LatF1/1.8);
                    var C1 = (Math.ceil(C));
                    var C2 = (HF1/0.6);
                    var C3 = (Math.ceil(C2));
                    var C4 = (C1*C3);/*=REZ=*/
                    var C5 = (C4*4);
                } 
                    var D = ((A3/0.648)-(B5+C5));
                    var D1 = (Math.ceil(D));
                    rezunit.innerHTML=D1;
                    var E = (D1*0.648);
                    var E1 = E.toFixed(2);
                    rezcantcar.innerHTML=E1;
                    var F = (E1*Pret);
                    var F1 = F.toFixed(2);
                    rezpret.innerHTML=F1;
            }
             /*===================*/   
        }
        


    
    var containrezult = document.getElementById('contain-rezult');
    containrezult.style.display="block";
    
}
    
    var btnrezult=document.getElementById('btnrezult');
    btnrezult.onclick=MyCalc;