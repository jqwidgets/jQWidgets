window.onload = function () {
    const cards = document.getElementsByTagName('smart-card'),
        cardContainer = cards[0].parentElement;

    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];

        card.dataSource = { content: 'Swipe left/right' };
        card.addEventListener('swipeleft', function (event) {
            this.classList.add('swipe-left');
        });
        card.addEventListener('swiperight', function (event) {
            this.classList.add('swipe-right');
        });
        card.addEventListener("animationend", function () {
            cardContainer.removeChild(this);
        });
    }
}