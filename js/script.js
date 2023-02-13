//variables
var home = document.getElementById('home-icon');
var bio = document.getElementById('bio-icon');
var pic = document.getElementById('pic-icon');

var homecard = document.getElementById('homecard');
var biocard = document.getElementById('biocard');
var piccard = document.getElementById('piccard');
homecard = 'ontop';

//functions
fetch('https://whois.fdnd.nl/api/v1/member/salwa-rm').then((data) =>{
    //console.log(data);
    return data.json();
}) .then((completedata)=>{
    console.log(completedata.member.id);
    document.getElementById('bio').innerHTML= completedata.member.bio.html;
    document.getElementById('picture').src= completedata.member.avatar;

}).catch((err)=>{
    console.log(err);
})

function klikHome(){
    document.querySelector('#homecard').classList.add('card1');
    homecard = 'toggled';
    document.querySelector('#homecard').classList.remove('card2');
    document.querySelector('#piccard').classList.add('card2');
    document.querySelector('#biocard').classList.remove('card1');

    let myAudio = document.querySelector('#audio')
myAudio.play()
}

function klikBio(){
    document.querySelector('#biocard').classList.add('card1');
    biocard = 'toggled';
    document.querySelector('#biocard').classList.remove('card3');

    document.querySelector('#homecard').classList.add('card2');
    document.querySelector('#piccard').classList.add('card3');
    
    let myAudio = document.querySelector('#audio')
    myAudio.play()
}

function klikPic(){
    document.querySelector('#piccard').classList.add('card1');
    piccard = 'toggled';
    document.querySelector('#piccard').classList.remove('card2');
    document.querySelector('#piccard').classList.remove('card3');

    document.querySelector('#homecard').classList.add('card2');
    document.querySelector('#biocard').classList.add('card3');

    let myAudio = document.querySelector('#audio')
        myAudio.play()
    /*piccard = 'ontop';
    document.querySelector('#piccard').classList.add('card1');

    if(homecard == 'ontop'){
        document.querySelector('#piccard').classList.add('card1');
        document.querySelector('#homecard').classList.add('card2');
        document.querySelector('#biocard').classList.add('card3');
    } else if(biocard == 'ontop'){
        document.querySelector('#piccard').classList.add('card1');
        document.querySelector('#biocard').classList.add('card2');
        document.querySelector('#homecard').classList.add('card3');
    } */

console.log();
}



//eventListeners
home.addEventListener('click', klikHome);
bio.addEventListener('click', klikBio);
pic.addEventListener('click', klikPic);
