<svelte:head>
	<title>Project Colorway | DaBluLite</title>
	<meta name="description" content="A mission to give color to the internet" />
</svelte:head>

<div class="profile-wrapper">
    <div class="profile-details-container" style="max-width: 1000px;">
        <h1>Project Colorway</h1>
        <span>With the goal of making it easy to add theming functionality to any website, Project Colorway is a vast list of pre-made color themes ready to be implemented in seconds.</span>
        <h2><b>Projects using Colorways:</b></h2>
        <div class="project-list">
            <div class="project">
                <a href="https://github.com/DaBluLite/gh-desktop" class="white-anchor">Github Desktop</a>: An Electron-based desktop app for Github, writtend in JSX (Non-react) and TS
            </div>
            <div class="project">
                <a href="https://github.com/DaBluLite/DiscordColorways" class="white-anchor">Discord Colorways</a>: Simple color schemes/themes for Discord, meant to expand the functionality of the built in light and dark themes, by offering more simple color choices, that aren't locked behind Nitro
            </div>
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
    gap: 16px;
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
</style>