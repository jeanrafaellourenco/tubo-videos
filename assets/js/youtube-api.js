 // Este código carrega o código da API do IFrame Player de forma assíncrona.
    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // Esta função cria um <iframe> (e player do YouTube) após os downloads do código da API.
    var player;
    function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
            height: '360',
            width: '640',
            // 'videoId' quando descomentada monta o player carregando um video
            // videoId: 'L9YP1eRKmHs',
            playerVars: {
                'autoplay': 1,
                'controls': 0,
                // variáveis de playlist
                // 'listType' e 'list' quando descomentada monta o player carregando uma playlist
                // as variáveis de 'playlist' se descomentadas ignoram a variavel acima 'videoId'
                listType: 'playlist',
                list: 'PL_e9zBuGB9uWv6hMrpCK-HgW_d4DCuVDT'
            },
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerReady
            }
        });
    }

    // A API chamará essa função quando o player de vídeo estiver pronto.
    function onPlayerReady(event) {
        event.target.setVolume(50);
        event.target.playVideo();
    }
