var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function extractVideoID(url) {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    if (match && match[7].length == 11) {
        return match[7];
    } else {
        alert("Não foi possível encontrar o vídeo");
    }
}

function videoPlayer() {
    var video_url = document.getElementById("input").value;
    var video_id = extractVideoID(video_url);
    var listarPlayer = document.getElementById("videoPlayer");
    var elementoPlayer = "<div class='video-wrapper'><div id='player'></div></div>";
    
    listarPlayer.innerHTML = "";
    listarPlayer.innerHTML = listarPlayer.innerHTML + elementoPlayer;

    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: video_id,
        playerVars: {
            'autoplay': 0,
            'controls': 1,
            listType: 'playlist',
            list: video_id
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerReady
        }
    });

    function onPlayerReady(event) {
        event.target.setVolume(50);
        event.target.playVideo();
    }
}
