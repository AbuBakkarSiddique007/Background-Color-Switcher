const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        const colorId = e.target.id;
        let color;

        switch (colorId) {
            case 'grey':
                color = 'grey';
                break;
            case 'white':
                color = 'white';
                break;
            case 'blue':
                color = 'blue';
                break;
            case 'yellow':
                color = 'yellow';
                break;
            default:
                color = 'white'; // Default color if no match
        }

        body.style.backgroundColor = color;
    });
});
