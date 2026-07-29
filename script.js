// ===============================
// PAGE NAVIGATION
// ===============================

const pages = [
    "welcomePage",
    "categoryPage",
    "phonePage",
    "messagePage",
    "funPage",
    "musicPage"
];

function showPage(id){

    pages.forEach(page=>{

        const el=document.getElementById(page);

        if(el){
            el.classList.remove("active");
        }

    });

    const target=document.getElementById(id);

    if(target){

        target.classList.add("active");

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    }

}

function showCategoryPage(){
    showPage("categoryPage");
}

function showPhonePage(){
    showPage("phonePage");
}

function showFunPage(){
    showPage("funPage");
}

// ===============================
// COUNTRY RULES
// ===============================

const countryRules={

BD:{
code:"880",
min:11,
max:11,
pattern:/^01\d{9}$/
},

US:{
code:"1",
min:10,
max:10,
pattern:/^[2-9]\d{9}$/
},

IN:{
code:"91",
min:10,
max:10,
pattern:/^[6-9]\d{9}$/
},

NP:{
code:"977",
min:10,
max:10,
pattern:/^9\d{9}$/
},

SA:{
code:"966",
min:9,
max:9,
pattern:/^5\d{8}$/
},

AE:{
code:"971",
min:9,
max:9,
pattern:/^5\d{8}$/
},

GB:{
code:"44",
min:10,
max:10,
pattern:/^7\d{9}$/
},

MY:{
code:"60",
min:9,
max:10,
pattern:/^1\d{8,9}$/
},

SG:{
code:"65",
min:8,
max:8,
pattern:/^[689]\d{7}$/
},

PK:{
code:"92",
min:10,
max:10,
pattern:/^3\d{9}$/
}

};
// ===============================
// COUNTRY RULES (CONTINUE)
// ===============================

countryRules.ID = {
    code: "62",
    min: 9,
    max: 12,
    pattern: /^8\d{8,11}$/
};

countryRules.PH = {
    code: "63",
    min: 10,
    max: 10,
    pattern: /^9\d{9}$/
};

countryRules.TH = {
    code: "66",
    min: 9,
    max: 9,
    pattern: /^[689]\d{8}$/
};

countryRules.JP = {
    code: "81",
    min: 10,
    max: 10,
    pattern: /^7\d{9}$/
};

countryRules.KR = {
    code: "82",
    min: 10,
    max: 10,
    pattern: /^1\d{9}$/
};

countryRules.CN = {
    code: "86",
    min: 11,
    max: 11,
    pattern: /^1\d{10}$/
};

countryRules.CA = {
    code: "1",
    min: 10,
    max: 10,
    pattern: /^[2-9]\d{9}$/
};

countryRules.AU = {
    code: "61",
    min: 9,
    max: 9,
    pattern: /^4\d{8}$/
};

countryRules.DE = {
    code: "49",
    min: 10,
    max: 11,
    pattern: /^1\d{9,10}$/
};

countryRules.FR = {
    code: "33",
    min: 9,
    max: 9,
    pattern: /^[67]\d{8}$/
};

// ===============================
// SHAKE
// ===============================

function shake(element){

    if(!element) return;

    element.classList.remove("shake");

    void element.offsetWidth;

    element.classList.add("shake");
}

// ===============================
// NORMALIZE PHONE
// ===============================

function normalizePhone(value, rule){

    let number = value.replace(/\D/g,"");

    if(number.startsWith("00")){
        number = number.substring(2);
    }

    if(number.startsWith("0")){
        return number;
    }

    if(number.startsWith(rule.code)){

        let local = number.substring(rule.code.length);

        if(!local.startsWith("0")){
            local = "0" + local;
        }

        return local;
    }

    return number;
  }
// ===============================
// PHONE VALIDATION
// ===============================

function nextPhoneStep(){

    const country=document.getElementById("country");
    const phone=document.getElementById("phone");
    const error=document.getElementById("numberError");

    if(!country||!phone||!error) return;

    error.textContent="";

    const selectedCountry=country.value;
    const rawNumber=phone.value.trim();

    if(!selectedCountry){

        error.textContent="Please select your country first.";
        shake(country);
        return;

    }

    if(!rawNumber){

        error.textContent="Please enter your phone number.";
        shake(phone);
        return;

    }

    const rule=countryRules[selectedCountry];

    if(!rule){

        error.textContent="Phone validation unavailable.";
        return;

    }

    const normalized=normalizePhone(rawNumber,rule);

    if(
        normalized.length<rule.min||
        normalized.length>rule.max
    ){

        error.textContent="Please enter a valid phone number.";
        shake(phone);
        return;

    }

    if(!rule.pattern.test(normalized)){

        error.textContent="Please enter a valid phone number.";
        shake(phone);
        return;

    }

    localStorage.setItem("selectedCountry",selectedCountry);
    localStorage.setItem("phoneNumber",normalized);

    showPage("messagePage");
}

