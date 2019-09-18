window.onload = function () {
    const splitter = document.querySelector('smart-splitter');

    document.getElementById('appendItem').addEventListener('click', function () {
		if (splitter.items.length === 0) {
			return;
		}

	    const item = document.createElement('smart-splitter-item');
		
		item.innerHTML = 'New Item Content';
        splitter.appendChild(item);
    });

    document.getElementById('insertBefore').addEventListener('click', function () {
 		if (splitter.items.length === 0) {
			return;
		}
        const item = document.createElement('smart-splitter-item');

        item.innerHTML = 'New Item Content';
        splitter.insertBefore(item, splitter.items[0]);
    });

    document.getElementById('removeItem').addEventListener('click', function () {
		if (splitter.items.length === 0) {
			return;
		}
        splitter.removeChild(splitter.items[0]);
    });

    document.getElementById('insertButton').addEventListener('click', function () {
		if (splitter.items.length === 0) {
			return;
		}
        splitter.insert(0, { content: 'Newly Inserted Item' });
    });

    document.getElementById('removeButton').addEventListener('click', function () {
		if (splitter.items.length === 0) {
			return;
		}
		
		splitter.remove(0);
    });

    document.getElementById('showSplitterBar').addEventListener('click', function () {
		if (splitter.items.length === 0) {
			return;
		}
        splitter.showBar(0);
    });

    document.getElementById('hideSplitterBar').addEventListener('click', function () {
        splitter.hideBar(0);
    });

    document.getElementById('collapseItem').addEventListener('click', function () {
        splitter.collapse(0);
    });

    document.getElementById('expandItem').addEventListener('click', function () {
        splitter.expand(0);
    });

    document.getElementById('lockSplitterItem').addEventListener('click', function () {
        splitter.lockItem(0);
    });

    document.getElementById('unlockSplitterItem').addEventListener('click', function () {
        splitter.unlockItem(0);
    });
}