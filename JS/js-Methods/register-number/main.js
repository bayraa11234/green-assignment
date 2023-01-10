
//  registerein dugaaraar on sar odor huis oloh

        function niit(register){
            let eu = register.substr(0,1);
            let su = register.substr(1,1);
            let on = register.substr(2,2);
            let odor = register.substr(4, 2);
            let sar = register.substr(6,2);
            let h = register.substr(8,1);
            let odr = odor - 20;

            // let aimag;
            switch (eu) {
                case 'А':
                  aimag = "Архангай";
                  break;
                case 'Б':
                  aimag = "Баян-Өлгий";
                  break;
                case 'В':
                  aimag = "Баянхонгор";
                  break;
                case 'Г':
                  aimag = "Булган";
                  break;
                case 'Д':
                  aimag = "Говь-Алтай";
                  break;
                case 'Е':
                  aimag = "Дорноговь";
                  break;
                case 'Ж':
                  aimag = "Дорнод";
                  break;
                case 'З':
                  aimag = "Дундговь";
                  break;
                case 'И':
                  aimag = "Завхан";
                  break;
                case 'Й':
                  aimag = "Өвөрхангай";
                  break;
                case 'К':
                  aimag = " Өмнөговь";
                  break;
                case 'Л':
                  aimag = "Сүхбаатар";
                  break;
                case 'М':
                  aimag = "Сэлэнгэ";
                  break;
                case 'Н':
                  aimag = "Төв";
                  break;
                case 'О':
                  aimag = "Увс";
                  break;
                case 'П':
                  aimag = "Ховд";
                  break;
                case 'Р':
                  aimag = "Хөвсгөл";
                  break;
                case 'С':
                  aimag = "Хэнтий";
                  break;
                case 'Т':
                  aimag = "Дархан-Уул";
                  break;
                case 'Ф':
                  aimag = "Орхон"; 
                  break;
                case 'Х':
                  aimag = "Говьсүмбэр";
                  break;
                case 'У':
                  aimag = "Улаанбаатар хот"; 
                break;
                case 'Ц':
                  aimag = "Улаанбаатар хот";    
              }
              
            if(odor>20){
                if (h % 2 === 1) {
                    document.getElementById("demo").innerHTML =  `${aimag} аймгийн 20${on} оны ${odr} сарын ${sar} эрэгтэй`;
                                                 //  console.log(`${aimag} аймгийн 20${on} оны ${odr} сарын ${sar} эрэгтэй`);
                }
                else {
                    document.getElementById("demo").innerHTML =`${aimag} аймгийн 20${on} оны ${odr} сарын ${sar} эмэгтэй`;
                }
            }
            else if(odor<20){
                if (h % 2 === 1) {
                    document.getElementById("demo").innerHTML =`${aimag} аймгийн 19${on} оны ${odor} сарын ${sar} эрэгтэй`;

                }
                else {
                    document.getElementById("demo").innerHTML =`${aimag} аймгийн 19${on} оны ${odor} сарын ${sar} эмэгтэй`;
                }
            }
            }
            let a = prompt('registeriin dugaar');
            niit(a);