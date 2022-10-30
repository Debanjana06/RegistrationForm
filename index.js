let globalIsSubmited = false

function validate(isSubmit=false)
{
   let firstName = document.getElementById('first-name').value
   
   let lastName = document.getElementById('last-name').value
  

   let email = document.getElementById('email').value
   

   let phone = document.getElementById('phoneNum').value
  

   let gender = document.getElementById('gender')


   let country = document.getElementById('country').value
   

   let error = false
   
   if(isSubmit)
   {
      globalIsSubmited = true
   }
 if(globalIsSubmited )
  {
    let fname=/^[A-Za-z]+$/
      if(firstName.length >=3 && firstName.match(fname)){
         document.getElementById('first-name-valid').style.display='block'
         document.getElementById('first-name-invalid').style.display='none'
      }else{
         document.getElementById('first-name-valid').style.display='none'
         document.getElementById('first-name-invalid').style.display='block'
         error = true
      }

      let lname=/^[A-Za-z]+$/
      if(lastName.length >=3 && lastName.match(lname)){
         document.getElementById('last-name-valid').style.display='block'
         document.getElementById('last-name-invalid').style.display='none'
      }
      else{
         document.getElementById('last-name-valid').style.display='none'
         document.getElementById('last-name-invalid').style.display='block'
         error = true
      }

      if(email.indexOf(" ")!=0 &&
         email.includes('@') && 
         email.includes('.') && 
         email.indexOf('@')!=0 && 
         email.length - email.lastIndexOf('.') >2 &&  email.length - email.lastIndexOf('.') <=4 &&
         email.charAt(email.length-1)!= '.')
      {
         document.getElementById('email-valid').style.display='block'
         document.getElementById('email-invalid').style.display='none'
      }
      else{
         document.getElementById('email-valid').style.display='none'
         document.getElementById('email-invalid').style.display='block'
         error = true
      }

      
      let phoneNumber=parseInt(phone)
      if(phone.length===10 && !isNaN(phoneNumber) && phone.charAt(0)>=6){
         document.getElementById('phone-valid').style.display='block'
         document.getElementById('phone-invalid').style.display='none'
      }
      else{
         document.getElementById('phone-valid').style.display='none'
         document.getElementById('phone-invalid').style.display='block'
         error = true
      }
      let genderRadio=document.getElementsByName('gender-radio')
      let valid=false
      for(let i=0;i<genderRadio.length;i++){
        if(genderRadio[i].checked)
        {
             valid=true
             break
        }
    }
        if(valid)
        {
            document.getElementById('gender-valid').style.display='block'
            document.getElementById('gender-invalid').style.display='none'
        }
      else{
            document.getElementById('gender-valid').style.display='none'
            document.getElementById('gender-invalid').style.display='block'
            error = true
       }
        
      
       if(country != 'None')
       {
          document.getElementById('state-valid').style.display='block'
          document.getElementById('state-invalid').style.display='none'
       }
       else{
          document.getElementById('state-valid').style.display='none'
          document.getElementById('state-invalid').style.display='block'
          error = true
       }
    

    
      if(!error)
      {
         alert('Your details have been saved successfully!')

      document.getElementById('registration-form').reset()

         let validFeedback=document.getElementsByClassName('valid-feedback')
         for(let i=0;i<validFeedback.length;i++){
            validFeedback[i].style.display='none'
         }
         let invalidFeedback=document.getElementsByClassName('invalid-feedback')
         for(let i=0;i<invalidFeedback.length;i++){
            invalidFeedback[i].style.display='none'
         }
      }
   }
}