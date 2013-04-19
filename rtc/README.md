Hello Chrome & Firefox, meet server-less WebRTC!
================================================
Congratulations to Firefox and Chrome for the first
[interoperable WebRTC call](https://hacks.mozilla.org/2013/02/hello-chrome-its-firefox-calling/)!
This is a fantastic first step towards a future where browser-to-browser
real-time communication is a reality.

We're excited about the potential for real-time at [Firebase](https://www.firebase.com/). Gupshup is
a WebRTC based video calling demo that works on the latest version
of Chrome and Firefox. It uses Firebase to signal your WebRTC calls so **you
don't need any servers to use this new technology**.

### [Live Demo hosted on Github pages!](http://firebase.github.com/gupshup)

Requirements
------------
* [Chrome Beta](https://www.google.com/intl/en/chrome/browser/beta.html) (v25) or higher.
* [Firefox Nightly](http://nightly.mozilla.org/) with the `media.peerconnection.enabled` preference set to `true`.

How It Works
------------
Chrome and Firefox announced recently that their WebRTC APIs now
[interoperate](http://www.webrtc.org/interop). The
[original demo](https://code.google.com/p/webrtc-samples/source/browse/trunk/apprtc/)
uses Google App Engine to exchange the WebRTC offer and answer blobs, whereas
Gupshup uses Firebase to do the same - eliminating the need to write any server
logic at all.

All the important code is in
[chat.js](https://github.com/firebase/gupshup/blob/gh-pages/js/chat.js). Many
thanks to Eric Rescorla for providing a ton of help with porting the interop
logic to JavaScript!

Known Issues with WebRTC
------------------------
* The remote video can sometimes take up to 10 seconds to appear.
* There may be other rough edges around WebRTC.

License
-------
[BSD 3-Clause](http://opensource.org/licenses/BSD-3-Clause).
