var x = {
  isFocused$ : function(){
          return this.parentVM.assetSetWithFocus == this;
  },
  
  isClosable$ : function(){
      return this.parentVM.assetSetList.length>1;
  },
  
  showMissing$ : function(){
      return this.rootVM.options.missingWarning;
  }
}
