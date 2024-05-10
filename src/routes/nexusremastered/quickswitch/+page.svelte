<script>
    import Quickswitch from "$lib/images/quickswitch-nr.png";
</script>
<div class="cyan-feature" style="animation: animleft .4s ease">
    <div class="feature-column">
        <h2>Find what you need, fast.</h2>
        <span class="cyan-desc">
            A spotlight-like implementation of Discord's Quickswitcher, bringing a lighter and more pleasant experience. Summon from the search box in Direct Messages or press Ctrl + K (Cmd + K on macOS)
        </span>
    </div>
    <img src={Quickswitch} class="feature-screenshot" alt="Channel Quick Switch" />
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