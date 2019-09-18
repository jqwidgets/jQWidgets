window.onload = function () {
    const tree1 = document.getElementById('tree1');

    tree1.addEventListener('dragStart', function (event) {
        if (event.detail.items[0].label === 'Communities') {
            event.preventDefault();
        }
    });

    tree1.addEventListener('dragEnd', function (event) {
        if (event.detail.items[0].label === 'Financial services') {
            event.preventDefault();
            return;
        }

        if (!event.detail.targetTree) {
			const textBox = event.detail.dropTarget.closest('smart-multiline-text-box');

            if (textBox) {
                textBox.value = event.detail.items[0].label;
            }
        }
    });
}