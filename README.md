# Barcode-Scanner
THIS SOFTWARE IS COVERED BY [THIS DISCLAIMER](https://raw.githubusercontent.com/thedges/Disclaimer/master/disclaimer.txt).

A utility component to do barscans from Salesforce mobile app.

# QR Code Formula Field

IMAGE("https://api.qrserver.com/v1/create-qr-code/?data=salesforce1://sObject/" & Id & "/view", "QR Scan Code", 220, 220)

![alt text](https://github.com/thedges/Barcode-Scanner/blob/main/BarcodeScannerEmail.png "BarcodeScannerEmail")

# Installation Instructions

<b>Here are steps to use this component:</b>
  
1. Install the component per the **Deploy to Salesforce** button below
2. Assign the **PSMockPayment** permission set to whatever user needs access to this component.
3. Create a flow and add the "psMockPayment" component to a screen. 
   * Use one variable to provide a payment amount to the component.
   * Create two variables to capture the transaction id and message to store on a record.
4. In the actual flow at runtime, just click the "Pay ..." button and it will show a confirmation message. That's it!
  
<a href="https://githubsfdeploy.herokuapp.com">
  <img alt="Deploy to Salesforce"
       src="https://raw.githubusercontent.com/afawcett/githubsfdeploy/master/deploy.png">
</a>
