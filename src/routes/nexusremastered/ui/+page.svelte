<script lang="ts">
    import Main from "$lib/images/main-nr.png";
</script>

<div class="cyan-feature" style="animation: animleft .4s ease">
    <div class="feature-column">
        <h2>Simple UI</h2>
        <span class="cyan-desc">
            Simple in the UI, efficient in the UX. Beautiful looks meet efficiency.
        </span>
    </div>
    <div class="imgcontainer">
        <img src={Main} class="feature-screenshot" alt="Main Cyan Interface" />
    </div>
</div>

<style lang="scss">
    .cyan-feature {
    display: flex;
    max-width: calc(100% - 256px);
    margin: 0 auto;
    height: 100%;
    align-items: center;
    gap: 32px;
}
.feature-column {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 50%;
}
.imgcontainer {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    &> .feature-screenshot {
        object-fit: contain;
        overflow: overlay;
        width: auto;
        border-radius: var(--cyan-radius-small);
        box-shadow: var(--cyan-interface-shadow);
    }
}
.cyan-desc {
    font-size: 24px;
}
</style>