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
function toCall(id) {
    document.getElementById(id).addEventListener('click', function () {
        const header = document.getElementById('header').innerText;
        const number = document.getElementById('num').innerText;
        alert('📞 calling ' + header + ' ' + number + '... ');
        const coinElement = document.getElementById('coin');
        const coinInt = parseInt(coinElement.innerText);
        if (coinInt < 20) {
            alert('❌ insufficient coin!!!')
            return;
        }
        
        const availableCoin = coinInt - 20;
        coinElement.innerText = availableCoin;
    })

}



// for 1
getClickResult('heart-1')
toCall('call-1')


getClickResult('heart-2')
toCall('call-2')

getClickResult('heart-3')
toCall('call-3')

getClickResult('heart-4')
toCall('call-4')

getClickResult('heart-5')
toCall('call-5')

getClickResult('heart-6')
toCall('call-6')

getClickResult('heart-7')
toCall('call-7')

getClickResult('heart-8')
toCall('call-8')

getClickResult('heart-9')
toCall('call-9')

