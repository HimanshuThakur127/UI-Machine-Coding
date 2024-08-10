const starContainer = document.querySelector('#stars');
const stars = starContainer.children;
starContainer.addEventListener('mouseout', (e) => {
    for(let elm of stars) {
        if(elm.classList.contains('clicked')) return;       
        elm.classList.replace("star-fill", "star");
    } 
    document.querySelector('#displayStar').innerHTML = 0; 
})
starContainer.addEventListener('mouseover', (e) => {
    if(e.target.id === 'stars') return;
    for(let elm of stars) {
        if(elm.classList.contains('star')){
            elm.classList.replace("star", "star-fill");
        }
       if(elm === e.target) return;
    }
})
starContainer.addEventListener('click', (e) => {
    if(e.target.id === 'stars') return;
    if(e.target.classList.contains('clicked')){
        for(let elm of stars){
            elm.classList.remove('clicked');
        }
        return;
    }
    let s = 0;
    for(let elm of stars){
        elm.classList.add("clicked");
        s+=1;
        if(elm === e.target) {
            document.querySelector('#displayStar').innerHTML = s;
            return;
        } 
            
    }
});