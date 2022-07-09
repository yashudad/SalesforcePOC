# SalesforcePOC
Topic
1. Invoke flow from LWC 
      1. Create aura component as Wrapper Parent component to hold LWC child component 
      Sample example: https://salesforce.stackexchange.com/questions/327120/lightning-component-to-launch-the-screen-flow
      https://developer.salesforce.com/docs/component-library/bundle/lightning:overlayLibrary/documentation
      https://developer.salesforce.com/docs/atlas.en-us.232.0.lightning.meta/lightning/components_using_flow_inputs_set.htm#:~:text=When%20you%20embed%20a%20flow,list%20to%20the%20startFlow%20method.
      https://salesforce.stackexchange.com/questions/269676/capturing-event-from-lwc-in-aura-component
      
      Call from LWC child component :  this.dispatchEvent( new CustomEvent( 'buttonClick', { detail: { value: actionLabel }} ));
      
      
3. Salesforce Azure Integration
4. LWC Modal
