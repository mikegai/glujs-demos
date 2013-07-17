  missingAssets : {
      mtype:'list'
  },
  
  isFocused$ : function(){
      return this.parentVM.assetSetWithFocus == this;
  },
  
  isClosable$ : function(){
      return this.parentVM.assetSetList.length>1;
  },
  
  showMissingSummary$ : function(){
      return this.rootVM.options.showMissingWarnings && this.missingAssets.length>0;
  }
