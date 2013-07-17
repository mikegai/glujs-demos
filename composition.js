glu.defModel('examples.assets.main', {
    options:{
        mtype:'options'
    },

    sliceCounter:1,

    assetSetList:{
        mtype:'activatorlist',
        autoParent:true,
        focusProperty:'assetSetWithFocus'
    },

    assetSetWithFocus: {mtype:'assetSet', name:'dummy'},

    title$: function(){
        return this.localize('title',{focusName: this.assetSetWithFocus.name});
    },

    detail:{ mtype:'asset' },

    init:function(){
        this.cloneSet(); //clone dummy asset set
    }
    
}
