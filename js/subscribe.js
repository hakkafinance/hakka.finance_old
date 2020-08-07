const subscribe = document.getElementById('subscribe')
const tag = 'Hakka'
subscribe.onclick = () => {
    const email = document.getElementById('email').value
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        fetch(`https://docs.google.com/forms/d/e/1FAIpQLSdYSQHSNhp2QjqVrlHa7I5HsevbH0YhhaO8j4hH60BGEb3SpA/formResponse?entry.568860575=${email}&entry.1019516610=${tag}`, { mode: 'no-cors' })
            .then((response) => {
                return response.text();
            }).then((text) => {
                alert('Subscribe success!')
                document.getElementById('email').value = ''
            }).catch((err) => {
                console.log(err)
                alert('Something went wrong!')
            })
    } else {
        alert('Not a valid email address!')
    }
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos || currentScrollPos < 100) {
    document.getElementById("nav").style.top = "0";
    } else {
    document.getElementById("nav").style.top = "-52px";
    }
    prevScrollpos = currentScrollPos;
}


var sakura = new Sakura('.container', {
    colors: [
        {
            gradientColorStart: 'rgba(255, 255, 255, 1)',
            gradientColorEnd: 'rgba(255, 230, 240, 0.6)',
            gradientColorDegree: 120,
        },
        {
            gradientColorStart: 'rgba(255, 255, 255, 1)',
            gradientColorEnd: 'rgba(255, 230, 240, 0.6)',
            gradientColorDegree: 120,
        },
        {
            gradientColorStart: 'rgba(255, 255, 255, 1)',
            gradientColorEnd: 'rgba(255, 230, 240, 0.6)',
            gradientColorDegree: 120,
        },
    ],
    delay: 200,
});