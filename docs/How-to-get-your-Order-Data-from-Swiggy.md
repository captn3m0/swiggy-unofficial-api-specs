---
stoplight-id: rsj44zjmtim1e
---

# How to to get your data from Swiggy programmatically

1. [Send an OTP](reference/profile.yaml/paths/~1v3~1app~1sms_otp) to your phone. Save the `tid`, `sid`, and `deviceid`.
2. [Submit the OTP](reference/profile.yaml/paths/~1v3~1app~1login~1verify) you've received, and additionally save the `token` you get.
3. [Fetch the list of Swiggy Orders](reference/disc.yaml/paths/~1account~1orders). This needs your `tid`, and `token`. This returns a maximum of 5 orders.
4. Fetch the list of your [Instamart Orders](reference/instamart.yaml/paths/~1order~1history). This needs your `tid` and `token`.
5. If you'd like additional details about a single Swiggy order, you can use the [Get Single Order Details](reference/app.yaml/paths/~1order~1getSingleOrder) API.