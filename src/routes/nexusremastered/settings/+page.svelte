<script>
    import Settings from "$lib/images/settings-nr.png";
</script>
<div class="cyan-feature" style="animation: animleft .4s ease">
    <div class="feature-column">
        <h2>Improved Settings</h2>
        <span class="cyan-desc">
            Efficient at heart. Get things done, fast.
        </span>
    </div>
    <img src={Settings} class="feature-screenshot" alt="Settings Interface" />
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