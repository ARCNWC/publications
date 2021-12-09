if ( window.location !== window.parent.location )
{
    
    // The page is in an iFrames
    console.log("The page is in an iFrame");
    
    //function sleep(ms) {
    //    return new Promise(resolve => setTimeout(resolve, ms));
    // }

    function resize_parent() {
        // hide the header
        var elem = document.querySelector('#header-container');
        elem.style.display = 'none';

        //for (let i = 0; i < 5; i++) { 

        content_height = document.getElementById("wrapper").scrollHeight;
        footer_height = document.getElementsByClassName("foot")[0].scrollHeight;

        let message = { height: Number(content_height) + Number(footer_height) + Number(100), width: document.body.scrollWidth };	

        // window.top refers to parent window
        window.top.postMessage(message, "*");
        console.log(message);

    }

    // Add a listener to post to parent window the size of the screen. This is used
    // when displayed in an iframe and needs the dimensions to resize
    window.addEventListener('load', function() {

        resize_parent();

        setTimeout( function(){ resize_parent(); }, 1000); 

        setTimeout( function(){ resize_parent(); }, 5000); 

        //let message = { height: document.body.scrollHeight, width: document.body.scrollWidth };	
    
        //if ( window.location !== window.parent.location ) {        

        // // hide the header
        // var elem = document.querySelector('#header-container');
        // elem.style.display = 'none';

        // content_height = document.getElementById("wrapper").scrollHeight;
        // footer_height = document.getElementsByClassName("foot")[0].scrollHeight;

        // let message = { height: Number(content_height) + Number(footer_height) + Number(100), width: document.body.scrollWidth };	

        // // window.top refers to parent window
        // window.top.postMessage(message, "*");
        // console.log(message);

        //} else {
        //    console.log("Spurious onload")
        //}
    });

} 
else {
        
    // The page is not in an iFrame
    console.log("The page is not in an iFrame");
}




