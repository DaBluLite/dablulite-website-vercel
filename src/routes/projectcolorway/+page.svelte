<svelte:head>
	<title>Project Colorway | DaBluLite</title>
	<meta name="description" content="A mission to give color to the internet" />
</svelte:head>

<div class="profile-wrapper">
    <div class="profile-details-container" style="max-width: 1000px;">
        <h1 style="margin-bottom: 0;">Project Colorway</h1>
        <span>Project Colorway is a theming standard made for the masses, with the goal of a more seamless and vast theming experience, for a vastly colorful web.</span>
        <h3 style="margin-bottom: 0;">Projects using Colorways:</h3>
        <div class="project-list">
            <div class="project">
                <a href="https://github.com/ProjectColorway/colorish" class="white-anchor">Colorish</a>: The official manager for Project Colorway-compatible apps.
            </div>
            <div class="project">
                <a href="https://github.com/DaBluLite/DiscordColorways" class="white-anchor">Discord Colorways</a>: Simple color schemes/themes for Discord, meant to expand the functionality of the built in light and dark themes, by offering more simple color choices, that aren't locked behind Nitro
            </div>
            <div class="project">
                <a href="https://github.com/DaBluLite/gh-desktop" class="white-anchor">Github Desktop</a>: An Electron-based desktop app for Github, writtend in JSX (Non-react) and TS
            </div>
            <div class="project">
                <a href="/projectcolorway/generator" class="white-anchor">Colorway CSS generator</a>: Colorway CSS generator for known apps
            </div>
        </div>
        <h3 style="margin-bottom: 0;">Useful Links:</h3>
        <div class="project-list">
            <div class="project">
                <a href="https://github.com/ProjectColorway" class="white-anchor">The Project's Organization GitHub</a>
            </div>
            <div class="project">
                <a href="/projectcolorway/sources" class="white-anchor">Colorway Sources</a>: A list with all of the available online colorway sources
            </div>
        </div>
        <h3 style="margin-bottom: 0;">How you can contribute:</h3>
        <ul>
            <li>Make colorways. Really, that is all it takes for you to support this project. Make colorways, upload them and share them. The goal of this porject is neither to spread my name nor this project's name. The goal is to create a universal way of theming apps in an easy and accessible manner.</li>
            <li>Use the tools provided by instances of Project Colorway. As of DiscordColorways v5.7.0 and Colorish v1, and exporting colorway sources is possible from inside the plugin/app itself. Submissions for colorway sources or colorways are open to anyone from <a href="/projectcolorway/submit" class="white-anchor">here</a>.</li>
            <li>Create Project Colorway-compatible apps. By properly following Project Colorway's specifications for apps and manager communication, you can help create a more seamless theming experience across apps.</li>
            <li>Support for online Project Colorway features for GitHub Desktop is being worked on...</li>
        </ul>
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
li {
    margin-bottom: 8px;
}
</style>