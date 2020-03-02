//Pull in all the dom elements we need
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const zip = document.getElementById('zip');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const phoneNumber = document.getElementById('phoneNumber')


const body = document.getElementById('body')
const paletteOne = document.getElementById('paletteOne')
const paletteTwo = document.getElementById('paletteTwo')
const paletteThree = document.getElementById('paletteThree')
const heading = document.getElementsByTagName('H2')
const submitBtn = document.getElementById('submitBtn')


//FUNCTIONS
//show input error message

/*function showError(input,message){
    //outline input with red
    const formControl = input.parentElement; //So we can access every single input's elements
    formControl.className = 'form-control error'; // adding the classes to the form control
    const small = formControl.querySelector('small') //selecting the small tag..maybe we can use document in lieu of formControl...research
    small.innerText = message;
}*/

//show input error message as arrow functions

const showError = (input, message) => {
    //outline input with red
    const formControl = input.parentElement; //So we can access every single input's elements
    formControl.className = 'form-control error'; // adding the classes to the form control
    const small = formControl.querySelector('small') //selecting the small tag..maybe we can use document in lieu of formControl...research
    small.innerText = message;
}



//show success FUNCTION
/*function showSuccess(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
   
}*/

//show success FUNCTION as arrow function

const showSuccess = (input, message) => {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//function to make the first letter uppercase
/*function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);  //Make the first letter uppercase 
}*/

//function to make the first letter uppercase as arrow function

const getFieldName = input =>{
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);  //Make the first letter uppercase 
}


// function-check required fields
/*function checkRequired(inputArray){
    inputArray.forEach(input => {   //es6
        //console.log(field.value)
        //for each value in the array we want to check if a value is there
        if(input.value.trim() === ''){
            showError(input, `${getFieldName(input)} is required`)
        } else{
            showSuccess(input, 'Hooray')
        }
    });
}*/

// function-check required fields as arrow function

const checkRequired = inputArray =>{
    inputArray.forEach(input => {   //es6
        //console.log(field.value)
        //for each value in the array we want to check if a value is there
        if(input.value.trim() === ''){
            showError(input, `${getFieldName(input)} is required`)
        } else{
            showSuccess(input, 'Hooray')
        }
    });
}

//check input length - function
/*function checkLength(input, min, max){
    if(input.value.length < min){
        showError(input, `${getFieldName(input)} must be at least ${min}`)

    }
      else if(input.value.length > max){
          showError(input,`${getFieldName(input)} must be less than ${max} characters` )
      } else{
          showSuccess(input)
      }
    }*/

    //check input length - function as arrow function
    const checkLength = (input, min, max) => {
        if(input.value.length < min){
            showError(input, `${getFieldName(input)} must be at least ${min}`)
    
        }
          else if(input.value.length > max){
              showError(input,`${getFieldName(input)} must be less than ${max} characters` )
          } else{
              showSuccess(input)
          }
    }

//check email is valid - function
/*function checkEmail(input){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   if(re.test(input.value)){
    showSuccess(input)
   }
   else{
      showError(input, 'Email is not valid')
   }
}*/

//check email is valid - function as arrow function

const checkEmail = input => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value)){
     showSuccess(input)
    }
    else{
       showError(input, 'Email is not valid')
    }
}


// function to check phone number
/*function checkPhoneNumber(input){
    //const re = /^[0-9]{0,10}$/gm
    const re = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/
   if(re.test(input.value)){
    showSuccess(input)
   }
   else{
      showError(input, 'Phone Number is not valid')
   }
}*/

// function to check phone number as phone number as arrow function
const checkPhoneNumber = input =>{
       //const re = /^[0-9]{0,10}$/gm
       const re = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/
       if(re.test(input.value)){
        showSuccess(input)
       }
       else{
          showError(input, 'Phone Number is not valid')
       }
}


function checkZip (input){
    const re = /(^\d{5}$)|(^\d{5}-\d{4}$)/
    if(re.test(input.value)){
     showSuccess(input)
    }
    else{
       showError(input, 'Zip is not valid')
    }
}


/*function checkPassWord(input1, input2){
    if(input1.value!== input2.value){
        showError(input2, 'Passwords do not match')
      
        
    } else if 
        (input1.value === input2.value)
        showSuccess(input1)
}*/

const checkPassWord = (input1, input2) =>{
    if(input1.value!== input2.value){
        showError(input2, 'Passwords do not match')
      
        
    } else if 
        (input1.value === input2.value)
        showSuccess(input1)
}

//Event Listeners


form.addEventListener('submit', function(e){
    e.preventDefault()
    checkRequired([username, email, password, password2])&&
    checkLength(username, 3, 15)
    checkLength(password, 3, 25)
    checkEmail(email)
    checkPassWord(password, password2)
    checkPhoneNumber(phoneNumber)
    checkZip(zip)
})

paletteOne.addEventListener('click', function(e){
    e.preventDefault()
    body.style.backgroundColor = 'blanchedalmond'
    form.style.backgroundColor = '#010a43'
    heading[0].style.color = 'white'
    submitBtn.style.backgroundColor= '#ff9d9d'
})

paletteTwo.addEventListener('click', function(e){
    e.preventDefault()
    body.style.backgroundColor = '#ededed'
    form.style.backgroundColor = '#ffa41b'
    heading[0].style.color = '#ff5151'
    submitBtn.style.backgroundColor= '#9818d6'
})

paletteThree.addEventListener('click', function(e){
    e.preventDefault()
    body.style.backgroundColor = '#f76c5e'
    form.style.backgroundColor = '#f5dd90'
    heading[0].style.color = '#586ba4'
    submitBtn.style.backgroundColor= '#324376'
})






