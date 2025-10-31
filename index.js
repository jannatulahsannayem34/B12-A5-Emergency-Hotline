// console.log('nayem')
let copyCount = 0;
let clickCount = 0;
let historiesData = []
// function for icon
function getClickResult(id) {
    document.getElementById(id).addEventListener('click', function (e) {
        e.preventDefault();
        clickCount++;
        const clickResult = document.getElementById('click-result')
        clickResult.innerText = clickCount;
    })
}

//function for copy count
function getCopyCount(id) {
    document.getElementById(id).addEventListener('click', function (e) {
        e.preventDefault;
        const card = e.currentTarget.closest('.bg-white');
        const number = card.querySelector('.card-num').innerText;

        alert(` Number copied: ${number}`)
        navigator.clipboard.writeText(number);
        
        copyCount++;
        const clickResult = document.getElementById('copy-result-btn')
        clickResult.innerText = copyCount;
    })
}

// for call
function toCall(id) {
    document.getElementById(id).addEventListener('click', function (e) {
        e.preventDefault();
        const card = e.currentTarget.closest('.bg-white');
        const header = card.querySelector('.card-header').innerText;
        const number = card.querySelector('.card-num').innerText;

        const coinElement = document.getElementById('coin');
        const coinInt = parseInt(coinElement.innerText);
        if (coinInt < 20) {
            alert('❌ insufficient coin!!!Need 20 coins for further calling')
            return;
        }
        alert('📞 calling ' + header + ' ' + number + '... ');

        const availableCoin = coinInt - 20;
        coinElement.innerText = availableCoin;
        const data = {

            name: header,
            number: number,
            date: new Date().toLocaleTimeString()


        }
        historiesData.push(data);
        renderHistory();
    })
}

// function for inserting history
function renderHistory() {

    const historyContainer = document.getElementById('history-container');
    historyContainer.innerHTML = ''; // Clear old entries

    for (const data of historiesData) {
        const div = document.createElement('div');
        div.innerHTML = `<div class="flex justify-between items-center bg-[#FAFAFA] p-4 mx-4 mt-3 rounded-lg">


               <div>
                <h2 class="font-bold text-[18px]">${data.name}</h2>
                <p class="text-[#5C5C5C]">${data.number}</p>
               </div>
               <p class="text-sm text-gray-600">${data.date}</p>
              </div>
            `;
        historyContainer.appendChild(div);
    }
}
document.getElementById('clear-btn').addEventListener('click', function () {
    document.getElementById('history-container').innerHTML = '';
    return;

})

getClickResult('heart-1')
toCall('call-1')
getCopyCount('copy-1')


getClickResult('heart-2')
toCall('call-2')
getCopyCount('copy-2')

getClickResult('heart-3')
toCall('call-3')
getCopyCount('copy-3')

getClickResult('heart-4')
toCall('call-4')
getCopyCount('copy-4')

getClickResult('heart-5')
toCall('call-5')
getCopyCount('copy-5')

getClickResult('heart-6')
toCall('call-6')
getCopyCount('copy-6')

getClickResult('heart-7')
toCall('call-7')
getCopyCount('copy-7')

getClickResult('heart-8')
toCall('call-8')
getCopyCount('copy-8')

getClickResult('heart-9')
toCall('call-9')
getCopyCount('copy-9')


