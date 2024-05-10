<script lang="ts">
	import Main from "$lib/images/main.png";
	import { showCyanStudio } from "../main";
</script>
<div class='cyan-info-container' style="animation: animleft .4s ease;">
    <div style="display: flex; gap: 16px; flex-direction: column;">
        <span class="cyan-desc"
            >Cyan is a theme that aims to re-imagine the Discord User Experience in the most drastic
            way possible. Subtle curves and shadows, various Quality-of-life improvements and a
            beautiful frosted glass material, paired with massive amounts of customizability and an
            extensive amount of addons to choose from.</span
        >
        <div style="display: flex; gap: 8px;">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class="button" on:click={() => showCyanStudio.set(true)}>Open Cyan Studio</div>
            <a class="button" href="https://github.com/DaBluLite/Cyan/" target="__blank"
                >Open Repository</a
            >
        </div>
    </div>
    <img src={Main} class="project-screenshot" alt="Main Cyan Interface" />
</div>

<style lang="scss">
.cyan-desc {
    font-size: 24px;
}
.cyan-info-container {
    display: flex;
    max-width: calc(100% - 256px);
    margin: 0 auto;
    height: 100%;
    align-items: center;
}
.project-screenshot {
    object-fit: contain;
    overflow: overlay;
    width: 300%;
    border-radius: var(--cyan-radius-small);
    box-shadow: var(--cyan-interface-shadow);
}
</style>