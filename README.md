# Barcode-Scanner
THIS SOFTWARE IS COVERED BY [THIS DISCLAIMER](https://raw.githubusercontent.com/thedges/Disclaimer/master/disclaimer.txt).

A utility component to do barscans from Salesforce mobile app. This utility utilizes [pic2shop](https://www.pic2shop.com/) so make sure to install that on your mobile phone. The following is a video of the utility in action. Notice the "Scan Barcode" action at bottom of Salesforce Mobile app. Click that and it brings to a page to do scans. Click the image in middle of the page and it will launch over to pic2Shop app, scan the barcode/QR code and it will then punch back in to the Salesforce mobile app to the record encoded in the barcode/QR code (see details below how to set that up).

![alt text](https://github.com/thedges/Barcode-Scanner/blob/main/BarcodeScannerVideo.gif "BarcodeScannerVideo")

# QR Code Formula Field

To create a QR code for scanning, a good utility to use is this service called [QR Code Generator](http://goqr.me/api/). On an Salesforce object that you want to generate a QR code, create a custom formula field that return a Text data type. In the formula field, enter the following:

`IMAGE("https://api.qrserver.com/v1/create-qr-code/?data=salesforce1://sObject/" & Id & "/view", "QR Scan Code", 220, 220)`

Next, create an email template that utilizes the formula field above. You can then send such email to a recipient and have a QR Code embedded in the email like the following sample email. You can use this to scan with this utility.

![alt text](https://github.com/thedges/Barcode-Scanner/blob/main/BarcodeScannerEmail.png "BarcodeScannerEmail")

# Installation & Usage Instructions

<b>Here are steps to use this component:</b>
  
1. Install the [pic2shop](https://www.pic2shop.com/) app on your mobile phone.
2. Install the component per the **Deploy to Salesforce** button below.
3. Go to **Setup > Apps > Mobile Apps > Salesforce > Salesforce Navigation**. Assign the **Scan Barcode** item to top of your navigation items like the following:

![alt text](https://github.com/thedges/Barcode-Scanner/blob/main/BarcodeScanMobileNav.png "BarcodeScanMobileNav")

4. Make sure to create QR Code Formula Field and Email template as described above.
5. Not to use the component, just click on the **Scan Barcode** item at bottom of Salesforce Mobile app. 
   * It will then launch the pic2Shop app. Scan a QR code generated per the instructions above and it will punch back in to Salesforce Mobile to that record.
  
<a href="https://githubsfdeploy.herokuapp.com?owner=thedges&repo=Barcode-Scanner&ref=main">
  <img alt="Deploy to Salesforce"
       src="https://raw.githubusercontent.com/afawcett/githubsfdeploy/master/deploy.png">
</a>
