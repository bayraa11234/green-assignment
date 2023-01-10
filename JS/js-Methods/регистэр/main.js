
var r = 'СМ03322616';

function isCorrectReg(register){
    let useg = r.substr(0,2);
    let too = r.substr(2,9);
    if(r.length === 10 && useg.length === 2 && useg !== Number && too.length === 8){
        console.log(r);
    }
    else{
        console.log('buruu baina bandi min');
    }
}
isCorrectReg();

function getGender(register){
    let huis = r.substr(8,1);
    if(huis%2===0){
        console.log('emegtei');
    }
    if(huis%2===1){
        console.log('eregtei');
    }
    else{
        console.log('huis buruu baina');
    }
}
// getGender();

function getBirthDay(register){
    let odor = r.substr(6, 2);
    if(0<odor && odor<=31){
        console.log(odor);
    }
    else{
        console.log('registeree mddumu malaa');
    }
}
// getBirthDay();

function getBirthRegion(register){
    let ehniiUseg = r.substr(0, 1);

    switch (ehniiUseg) {
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
        break;
        default:
          aimag ="aimgiin useg buruu bainaa"  
      }
      console.log(aimag);
};
// getBirthRegion();

function getRegisterInfo(register){
    return`${getBirthRegion()} aimgiin ${getBirthDay()} dnii ${getGender()}`
}
getRegisterInfo();
