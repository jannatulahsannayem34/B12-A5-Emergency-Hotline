// console.log('nayem')
let clickCount = 0;
// function for icon
function getClickResult(id) {
    document.getElementById(id).addEventListener('click', function (e) {
        e.preventDefault();
        clickCount++;
        const clickResult = document.getElementById('click-result')
        clickResult.innerText = clickCount;
    })
}

// for call
document.getElementById('call-1').addEventListener('click',function(){
   
    const header = document.getElementById('header').innerText;
    const number = document.getElementById('num').innerText;
    alert('📞 calling '+ header +' '+  number + '... ');
    

})



getClickResult('heart-1')
getClickResult('heart-2')
getClickResult('heart-3')
getClickResult('heart-4')
getClickResult('heart-5')
getClickResult('heart-6')
getClickResult('heart-7')
getClickResult('heart-8')
getClickResult('heart-9')


