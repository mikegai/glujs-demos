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
    },
    cloneSet:function () {
        var newSlice = this.model(this.assetSetWithFocus.clone());
        newSlice.set('name', 'Asset Set ' + this.sliceCounter++);
        this.assetSetList.add(newSlice);
        newSlice.init();
        this.set('assetSetWithFocus', newSlice);
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
glu.defModel('examples.assets.assetSet',{
    //asset set (a tab/panel with a grid of assets 
    //and a summary) definition...
})
