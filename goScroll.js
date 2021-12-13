let goBtn = document.getElementById("go");
    aBtn = document.getElementById("menu-about"),
    pBtn = document.getElementById("menu-project"),
    cBtn = document.getElementById("menu-contact");

goBtn.addEventListener('click',function(ev){
    ev.preventDefault();
    document.getElementById('go').scrollIntoView({behavior: "smooth", block: "start"})
});
aBtn.addEventListener('click',function(ev){
    ev.preventDefault();
    document.getElementById('ABOUT').scrollIntoView({behavior: "smooth", block: "start"})
});
pBtn.addEventListener('click',function(ev){
    ev.preventDefault();
    document.getElementById('PROJECT').scrollIntoView({behavior: "smooth", block: "start"})
});
cBtn.addEventListener('click',function(ev){
    ev.preventDefault();
    document.getElementById('CONTACT').scrollIntoView({behavior: "smooth", block: "start"})
});