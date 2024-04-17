// ディスコードアイコン

const discord_icon_container = document.getElementById('discord-icon-container');

const discord_anime = lottie.loadAnimation({
    container: discord_icon_container,
    render: 'svg',
    loop: true,
    autoplay: false,
    path: '/json/discord.json'
},
)    

discord_icon_container.addEventListener('mouseover', () => {
    discord_anime.play();
    setTimeout(()=>discord_anime.stop(),1000);
});

const instagram_icon_container = document.getElementById('instagram-icon-container');

const instagram_anime = lottie.loadAnimation({
    container: instagram_icon_container,
    render: 'svg',
    loop: false,
    autoplay: false,
    path: '/json/instagram-icon.json'
})

instagram_icon_container.addEventListener('mouseover', () => {
    instagram_anime.play();
    setTimeout(()=>instagram_anime.stop(),1000);
});
