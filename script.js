window.onload = function(){
    
    const anchors = document.querySelectorAll('a[href*="#"]');

    for (let anchor of anchors){
        anchor.addEventListener('click',function(e){
            e.preventDefault();
            const anchorID = anchor.getAttribute('href');
            document.querySelector('' + anchorID).scrollIntoView({
                behavior:"smooth",
                block:"start"
            });
        });
    }    
}
