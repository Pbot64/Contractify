window.MyCoolToken = {

    test: '',
    
    setOptions: function () {
        this.test = 'test';
    },
    
    init: function() {
    
        MyCoolToken.setOptions();
        
        console.log( MyCoolToken.test );
    
    },
    
}

MyCoolToken.init();