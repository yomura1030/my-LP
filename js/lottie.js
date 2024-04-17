const discord_icon_container = document.getElementById('discord-icon-container');

const instagram_icon_container = document.getElementById('instagram-icon-container');

lottie.loadAnimation({
    container: discord_icon_container,
    render: 'svg',
    loop: true,
    autoplay: true,
    path: '/json/discord.json'
},
)

lottie.loadAnimation({
    container: instagram_icon_container,
    render: 'svg',
    loop: true,
    autoplay: true,
    path: '/json/instagram-icon.json'
})
console.log("aaaa");
