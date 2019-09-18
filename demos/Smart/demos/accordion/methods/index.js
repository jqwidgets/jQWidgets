window.onload = function () {
    const accordion = document.getElementById('accordion'),
        collapseBtn = document.getElementById('collapse'),
        expandBtn = document.getElementById('expand'),
        insertBtn = document.getElementById('insert'),
        updateBtn = document.getElementById('update'),
        removeBtn = document.getElementById('remove'),
        crudIndex = document.getElementById('crudIndex'),
        expandCollapseIndex = document.getElementById('expandCollapseIndex'),
        baseValue = 0;
	let insertCounter = 0;

    //Expand, Collapse
    collapseBtn.addEventListener('click', function () {
        const position = parseInt(expandCollapseIndex.value) || baseValue;
     
		accordion.collapse(position);
    });
    expandBtn.addEventListener('click', function () {
        const position = parseInt(expandCollapseIndex.value) || baseValue;
      
		accordion.expand(position);
    });

    //Insert, Update, Remove
	const updateButtons = function() {
		if (insertCounter === 3) {
			insertBtn.disabled = true;
		}
		else {
			insertBtn.disabled = false;
		}
		
		if (insertCounter === -3) {
			removeBtn.disabled = true;
		}
		else {
			removeBtn.disabled = false;
		}
	}
	
	
    insertBtn.addEventListener('click', function () {		
		insertCounter++;
	
        const position = parseInt(crudIndex.value) || baseValue;
        accordion.insert(position, { "label": "New label", "content": "New content" });
   
		updateButtons();
    });
 
    updateBtn.addEventListener('click', function () {
        const position = parseInt(crudIndex.value) || baseValue;
        accordion.update(position, { "label": "Updated Label", "content": "Updated Content" });
    });

    removeBtn.addEventListener('click', function () {
        const position = parseInt(crudIndex.value) || baseValue;
        accordion.remove(position);
		insertCounter--;
		
		updateButtons();
    });

}