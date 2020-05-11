var questionNum = 0;													
var question = '<h1>Your name please..</h1>';				 

var output = document.getElementById('output');				
output.innerHTML = question;													
function bot() { 
    var input = document.getElementById("input").value;
    console.log(input);

    if (questionNum == 0) {
    output.innerHTML = '<h1>hello ' + input + '</h1>';
    document.getElementById("input").value = "";   		
    question = '<h1>On a scale of 5,rate your job searching experience on our website</h1>';			    			
    setTimeout(timedQuestion, 1000);									
    }

    else if (questionNum == 1) {
    output.innerHTML = '<h1>Thanks for your ' + (input) + ' star rating</h1>';
    document.getElementById("input").value = "";   
    question = '<h1>Did you find the job you wanted(y/n)?</h1>';					      	
    setTimeout(timedQuestion, 1500);
    }  
    else if (questionNum == 2) {
        document.getElementById("input").value = "";   
        question = '<h1>Rate your job applying experience on a scale of 5.</h1>';					      	
        setTimeout(timedQuestion, 1000);
        } 
        else if (questionNum == 3) {
            output.innerHTML = '<h1>Thanks for your ' + (input) + ' star rating</h1>';
            document.getElementById("input").value = "";   
            question = '<h1>Has the job classification made it easy to search jobs(y/n)?</h1>';					      	
            setTimeout(timedQuestion, 1500);
            }   
      else if (questionNum == 4) {
                document.getElementById("input").value = "";   
                question = '<h1>Rate your overall experience in our website on a scale of 5.</h1>';					      	
                setTimeout(timedQuestion, 1000);  
               }
               else if (questionNum == 5) {
                output.innerHTML = '<h1>Thanks for your ' + (input) + ' star rating</h1>';
                document.getElementById("input").value = "";   
                question = '<h1>Give your comments(if any)</h1>';					      	
                setTimeout(timedQuestion, 1500);
                }   
        else if (questionNum == 6) {
                    output.innerHTML = '<h1>Thank you! your response has been submitted.Now you can quit this tab.</h1>';
        }
}
function timedQuestion() {
    output.innerHTML = question;
}


$(document).keypress(function(e) {
  if (e.which == 13) {
    bot();																						
    questionNum++;																		
  }
});
