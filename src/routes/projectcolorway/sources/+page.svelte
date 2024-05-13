<script lang="ts">
    import { _sources } from "../../+server";
</script>

<div class="profile-wrapper">
    <div class="profile-details-container" style="max-width: 1000px;">
        <h1 style="margin-bottom: 0;">Project Colorway Sources</h1>
        <span>A list with all of the available online colorway sources.</span>
    </div>
</div>
<div class="css-snippet-container">
    {#each _sources.sources as source}
<div class="css-snippet">
    <div style="display: flex; gap: .5rem; flex-direction: column;">
        <b>{source.name}</b>
        <span>{source.description}</span>
    </div>
    <div style="display: flex; gap: 8px;">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div on:click={() => navigator.clipboard.writeText(source.url)} class="button">Copy URL</div>
    </div>
</div>
{/each}
</div>

<style lang="scss">
    .css-snippet-container {
        display: flex;
        flex-direction: column;
        height: 80%;
        overflow: hidden auto;
        &::-webkit-scrollbar {
			width: 5px;
    		height: 8px;
    		background-color: #aaa;
		}
		&::-webkit-scrollbar-thumb {
			background: #000;
		}
    }
    .css-snippet {
        display: flex;
        justify-content: space-between;
    background: linear-gradient(rgba(0, 0, 0, 0.6235294118), rgba(0, 0, 0, 0.3333333333));
    color: #fff;
    padding: 24px;
    width: 100%;
    box-sizing: border-box;
    align-items: center;
    }
    .profile-wrapper {
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
}
.profile-details-container {
    flex-direction: column;
    justify-content: center;
    gap: 8px;
    display: flex;
    animation: animleft .4s ease;
}
</style>