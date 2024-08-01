<script>

	import { page } from "$app/stores";

</script>
<svelte:head>
	<title>Cyan | DaBluLite</title>
	<meta name="description" content="Clean and Customizable Discord theme, with custom background support" />
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
:global(.ver-sep) {
    width: 2px;
    height: 50%;
    background-color: currentColor;
    display: block;
    margin: auto 3px;
    border-radius: 2px;
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
    height: calc(100% - 59px);
    width: 100%;
}
.nav {
		height: 59px;
	    width: 100%;
	    display: flex;
	    justify-content: start;
	    gap: 8px;
	    align-items: center;
	    flex: 0 0 auto;
	    margin-left: 12px;
        color: #fff;
		&> img {
			border-radius: 50%;
    		margin-left: 8px;
		}
		&> a,
		&> div {
			height: 43px;
    		padding: 8px;
		    display: flex;
		    justify-content: center;
		    align-items: center;
		    cursor: pointer;
		    position: relative;
			text-decoration: none;
            color: currentColor;
		    &.active::before {
		        content: "";
		        width: 50%;
		        height: 2px;
		        background-color: currentColor;
		        position: absolute;
		        left: 50%;
		        transform: translateX(-50%);
		        bottom: 2px;
		        border-radius: var(--cyan-radius-xs);
		        animation: animatetabindicatorBottom .4s ease;
		    }
		}
	}
</style>