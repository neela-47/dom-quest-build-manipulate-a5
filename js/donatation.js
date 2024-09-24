
// part-1 Calculation
document.getElementById('donate-noakhali')
.addEventListener('click', function(event){
    event.preventDefault();

    const donateMoney = getInputFieldValue('noakhali-input-money');
    console.log('donate money', donateMoney);
    if(typeof donateMoney !== NaN && typeof donateMoney !== 'string' && donateMoney >= 0){
        const balance = getTextValueById('noakhali-total-donation');
        const newBalance = balance + donateMoney;
        document.getElementById('noakhali-total-donation').innerText= newBalance;
    
        const myMoney = getTextValueById('my-money');
        const myNewMoney = myMoney - donateMoney;
       document.getElementById('my-money').innerText= myNewMoney;
        
    //    alert('successful');
    my_modal_1.show();
       

        const div = document.createElement('div');
       div.innerHTML=`
       <div class="border-[2px] border-solid border-black rounded-xl pl-5 py-3 mb-2">
        <p class="font-bold text-[1.25rem]">${donateMoney} Taka is Donated for famine-2024 at Noakhali, Bangladesh </p>
        <p>Date:
      
        ${new Date().toLocaleString('en-US', {
            timeZone: 'Asia/Dhaka',
            timeStyle: 'medium',
            dateStyle: 'full'
           })}

       
      
        </p>

       </div>

        `;

        const history= document.getElementById('show-transaction-history');
        history.insertBefore(div , history.firstChild);
      
        
    }
    else
    {
        alert("Donation Failed. Please try again.")
    }
    
       
    
    
});


// part 2 calculation
document.getElementById('donate-feni')
.addEventListener('click', function(event){
    event.preventDefault();

    const donateMoney = getInputFieldValue('input-feni-money');
    console.log('donate money', donateMoney);
    
    if(typeof donateMoney !== NaN && typeof donateMoney !== 'string' && donateMoney >= 0){
        const balance = getTextValueById('feni-total-donation');
        const newBalance = balance + donateMoney;
        document.getElementById('feni-total-donation').innerText= newBalance;
    
        const myMoney = getTextValueById('my-money');
        const myNewMoney = myMoney - donateMoney;
        document.getElementById('my-money').innerText= myNewMoney;

        my_modal_1.show();
       

      const div = document.createElement('div');
       div.innerHTML=`
       <div class="border-[2px] border-solid border-black rounded-xl pl-5 py-3 mb-2">
        <p class="font-bold text-[1.25rem]">${donateMoney} 6500 Taka is Donated for Flood Relief in Feni,Bangladesh </p>
        <p>Date:
      
        ${new Date().toLocaleString('en-US', {
            timeZone: 'Asia/Dhaka',
            timeStyle: 'medium',
            dateStyle: 'full'
           })}

       
      
        </p>

       </div>

        `;

        const history= document.getElementById('show-transaction-history');
        history.insertBefore(div , history.firstChild);
 
    }
    else
    {
        alert("Donation Failed. Please try again.")
    }
    
});

// part 3 calculation

document.getElementById('quata-donation')
.addEventListener('click', function(event){
    event.preventDefault();

    const donateMoney = getInputFieldValue('quata-input-money');
    console.log('donate money', donateMoney);
    
    if(typeof donateMoney !== NaN && typeof donateMoney !== 'string' && donateMoney >= 0){
        const balance = getTextValueById('quata-total-donation');
        const newBalance = balance + donateMoney;
        document.getElementById('quata-total-donation').innerText= newBalance;
    
        my_modal_1.show();
       
        const div = document.createElement('div');
        div.innerHTML=`
        <div class="border-[2px] border-solid border-black rounded-xl pl-5 py-3 mb-2">
         <p class="font-bold text-[1.25rem]">${donateMoney} 15500 Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh </p>
         <p>Date:
       
         ${new Date().toLocaleString('en-US', {
             timeZone: 'Asia/Dhaka',
             timeStyle: 'medium',
             dateStyle: 'full'
            })}
 
        
       
         </p>
 
        </div>
 
         `;
 
         const history= document.getElementById('show-transaction-history');
         history.insertBefore(div , history.firstChild);
    }
    else
    {
        alert("Donation Failed. Please try again.")
    }
    
});

