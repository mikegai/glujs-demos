glu.defModel('examples.assets.main', {
    sliceCounter:1,
    options:{
        mtype:'options'
    },
    assetSetList:{
        mtype:'activatorlist',
        autoParent:true,
        focusProperty:'assetSetWithFocus'
    },
    assetSetWithFocus: {mtype:'assetSet', name:'dummy'},
    title$: function(){
        return this.assetSetWithFocus.name;
    },
    detail:{ mtype:'asset' },
    init:function(){
        this.cloneSet(); //clone dummy asset set
    }    
}
glu.defModel('examples.assets.options', {
    warnings : true,
    offMaintenanceWarning : false,
    missingWarning : false,
    offMaintenanceWarningIsEnabled$ : function(){
        return this.warnings;
    },
    missingWarningIsEnabled$ : function(){
        return this.warnings;
    }
});