// ===============================
// MESSAGE COUNTER
// ===============================

const messageBox=document.getElementById("message");
const messageCount=document.getElementById("messageCount");

if(messageBox){

    messageBox.addEventListener("input",()=>{

        const length=messageBox.value.length;

        if(messageCount){
            messageCount.textContent=`${length} / 500`;
        }

    });

}

// ===============================
// MESSAGE SUBMIT
// ===============================

function submitCustomMessage(){

    const message=document.getElementById("message");
    const error=document.getElementById("messageError");

    if(!message||!error) return;

    error.textContent="";

    if(!message.value.trim()){

        error.textContent="Please write your message.";
        shake(message);
        message.focus();
        return;

    }

    localStorage.setItem(
        "customMessage",
        message.value.trim()
    );

    showMusicPage();

      }
// ===============================
// FUN EXPERIENCE
// ===============================

function startFunExperience(){

    const amount=document.getElementById("funAmount");
    const phone=document.getElementById("funPhone");
    const amountError=document.getElementById("funError");
    const phoneError=document.getElementById("funPhoneError");

    if(!amount||!phone||!amountError||!phoneError){
        return;
    }

    amountError.textContent="";
    phoneError.textContent="";

    if(!amount.value){

        amountError.textContent="Please select an amount.";
        shake(amount);
        return;

    }

    const rawNumber=phone.value.trim();

    if(!rawNumber){

        phoneError.textContent="Please enter a phone number.";
        shake(phone);
        return;

    }

    const cleaned=rawNumber.replace(/[^\d+]/g,"");
    const digits=cleaned.replace(/\D/g,"");

    if(digits.length<10||digits.length>15){

        phoneError.textContent="Please enter a valid phone number.";
        shake(phone);
        return;

    }

    localStorage.setItem("funAmount",amount.value);
    localStorage.setItem("funPhone",digits);

    showMusicPage();

}

// ===============================
// FUN INPUT EVENTS
// ===============================

const funPhoneInput=document.getElementById("funPhone");

if(funPhoneInput){

    funPhoneInput.addEventListener("input",()=>{

        funPhoneInput.value=
        funPhoneInput.value.replace(/[^\d+]/g,"");

        const error=document.getElementById("funPhoneError");

        if(error){
            error.textContent="";
        }

    });

}

const funAmountSelect=document.getElementById("funAmount");

if(funAmountSelect){

    funAmountSelect.addEventListener("change",()=>{

        const error=document.getElementById("funError");

        if(error){
            error.textContent="";
        }

    });

          }
// ===============================
// MUSIC PAGE
// ===============================

function showMusicPage(){

    showPage("musicPage");

    setTimeout(()=>{
        playMainMusic();
    },350);

}

function playMainMusic(){

    const music=document.getElementById("music1");

    if(!music) return;

    music.pause();
    music.currentTime=0;

    music.play().catch(()=>{

        console.log("Browser requires user interaction.");

    });

}

// ===============================
// MUSIC BUTTON
// ===============================

let musicTriggered=false;

function toggleMusic(){

    if(musicTriggered) return;

    musicTriggered=true;

    const music1=document.getElementById("music1");
    const music2=document.getElementById("music2");
    const music3=document.getElementById("music3");
    const button=document.getElementById("offBtn");

    if(!music1||!music2||!music3||!button){
        return;
    }

    music1.pause();
    music1.currentTime=0;

    music2.pause();
    music3.pause();

    music2.currentTime=0;
    music3.currentTime=0;

    music2.play().catch(()=>{});

    setTimeout(()=>{
        music3.play().catch(()=>{});
    },1000);

    button.textContent="♫ 3× MUSIC PLAYING";
    button.disabled=true;

}
// ===============================
// PHONE INPUT CLEANING
// ===============================

const phoneInput=document.getElementById("phone");

if(phoneInput){

    phoneInput.addEventListener("input",()=>{

        phoneInput.value=
        phoneInput.value.replace(/[^\d+]/g,"");

        const error=document.getElementById("numberError");

        if(error){
            error.textContent="";
        }

    });

}

// ===============================
// COUNTRY CHANGE
// ===============================

const countrySelect=document.getElementById("country");

if(countrySelect){

    countrySelect.addEventListener("change",()=>{

        if(phoneInput){
            phoneInput.value="";
        }

        const error=document.getElementById("numberError");

        if(error){
            error.textContent="";
        }

    });

}

// ===============================
// START PAGE
// ===============================

document.addEventListener("DOMContentLoaded",()=>{

    showPage("welcomePage");

});