// part 4 calculation

document.getElementById('cancer-donation')
.addEventListener('click', function(event){
    event.preventDefault();

    const donateMoney = getInputFieldValue('cancer-input-money');
    console.log('donate money', donateMoney);
    
    if(typeof donateMoney !== NaN && typeof donateMoney !== 'string' && donateMoney >= 0){
        const balance = getTextValueById('cancer-total-donation');
        const newBalance = balance + donateMoney;
        document.getElementById('cancer-total-donation').innerText= newBalance;
    
        my_modal_1.show();
       
        const div = document.createElement('div');
        div.innerHTML=`
        <div class="border-[2px] border-solid border-black rounded-xl pl-5 py-3 mb-2">
         <p class="font-bold text-[1.25rem]">${donateMoney} Taka is Donated for cancer patients, Bangladesh </p>
         <p>Date:
       
         ${new Date().toLocaleString('en-US', {
             timeZone: 'Asia/Dhaka',
             timeStyle: 'medium',
             dateStyle: 'full'
            })}
          </p>
 
        </div>
 
         `;
 
         const history= document.getElementById('show-transaction-history');
         history.insertBefore(div , history.firstChild);
    }
    else
    {
        alert("Donation Failed. Please try again.")
    }
    
});

// part 5 calculation

document.getElementById('gaza-donation')
.addEventListener('click', function(event){
    event.preventDefault();

    const donateMoney = getInputFieldValue('gaza-input-money');
    console.log('donate money', donateMoney);
    
    if(typeof donateMoney !== NaN && typeof donateMoney !== 'string' && donateMoney >= 0){
        const balance = getTextValueById('gaza-total-donation');
        const newBalance = balance + donateMoney;
        document.getElementById('gaza-total-donation').innerText= newBalance;
    
        my_modal_1.show();
       
        const div = document.createElement('div');
       div.innerHTML=`
       <div class="border-[2px] border-solid border-black rounded-xl pl-5 py-3 mb-2">
        <p class="font-bold text-[1.25rem]">${donateMoney} Taka is Donated for Gaza, Bangladesh </p>
        <p>Date:
      
        ${new Date().toLocaleString('en-US', {
            timeZone: 'Asia/Dhaka',
            timeStyle: 'medium',
            dateStyle: 'full'
           })}

       
      
        </p>

       </div>

        `;

        const history= document.getElementById('show-transaction-history');
        history.insertBefore(div , history.firstChild);
    }
    else
    {
        alert("Donation Failed. Please try again.")
    }
    
});

// part 6 calculation

document.getElementById('food-donation')
.addEventListener('click', function(event){
    event.preventDefault();

    const donateMoney = getInputFieldValue('food-input-money');
    console.log('donate money', donateMoney);
    
    if(typeof donateMoney !== NaN && typeof donateMoney !== 'string' && donateMoney >= 0){
        const balance = getTextValueById('food-total-donation');
        const newBalance = balance + donateMoney;
        document.getElementById('food-total-donation').innerText= newBalance;
    
        my_modal_1.show();
       
        const div = document.createElement('div');
       div.innerHTML=`
       <div class="border-[2px] border-solid border-black rounded-xl pl-5 py-3 mb-2">
        <p class="font-bold text-[1.25rem]">${donateMoney} Taka is Donated for preventing for food, Bangladesh </p>
        <p>Date:
      
        ${new Date().toLocaleString('en-US', {
            timeZone: 'Asia/Dhaka',
            timeStyle: 'medium',
            dateStyle: 'full'
           })}

       
      
        </p>

       </div>

        `;

        const history= document.getElementById('show-transaction-history');
        history.insertBefore(div , history.firstChild);
    }
    else
    {
        alert("Donation Failed. Please try again.")
    }
    
});