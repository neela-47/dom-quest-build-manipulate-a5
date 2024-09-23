let btnDonate = document.getElementById('btn-donate')
.addEventListener('click', function(){
 btnDonate= document.getElementById('btn-donate').classList.add('bg-[#B4F461]');
 btnHistory= document.getElementById('btn-history').classList.remove('bg-[#B4F461]');
});


let btnHistory = document.getElementById('btn-history')
.addEventListener('click', function() {
btnHistory = document.getElementById('btn-history').classList.add('bg-[#B4F461]');
btnDonate= document.getElementById('btn-donate').classList.remove('bg-[#B4F461]');   
})