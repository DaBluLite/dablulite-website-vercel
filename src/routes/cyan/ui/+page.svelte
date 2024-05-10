<script lang="ts">
    import Main from "$lib/images/main.png";
</script>

<div class="cyan-feature" style="animation: animleft .4s ease">
    <div class="feature-column">
        <h2>Better UX</h2>
        <span class="cyan-desc">
            A no-nonsense interface, centered around you. Customization has no limits.
        </span>
    </div>
    <img src={Main} class="feature-screenshot" alt="Main Cyan Interface" />
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
.feature-screenshot {
    object-fit: contain;
    overflow: overlay;
    width: 50%;
    border-radius: var(--cyan-radius-small);
    box-shadow: var(--cyan-interface-shadow);
}
.cyan-desc {
    font-size: 24px;
}
</style>