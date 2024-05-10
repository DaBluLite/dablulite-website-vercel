<svelte:head>
	<title>Cyan | DaBluLite</title>
	<meta name="description" content="Clean and Customizable Discord theme, with custom background support" />
</svelte:head>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="cyan-info-page-wrapper">
	<div class="cyan-info-sections animate-left">
		<div class="cyan-info-header">Cyan</div>
		<a class="cyan-info-channel" href="/cyan">About</a>
		<div class="cyan-info-channel-category">Features</div>
		<a class="cyan-info-channel" href="/cyan/ui">User Experience</a>
		<a class="cyan-info-channel" href="/cyan/serverjoin">Joining Servers</a>
		<a class="cyan-info-channel" href="/cyan/quickswitch">Spotlight Switch</a>
		<a class="cyan-info-channel" href="/cyan/settings">User Settings</a>
	</div>
    <div class="cyan-info-page">
        <div class="body-header animate-left">
            <svg
                x="0"
                y="0"
                class="header-icon"
                aria-hidden="true"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
            >
                <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M10.99 3.16A1 1 0 1 0 9 2.84L8.15 8H4a1 1 0 0 0 0 2h3.82l-.67 4H3a1 1 0 1 0 0 2h3.82l-.8 4.84a1 1 0 0 0 1.97.32L8.85 16h4.97l-.8 4.84a1 1 0 0 0 1.97.32l.86-5.16H20a1 1 0 1 0 0-2h-3.82l.67-4H21a1 1 0 1 0 0-2h-3.82l.8-4.84a1 1 0 1 0-1.97-.32L15.15 8h-4.97l.8-4.84ZM14.15 14l.67-4H9.85l-.67 4h4.97Z"
                    clip-rule="evenodd"
                    class=""
                />
            </svg>
            <span class="header-title">About</span>
            <span class="header-subtitle">Clean and Customizable Discord theme, with custom background support</span>
        </div>
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
    width: calc(100% - 320px);
}
</style>