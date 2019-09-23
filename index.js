function init() {
    //Event delegation - attaching event listener at top most level
    document.addEventListener('click', function (event) {
        if (event.target.dataset.cellId !== undefined) { // if the attribute exists...
            console.log(event.target.dataset.cellId)
        }
    });
}
