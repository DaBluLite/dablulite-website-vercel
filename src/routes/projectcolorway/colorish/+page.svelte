<svelte:head>
	<title>Colorish | DaBluLite</title>
	<meta name="description" content="The official manager for Project Colorway-compatible apps." />
</svelte:head>

<script lang="ts">
    import colorishImg from "$lib/images/colorish.png";
</script>

<div class="profile-wrapper">
    <div class="profile-details-container" style="max-width: calc(100% - 32px);">
        <h1>Colorish</h1>
        <div style="display: flex; justify-content: space-between; align-items: center; gap: 16px; height: 880px; width: 1320px; margin: auto;">
            <h2 style="max-width: 40%; font-size: 2rem;">
                The official manager for Project Colorway-compatible apps.
                <div style="display: flex; gap: 8px; margin-top: 8px">
                    <a href="https://github.com/ProjectColorway/colorish/releases/latest" target="_blank" class="button">Download Now</a>
				    <a href="https://github.com/ProjectColorway/colorish" target="_blank" class="button"><svg fill="currentColor" width="24" height="24" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="s-y_bCXRrkrYfP"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>Github Repo</a>
                </div>
            </h2>
            <img src={colorishImg} alt="Colorish screenshot" width="66.66666667%">
        </div>
    </div>
</div>

<style lang="scss">
    @import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&family=Edu+AU+VIC+WA+NT+Hand:wght@400..700&display=swap");
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
h1 {
    margin-bottom: 0;
    font-family: 'Edu AU VIC WA NT Hand', cursive;
    font-weight: normal;
    font-size: 3rem;
}
.button {
    background-color: #101010;
    border-radius: 8px;
    transition: 0.2s ease;
    font-weight: bold;
    font-size: 1.125rem !important;
			border: 1px solid transparent;
			&:hover {
				background-color: #2a2a2a;
                border-color: #a6a6a6;
			}
			&:active {
				background-color: #0a0a0a;
                border-color: #a6a6a6;
			}
}
img {
    border-radius: 6px;
    border: 1px solid #a6a6a6;
    box-shadow: 0 4px 10px 0 rgb(0 0 0 / 60%);
}
</style>