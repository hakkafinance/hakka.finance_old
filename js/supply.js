const supply = document.getElementById('supply')

fetch('https://api.hakka.finance').then((res) => {
    return res.text()
}).then((res) => {
    supply.innerHTML = 'Circulating Supply: ' + res + ' HAKKA'
})