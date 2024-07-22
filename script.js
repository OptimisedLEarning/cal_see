function add(a,b){
    return a+b
    }
  
  function sub(a,b){
          return a-b 
  
  }
  function mul(a,b){
      return a*b
  }
  function div(a,b){
   return a/b
  }
  

  
function operate( fir_var, operator ,sec_var){
   if (operator == "+"){
          return  add(fir_var,sec_var)
    }
      else if (operator == "-"){
          return sub(fir_var,sec_var)
    }
      else  if (operator == "*"){
           return mul(fir_var,sec_var)
    }
      else if (operator == "/" ){
          return div(fir_var,sec_var)
      }
      
  }
  
  
  
  window.onload = function () {

    var screen  = document.getElementById('screen');
    // Set the initial value to 0
    screen.value = "0";
    
    let first_num =0;
    
    let second_num =0; 
    
    let input_number = 0;   

    let theOperator=""; 

    let operatorClicked =false;


    const numbers = document.querySelectorAll(".operand"); 
    for (let i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener('click', function () {

            if (screen.value === "0" || operatorClicked) {
                screen.value = this.textContent;
                operatorClicked =false;
            } else {
               screen.value +=  this.textContent;
            }
            //parseFloat is used to convert it to numbers  
            
            input_number = parseFloat(screen.value);  
            // Updating the global variable
            
            window.input_number = input_number;


             if (theOperator != "") {
               
                screen.value = input_number  ;

                second_num = parseFloat(screen.value);
                
                window.second_num  = second_num;
                
            } else {
                // If no operator is selected, just update  first num  as input_number

                first_num = input_number;

                window.first_num  = first_num;
                

            }
        });
    }

      const operator = document.querySelectorAll(".operator");
  
      for ( let i = 0; i < operator.length; i++) {
          operator[i].addEventListener  ("click",function ()
          {       
             operatorClicked =true;

                theOperator =  this.textContent;
                
                first_num = input_number

                   
            
                // Updating the global variables
            window.theOperator = theOperator;
            window.first_num = first_num;
            window.input_number = input_number;

                });
           
      }; 

   
    
      const ac = document.querySelector(".clear");
      ac.addEventListener("click", function() {
            operatorClicked =false;
            screen.value=0;
            input_number=0
            theOperator ="";
            first_num=0; 
            second_num=0;

             // Update the global variables    
            window.input_number = input_number;
            window.theOperator = theOperator;
            window.first_num =first_num;
            window.second_num =second_num;
            
          
        },
       
      );
      
    const equal = document.querySelector(".equals");
        equal.addEventListener("click", function(){
                 let result = operate(first_num,theOperator,second_num);
                 result = Math.round(result * 100) / 1000;
                screen.value = result
                // result for future calculations
                
                first_num = result; // Store the 

                console.log(`After equals clicked: Result is ${result}`); 
                
                window .first_num=first_num;
            });
  





  }
  
 ;
  
    
     
  ;
  
  
  
  
    
  
  