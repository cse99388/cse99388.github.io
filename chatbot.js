var questionNum = 0;	
var i=0;												
var question = '<h1>Try saying Hi...</h1>';				 

var output = document.getElementById('output');				
output.innerHTML = question;													
function bot() { 
    var input = document.getElementById("input").value;
    console.log(input);
    if (questionNum == 0) {
      output.innerHTML = '<h1>Hi </h1>';
      document.getElementById("input").value = "";   		
      question = '<h1>You can take up my survey and then you can ask questions to me(press enter to continue)</h1>';		    			
      setTimeout(timedQuestion, 1000);					
      }
     if (questionNum == 1) {
        output.innerHTML = '<h1>Okay let me start the survey</h1>';
        document.getElementById("input").value = "";   		
        question = '<h1>Your name please..</h1>';			    			
        setTimeout(timedQuestion, 1000);									
        }
    if (questionNum == 2) {
    output.innerHTML = '<h1>hello ' + input + '</h1>';
    document.getElementById("input").value = "";   		
    question = '<h1>On a scale of 5,rate your job searching experience on our website</h1>';			    			
    setTimeout(timedQuestion, 1000);									
    }

    else if (questionNum == 3) {
    output.innerHTML = '<h1>Thanks for your ' + (input) + ' star rating</h1>';
    document.getElementById("input").value = "";   
    question = '<h1>Did you find the job you wanted(y/n)?</h1>';					      	
    setTimeout(timedQuestion, 1500);
    }  
    else if (questionNum == 4) {
        document.getElementById("input").value = "";   
        question = '<h1>Rate your job applying experience on a scale of 5.</h1>';					      	
        setTimeout(timedQuestion, 1000);
        } 
        else if (questionNum == 5) {
            output.innerHTML = '<h1>Thanks for your ' + (input) + ' star rating</h1>';
            document.getElementById("input").value = "";   
            question = '<h1>Has the job classification made it easy to search jobs(y/n)?</h1>';					      	
            setTimeout(timedQuestion, 1500);
            }   
      else if (questionNum ==6) {
                document.getElementById("input").value = "";   
                question = '<h1>Rate your overall experience in our website on a scale of 5.</h1>';					      	
                setTimeout(timedQuestion, 1000);  
               }
               else if (questionNum ==7) {
                output.innerHTML = '<h1>Thanks for your ' + (input) + ' star rating</h1>';
                document.getElementById("input").value = "";   
                question = '<h1>Give your comments(if any) or else type "no" do not leave this blank </h1>';					      	
                setTimeout(timedQuestion, 1500);
                }   
        else if (questionNum == 8) {
                    output.innerHTML = '<p>Thank you! your response has been submitted.Now you can ask me a question.Try asking "who are you" and please do not use question mark.</p>';
                    document.getElementById("input").value = "";
        }
        else if (questionNum == 9) {
          if (input=='what is your name' ||input=='who are you'||input=='what are you')
          output.innerHTML = '<h1>I am forhire chatbot</h1>';
          else if (input=="who is your boss"||input=="whom do you work for"||input=="where are you working"||input=="where are you from"||input=="where do you work")
          output.innerHTML='<h1>I work for \'forhire\' job searching company</h1>'
          else if (input=="what are you doing")
          output.innerHTML='<h1>I am talking to you</h1>'
          else if (input=="what is forhire")
          output.innerHTML='<h1>It is a job searching site.You can rely on it, you are sure to get a job</h1>'
          else if (input=="who designed you"||input=="who created you"||input=="who made you")
          output.innerHTML='<h1>Rahul designed me.</h1>'
          else if (input=="sing a song"||input=="play some music")
          output.innerHTML='<h1>You can only ask questions to me.</h1>'
          else if (input=="who am i")
          output.innerHTML='<h1>you are my friend </h1>'
          else if (input=="tell me about forhire"||input=="talk about forhire")
          output.innerHTML='<p>Forhire is the best indian job searching site.I assure you that you will get your desired job.All the Best!! </p>'
          else
          output.innerHTML='<h1>sorry! i cannot understand your question.(please do not use question mark,in case you have used it)</h1>'
          document.getElementById("input").value = "";
          question = '<p>Now you can go on with questions like "where do you work","what are you doing","who am i","who made you","sing a song" or anything you like.If you feel like stopping you can close this tab.</p>';	
         
          setTimeout(timedQuestion, 2500);
}
else if (questionNum > 9) {
  if (input=='what is your name' ||input=='who are you'||input=='what are you')
  output.innerHTML = '<h1>I am forhire chatbot</h1>';
  else if (input=="who is your boss"||input=="whom do you work for"||input=="where are you working"||input=="where are you from"||input=="where do you work")
  output.innerHTML='<h1>I work for \'forhire\' job searching company</h1>'
  else if (input=="what are you doing")
  output.innerHTML='<h1>I am talking to you</h1>'
  else if (input=="what is forhire")
  output.innerHTML='<h1>It is a job searching site.You can rely on it, you are sure to get a job</h1>'
  else if (input=="who designed you"||input=="who created you"||input=="who made you")
  output.innerHTML='<h1>Rahul designed me.</h1>'
  else if (input=="sing a song"||input=="play some music")
  output.innerHTML='<h1>You can only ask questions to me.</h1>'
  else if (input=="who am i")
  output.innerHTML='<h1>you are my friend </h1>'
  else if (input=="tell me about forhire"||input=="talk about forhire")
  output.innerHTML='<p>Forhire is the best indian job searching site.I assure you that you will get your desired job.All the Best!! </p>'
  else
  output.innerHTML='<h1>Sorry! i cannot understand your question.(please do not use question mark,in case you have used it)</h1>'
  document.getElementById("input").value = "";
  question = '<p>Try "tell me about forhire" and keep going with questions like "where do you work","what are you doing","who am i","who made you","sing a song","what is forhire" or anything you like.If you feel like stopping you can close this tab.</p>';	
  
  setTimeout(timedQuestion, 2500);
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
