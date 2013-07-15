//MODEL
Ext.define('Helloworld.model.Main', {
    extend: 'Ext.data.Model',
    fields : [{name:'arriving', type:'boolean'}]
});

//CONTROLLER
Ext.define('Helloworld.controller.Main', {
    extend: 'Ext.app.Controller',
    refs: [
        {
            ref: 'mainPanel',
            selector: 'main'
        },
        {
            ref: 'maxLengthField',
            selector: 'main > toolbar > textfield'
        }
    ],
    init: function() {
        this.control({
            'main button#exitToggle': {
                toggle : this.onButtonChange
            },
            'main textfield#maxLength': {
                change : this.onMaxLengthChange
            },
            'main': {
                beforerender : this.onBeforePanelRendered
            }
        });
        this.model = new Helloworld.model.Main();
    },
    onButtonChange: function(button, state) {
        this.model.set('arriving', state);
        this.updateTitle();
    },
    onMaxLengthChange: function(){
        this.updateTitle();
    },
    onBeforePanelRendered: function() {
        this.getMaxLengthField().setValue(12);
        this.updateTitle();
    },
    updateTitle:function() {
        var maxLength = this.getMaxLengthField().getValue();
        var msg = (this.model.get('arriving') ? 'Goodbye World!' : 'Hello World!').substr(0, maxLength);
        this.getMainPanel().setTitle(msg);
    }
});

//VIEW
Ext.define('Helloworld.view.Main', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.main',
    title : '-',
    initComponent: function() {
        this.tbar = {
            items : [{
                itemId : 'exitToggle',
                text : 'Arriving',
                enableToggle: true
            },{
                itemId : 'maxLength',
                xtype : 'textfield',
                fieldLabel : 'Max Length'
            }]
        };
        this.callParent();
    }
});
