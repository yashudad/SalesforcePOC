({
    
    init : function (component,event,helper) {
        console.log('in init');
        component.set('v.isOpen', false);
        
    },
    
    handleClick: function(component,event,helper){ 
        
        console.log('in handle click');
        //	let btnClickEvent = event.getParam('clickEvent'); 
        //    console.log('btnClickEvent clicked');
        component.set('v.isOpen', true);
        console.log('variable isOpen got set');
        component.set('v.ismodalClicked', true);
        var cmpTarget = component.find('Modalbox');
        var cmpBack = component.find('Modalbackdrop');
        $A.util.addClass(cmpTarget, 'slds-fade-in-open');
        $A.util.addClass(cmpBack, 'slds-backdrop--open');
        var flow = component.find("flowData");
        console.log('flow found');
     //   flow.startFlow("FlowName_Trial");
              	var action = component.get("c.getAccount");
        	action.setCallback(this, function(response){
            console.log('before state', response.getState());
            var state = response.getState();
            if(state === "SUCCESS"){
                console.log('before component set');
                component.set("v.account", response.getReturnValue());
              
              var inputVariables = [
                    { 
                        name : "account_id",
                        type : "SObject",
                        value: component.get("v.account")
                    },
                    {
                        name : "recordId",
                        type : "String",
                        value : component.get("v.recordId")
                    },
                    {
                        name : "selected_reorder_reason",
                        type : "String",
                        value : "hgjhdsjkF"
                    }
                    
                ];
                console.log('inputVariables', inputVariables);
                flow.startFlow("Drive_Safe_Save_Beacon_Reorder_Demo", inputVariables); 
                    
                   //    flow.startFlow("FlowName_Trial");
                    
                }
                else{
                    console.log("Failed to get policy Record.");
                }
            });
        $A.enqueueAction(action);  
        
    },
    closeModal:function(component,event,helper){
        component.set('v.ismodalClicked', false);
        var cmpTarget = component.find('Modalbox');
        var cmpBack = component.find('Modalbackdrop');
        $A.util.removeClass(cmpBack,'slds-backdrop--open');
        $A.util.removeClass(cmpTarget, 'slds-fade-in-open');
    }
})
