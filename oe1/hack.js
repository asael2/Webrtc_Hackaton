var webrtc = new WebRTC({

    // the id of (or actual element) to hold "our" video

    localVideoEl: 'visitorVideoContainer',

 

    // the id of or actual element that will hold remote videos

    remoteVideosEl: 'asesorVideoContainer',

 

     // immediately ask for camera access

    autoRequestMedia: true

});

