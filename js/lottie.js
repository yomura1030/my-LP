// ディスコードアイコン

const discord_icon_container = document.getElementById('sns-icon__item--discord');

const discord_anime = lottie.loadAnimation({
    container: discord_icon_container,
    render: 'svg',
    loop: true,
    autoplay: false,
    path: 'json/discord.json'
},
)    

discord_icon_container.addEventListener('mouseenter', () => {
    discord_anime.play();
    setTimeout(()=>discord_anime.stop(),1000);
});

const instagram_icon_container = document.getElementById('sns-icon__item--instagram');

const instagram_anime = lottie.loadAnimation({
    container: instagram_icon_container,
    render: 'svg',
    loop: false,
    autoplay: false,
    path: 'json/instagram-icon.json'
})

instagram_icon_container.addEventListener('mouseenter', () => {
    instagram_anime.play();
    setTimeout(()=>instagram_anime.stop(),1000);
});
