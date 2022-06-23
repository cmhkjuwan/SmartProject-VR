AFRAME.registerComponent('thing-control', {
    schema: {
        isControl: {default: false}
    },

    init: function() {
        this.el.addEventListener('click', function(evt) {
            if(isControl) {
                isControl = false;
            } else {
                isControl = true;
            }
            this.el.classList.add('hand-tracking-controller');
        });
    }
});