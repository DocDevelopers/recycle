
/*
	Author: Francisco Castellanos
	
	If you have any questions, please feel free to ask.
*/
var testvm = function()
{	
	// You can use the keyword this. I just like making this var to make sure that i'm talking about THIS. LOL.
	var self = this;

	/* 
		You should always declare your ko arrays or vars at the beginning
		because in the past I have had bugs that were because the var was not
		declared at the beginning of a program.

	*/
	self.items = ko.observableArray([]);

	//HTTP Magic. Just copy/paste or google how it works
	
	var request = new XMLHttpRequest();
 	request.open('POST', 'http://api.docdevelopers.com/recycle/services/json-rpc/');
 	
 	/* 
 		onreadystatechange is like a status light it has 4 stages.
 		here I am saying that when the ready state changes, to run
 		that function

 	*/
 	request.onreadystatechange = function(){
        /*
        	If the readyState is 4(which means request finished and response is ready)   
        	also makes sure that the response code from the server is 200.
        */
        if(request.readyState == 4 && request.status == 200 )
        {
        	//request.responseText is the payload or the data that is returned from the server
        	//Since we will be getting JSON data then I parse it with the json parser.
            parsed = JSON.parse(request.responseText);

            //Then I put the array of recycled items array into my ko array.
            self.items(parsed.result.recycled);
        }
            
    }
    
    //Send the request to my server.    
    request.send();
             


}