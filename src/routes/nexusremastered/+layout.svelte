<svelte:head>
	<title>Nexus Remastered | DaBluLite</title>
	<meta name="description" content="The theme that never came to be, and predecessor to Cyan, remastered and better than before" />
</svelte:head>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="cyan-info-page-wrapper">
    <div class="cyan-info-page">
        <div id="cyan-container">
            <slot/>
        </div>
    </div>
</div>

<style lang="scss">
    @keyframes -global-animleft {
    from {
        transform: translateX(20px);
        opacity: 0;
    }
    to {
        opacity: 1;
        transform: none;
    }
}
.cyan-info-page-wrapper {
    display: flex;
    height: 100%;
}
.cyan-info-sections {
    width: var(--cyan-channelbar-width);
    height: 100%;
    display: flex;
    flex-direction: column;
}
.cyan-info-header {
    margin: 10px;
    width: calc(var(--cyan-channelbar-width) - 20px);
    background-color: var(--cyan-second-layer);
    box-shadow: var(--cyan-interface-shadow);
    border-radius: var(--cyan-radius-large);
    box-sizing: border-box;
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;
    padding: 12px 16px;
    height: 48px;
}
.cyan-info-channel,
.cyan-info-channel-category {
    height: 40px;
    margin-left: 10px;
    width: calc(var(--cyan-channelbar-width) - 26px);
    margin-right: 16px;
    transition: .2s ease;
    border-radius: var(--cyan-radius-medium);
    line-height: 40px;
    font-size: 1rem;
    font-weight: 500;
    box-sizing: border-box;
    padding-left: 12px;
    cursor: pointer;
}
.cyan-info-channel-category {
    border-radius: 0;
    border-bottom: 1px solid currentColor;
    cursor: default;
    margin-bottom: 4px;
}
.cyan-info-channel {
    color: #fff;
    text-decoration: none;
    &:hover {
        background-color: var(--cyan-second-layer);
        box-shadow: var(--cyan-interface-shadow);
    }
}
#cyan-container {
    display: block;
    width: 100%;
    height: calc(100vh - 60px - 16px);
}
.body-header {
    width: calc(100% - 24px);
    height: 52px;
    margin: 8px;
    margin-bottom: 0;
    border-radius: var(--cyan-radius-large);
    padding-left: 8px;
    display: flex;
    align-items: center;
    background-color: var(--cyan-second-layer);
    box-shadow: var(--cyan-interface-shadow);
    flex: 0 0 auto;
}
.header-title {
    font-size: 16px;
    line-height: 1.25;
    font-weight: 600;
    margin-right: 8px;
}
.header-icon {
    margin: 0 8px;
}
.header-subtitle {
    font-weight: 500;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 14px;
    line-height: 18px;
    opacity: .8;
    margin-left: 8px;
}
.cyan-info-page {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
}
</style>