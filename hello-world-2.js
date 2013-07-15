/* VIEW MODEL */
glu.defModel('helloworld.main',{
    arriving : true, //DATA
    maxChars : 10,   //APP STATE
    message$: function() { //DERIVED PROPERTY
        return (this.arriving ? "Hello World!" : "Goodbye World!").substr(0, this.maxChars);
    }
});

/* VIEW */
glu.defView('helloworld.main',{
    title: '@{message}',
    tbar : [{
        text : 'Arriving',
        enableToggle:true,
        pressed : '@{arriving}'
    }, {
        xtype: 'textfield',
        fieldLabel:'Max Characters',
        value:'@{maxChars}'
    }]
});
