({
    onInit: function(component) {

    },
	scanBarcode : function(component, event, helper) {
	    var urlEvent = $A.get("e.force:navigateToURL");
    	urlEvent.setParams({
            "url": "pic2shop://scan?callback=QR"
    	});
    	urlEvent.fire();
	}
})