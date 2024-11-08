<svelte:head>
	<title>Discord Colorways | DaBluLite</title>
	<meta name="description" content="A mission to give color to the internet" />
</svelte:head>

<div class="profile-wrapper">
    <div class="profile-details-container" style="max-width: 1000px;">
        <h1 style="margin-bottom: 0;">DiscordColorways</h1>
        <span>DiscordColorways is plugin that offers easy access to Project Colorway and all of its features.</span>
        <h3 style="margin-bottom: 0;">Features:</h3>
        <div class="project-list">
            <div class="project">
                Easy-to-use interface
            </div>
            <div class="project">
                Access to all official sources listed in <a href="/projectcolorway/sources" class="white-anchor">Colorway Sources</a>
            </div>
            <div class="project">
                Creation of offline sources and custom colorways
            </div>
            <div class="project">
                Compatible with all Project Colorway-compliant managers, designed with <a href="/projectcolorway/colorish" class="white-anchor">Colorish</a> in mind
            </div>
        </div>
        <h3 style="margin-bottom: 0;">Download DiscordColorways v7 for:</h3>
        <div class="profile-social-media">
            <a href="https://github.com/DaBluLite/DiscordColorways/raw/refs/heads/master/DiscordColorways.plugin.js" class="button" download="DiscordColorways.plugin.js" target="_blank">BetterDiscord</a>
            <a href="https://github.com/DaBluLite/DiscordColorways-VencordUserplugin/" class="button" target="_blank">Vencord (Userplugin)</a>
        </div>
    </div>
</div>

<style lang="scss">
    .profile-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
}
.project-list {
    display: flex;
    flex-direction: column;
    gap: 4px;
    &>.project {
    position: relative;
    line-height: 24px;
}
}
.profile-details-container {
    flex-direction: column;
    justify-content: center;
    gap: 8px;
    display: flex;
    animation: animleft .4s ease;
}
.profile-social-media {
    display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
</style>