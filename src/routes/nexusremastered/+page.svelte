<script lang="ts">
	import Main from "$lib/images/main-nr.png";
</script>
<div class='cyan-info-container' style="animation: animleft .4s ease;">
    <div style="display: flex; gap: 16px; flex-direction: column;">
        <span class="cyan-desc">Nexus Remastered is the answer to "what could have been", had Nexus not become Cyan. It's a love letter to the theme that it all started from. Simple UI from across all 3 generations of Cyan, paired with a ton of features.</span>
        <div style="display: flex; gap: 8px;">
            <a class="button" href="https://github.com/DaBluLite/NexusRemastered/" target="__blank">Open Repository</a>
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