# SalesforcePOC
Topic
1. Invoke flow from LWC 
      1. Create aura component as Wrapper Parent component to hold LWC child component 
      Sample example: https://salesforce.stackexchange.com/questions/327120/lightning-component-to-launch-the-screen-flow
      https://developer.salesforce.com/docs/component-library/bundle/lightning:overlayLibrary/documentation
      https://developer.salesforce.com/docs/atlas.en-us.232.0.lightning.meta/lightning/components_using_flow_inputs_set.htm#:~:text=When%20you%20embed%20a%20flow,list%20to%20the%20startFlow%20method.
      https://salesforce.stackexchange.com/questions/269676/capturing-event-from-lwc-in-aura-component
      
      
3. Salesforce Azure Integration
salesforce-azure-jwt
Base code for calling Azure JWT SSO from Salesforce using Apex. The received token is stored in a Custom Setting.

Setup Instructions
Create an app in Azure to authenticate against. Skip this step if you already have one.
Create a Self-Signed Certificate in Salesforce (e.g. AzureSSO) by going to Setup > Certificate and Key Management.
After creating the certificate, download it to your desktop. Use the following commands in a terminal window to get the thumbprint from the certificate. Remember to copy and store the thumbprint output from the last command, you'll need it later.
openssl x509 -in AzureSSO.crt -fingerprint -noout
echo $(openssl x509 -in AzureSSO.crt -fingerprint -noout) | sed "s/SHA1 Fingerprint=//g" | sed "s/://g" | xxd -r -ps | base64
Go to your Azure app and upload the .crt file in the section Certificates and Secrets.
In Salesforce, go to Setup > Remote Site Settings and create a new Remote Site Setting for the url 'https://login.microsoftonline.com'. This will allow us to make the callout to Azure.
Deploy the components from the force-app folder in this repository to your Salesforce org.
Note that you'll need to change line 9 of the Apex Class JWTAzureController to the name of your certificate (e.g. AzureSSO if that's what you called your certificate).
Create an Org Default custom setting configuration for the custom setting object CS_AzureSSO__c. Set the values for the following fields:
Client Id should be the Application (client) ID from your Azure app.
Tenant Id should be the Directory (tenant) ID from your Azure app.
Thumbprint should be the thumbprint output from step 2.
Scope should be the Client Id + '/.default'.
Add the LWC component azureSSO to any lightning page in Salesforce.
Test getting the access token from Azure by clicking the 'Token' button. If a token is returned, the custom setting will be updated with the token value, and will also display on the component UI.
5. LWC Modal
