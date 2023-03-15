---
stoplight-id: rsj44zjmtim1e
---

# How to to get your data from Swiggy programmatically

1. [Send an OTP](../?urls.primaryName=Profile#/default/sms-otp) to your phone. Save the `tid`, `sid`, and `deviceid`.
2. [Submit the OTP](../?urls.primaryName=Profile#/default/submit-otp) you've received, and additionally save the `token` you get.
3. [Fetch the list of Swiggy Orders](../?urls.primaryName=Orders#/default/get-account-orders). This needs your `tid`, and `token`. This returns a maximum of 5 orders. This returns a protobuf response, so you will need to parse it using [this schema](../swiggy.proto).
4. Fetch the list of your [Instamart Orders](../?urls.primaryName=Instamart#/default/get-account-orders). This needs your `tid` and `token`.
5. If you'd like additional details about a single Swiggy order, you can use the [Get Single Order Details](../?urls.primaryName=Application#/default/get-order-getSingleOrder) API.