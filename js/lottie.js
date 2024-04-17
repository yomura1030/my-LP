// ディスコードアイコン

const discord_icon_container = document.getElementById('discord-icon-container');

const discord_anime = lottie.loadAnimation({
    container: discord_icon_container,
    render: 'svg',
    loop: false,
    autoplay: false,
    path: '/json/discord.json'
},
)    

discord_icon_container.addEventListener('mouseover', () => {
    discord_anime.play();
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
    console.log('aaa');
    instagram_anime.play();
});
