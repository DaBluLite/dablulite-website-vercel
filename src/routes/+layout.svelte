<script lang="ts">

	import { page } from "$app/stores";
	import { inject } from '@vercel/analytics'
	import NumberInput from "./NumberInput.svelte";
	import ColorPicker from 'svelte-awesome-color-picker';
	import TextInput from "./TextInput.svelte";
	import { showCyanStudio } from "./main";

	inject();

	let cyanStudioTab = "settings";
	let backImg = "https://dablulite.github.io/b2e7544e927e0a5d7b1b.jpg";
    let accentColor = "#009f88";
    let secondLayerColor = "rgb(0 0 0/60%)";
    let primary = "rgb(0 0 0/60%)";

    let radiusRoundInterface = 50;
    let radiusInterface = 24;
    let radiusXL = 20;
    let radiusLarge = 16;
    let radiusMedium = 12;
    let radiusSmall = 8;
    let radiusXS = 4;

	let darkBgBrightness = 0.7

	function generateCSS(full = false) {
		return `${full ? `@import url("https://dablulite.github.io/Cyan/import.css");
:root {
	--cyan-interface-shadow: 0 4px 10px 0 rgb(0 0 0 / 60%);
	--cyan-font: 'Montserrat', 'Open Sans';
	--cyan-blur: 48px;
    --cyan-channelbar-width: 320px;
    --cyan-loading-header: "Polishing surfaces...";` : ":root {"}
    --cyan-background-img: url("${backImg}");
    --cyan-accent-color: ${accentColor};
    --cyan-radius-interface: ${radiusInterface}px;
    --cyan-radius-large: ${radiusLarge}px;
    --cyan-radius-medium: ${radiusMedium}px;
    --cyan-radius-small: ${radiusSmall}px;
    --cyan-radius-xs: ${radiusXS}px;
    --cyan-radius-xl: ${radiusXL}px;
    --cyan-radius-round-interface: ${radiusRoundInterface}px;
}
.theme-dark,
.theme-dark .theme-light {
	--cyan-background-primary: ${primary};
    --cyan-second-layer: ${secondLayerColor};
	--cyan-bg-brightness: ${darkBgBrightness};
}`;
	}


	let boundAccent = {
		"r": 0,
		"g": 159,
		"b": 136,
		"a": 1
	};
    let boundSecond = {
		"r": 0,
		"g": 0,
		"b": 0,
		"a": 0.6
	};
    let boundPrimary = {
		"r": 0,
		"g": 0,
		"b": 0,
		"a": 0.6
	};

	const cyanaddons = [{"name":"Right-side Omnibar","import":"@import url(https://dablulite.github.io/Cyan/Addons/RightSideOmnibar/import.css);"},{"name":"Transparency Compatibility","import":"@import url(https://dablulite.github.io/Cyan/Addons/CyanTransparencyCompat/CyanTransparencyCompat.theme.css);"},{"name":"Windows 10 Titlebar","import":"@import url(https://dablulite.github.io/Cyan/Addons/CyanWin10Titlebar/import.css);"},{"name":"Windows 10 Titlebar & Right-side Omnibar","import":"@import url(https://dablulite.github.io/Cyan/Addons/Win10TitlePlusRightSideOmnibarCompat/import.css);\\n@import url(https://dablulite.github.io/Cyan/Addons/CyanWin10Titlebar/import.css);\\n@import url(https://dablulite.github.io/Cyan/Addons/RightSideOmnibar/import.css);"},{"name":"Omnibar Collapse","import":"@import url(https://dablulite.github.io/Cyan/Addons/OmnibarCollapse/import.css);"},{"name":"Nitro Theme Support","import":"@import url(https://dablulite.github.io/Cyan/Addons/NitroThemeCompat/import.css);"},{"name":"Cyan Colorways","import":"@import url(https://dablulite.github.io/Cyan/Addons/CyanColorways/CyanColorways.theme.css);"},{"name":"Disable PIP","import":"@import url(https://dablulite.github.io/Cyan/Addons/DisablePIP/import.css);"},{"name":"Discrete Titlebar","import":"@import url(https://dablulite.github.io/Cyan/Addons/DiscreteTitlebar/import.css);"},{"name":"User Area Lite","import":"@import url(https://dablulite.github.io/Cyan/Addons/UserAreaLite/import.css);"}];
</script>
<div class="nav">
	<img src="https://avatars.githubusercontent.com/u/73998678?v=4" height="43" width="43" alt="Dablulite's profile">
	<a href="/" class={$page.url.pathname === "/" ? "active":""}>Home</a>
	<a href="/cyan" class={$page.url.pathname.startsWith("/cyan") ? "active":""}>Cyan²</a>
	<a href="/nexusremastered" class={$page.url.pathname.startsWith("/nexusremastered") ? "active":""}>Nexus Remastered</a>
	<a href="/projectcolorway" class={$page.url.pathname.startsWith("/projectcolorway") ? "active":""}>Project Colorway</a>
	<a href="/csssnippets" class={$page.url.pathname.startsWith("/csssnippets") ? "active":""}>CSS Snippets</a>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div on:click={() => showCyanStudio.set(true)}>Cyan Studio</div>
</div>
<div class="main">
	<slot/>
</div>
{#if $showCyanStudio === true}
<div id="cyan-studio">
	<div id="cyan-studio-page-wrapper">
		{#if cyanStudioTab === "settings"}
		<div class="cyan-studio-page">
			<h2 style="margin: 16px; margin-bottom: 0; margin-left: 0;">Settings</h2>
			<TextInput title="Background Image" placeholder="Enter a valid image URL..." bind:value={backImg} onInput={() => document.body.style.setProperty('--cyan-background-img', 'url("' + backImg + '")')}/>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<div style="display: flex; gap: 8px;">
				<div class="button" on:click={() => {
					document.body.style.setProperty('--cyan-background-img', 'url("https://dablulite.github.io/Cyan/cyan-waves.png")');
                	backImg = "https://dablulite.github.io/Cyan/cyan-waves.png"
				}}>Use Cyan's BG</div>
				<div class="button" on:click={() => {
					document.body.style.setProperty('--cyan-background-img', 'url("https://dablulite.github.io/b2e7544e927e0a5d7b1b.jpg")');
                	backImg = "https://dablulite.github.io/b2e7544e927e0a5d7b1b.jpg"
				}}>Use Website's's BG</div>
			</div>
			<NumberInput step={0.1} min={0} max={1} title="Dark Mode Background Brightness" bind:value={darkBgBrightness} onInput={() => {}}/>
            <ColorPicker bind:rgb={boundAccent} label="Accent Color" --cp-border-color="#fff" on:input={(e) => {
                document.body.style.setProperty('--cyan-accent-color', e.detail.hex);
                accentColor = e.detail.hex
            }}/>
            <ColorPicker bind:rgb={boundPrimary} label="Primary Color" --cp-border-color="#fff" on:input={(e) => {
                document.body.style.setProperty('--cyan-background-primary', `hsl(${e.detail.hsv.h}deg, ${e.detail.hsv.s}%, ${e.detail.hsv.v}%, ${e.detail.hsv.a})`);
                primary = `hsl(${e.detail.hsv.h}deg, ${e.detail.hsv.s}%, ${e.detail.hsv.v}%, ${e.detail.hsv.a})`
            }}/>
            <ColorPicker bind:rgb={boundSecond} label="Secondary Color" --cp-border-color="#fff" on:input={(e) => {
                document.body.style.setProperty('--cyan-second-layer', `hsl(${e.detail.hsv.h}deg, ${e.detail.hsv.s}%, ${e.detail.hsv.v}%, ${e.detail.hsv.a})`);
                secondLayerColor = `hsl(${e.detail.hsv.h}deg, ${e.detail.hsv.s}%, ${e.detail.hsv.v}%, ${e.detail.hsv.a})`
            }}/>
            <NumberInput step={1} min={0} max={undefined} title="Interface Corner Radius" bind:value={radiusInterface} onInput={() => {
                document.body.style.setProperty('--cyan-radius-interface', `${radiusInterface}px`);
            }}/>
            <NumberInput step={1} min={0} max={undefined} title="Large Corner Radius" bind:value={radiusLarge} onInput={() => {
                document.body.style.setProperty('--cyan-radius-large', `${radiusLarge}px`);
            }}/>
            <NumberInput step={1} min={0} max={undefined} title="Medium Corner Radius" bind:value={radiusMedium} onInput={() => {
                document.body.style.setProperty('--cyan-radius-medium', `${radiusMedium}px`);
            }}/>
            <NumberInput step={1} min={0} max={undefined} title="Small Corner Radius" bind:value={radiusSmall} onInput={() => {
                document.body.style.setProperty('--cyan-radius-small', `${radiusSmall}px`);
            }}/>
            <NumberInput step={1} min={0} max={undefined} title="XS Corner Radius" bind:value={radiusXS} onInput={() => {
                document.body.style.setProperty('--cyan-radius-xs', `${radiusXS}px`);
            }}/>
            <NumberInput step={1} min={0} max={undefined} title="XL Corner Radius" bind:value={radiusXL} onInput={() => {
                document.body.style.setProperty('--cyan-radius-xl', `${radiusXL}px`);
            }}/>
            <NumberInput step={1} min={0} max={undefined} title="Round Interface Corner Radius" bind:value={radiusRoundInterface} onInput={(e) => {
                document.body.style.setProperty('--cyan-radius-round-interface', `${radiusRoundInterface}px`);
            }}/>
		</div>
		{/if}
		{#if cyanStudioTab === "export"}
		<div class="cyan-studio-page">
			<h2 style="margin: 16px; margin-bottom: 0; margin-left: 0;">Export as:</h2>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<div
				class="button"
				on:click={() => {
					navigator.clipboard.writeText(generateCSS());
				}}
			>
				Custom CSS/QuickCSS
			</div>
			<a
				class="button"
				href={"data:text/plain;charset=utf-8," + encodeURIComponent(generateCSS(true))}
				download="Cyan.theme.css"
			>
				Full Theme
			</a>
		</div>
		{/if}
	</div>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class="cyan-studio-tabs">
		<div class="cyan-studio-tab" id="cyan-studio_close" on:click={() => showCyanStudio.set(false)}>
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
				<path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
			</svg>
		</div>
		<div class={"cyan-studio-tab " + (cyanStudioTab === "settings" ? "checked":"")} id="cyan-studio_settings" on:click={() => cyanStudioTab = "settings"}>
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
				<path d="M7.068.727c.243-.97 1.62-.97 1.864 0l.071.286a.96.96 0 0 0 1.622.434l.205-.211c.695-.719 1.888-.03 1.613.931l-.08.284a.96.96 0 0 0 1.187 1.187l.283-.081c.96-.275 1.65.918.931 1.613l-.211.205a.96.96 0 0 0 .434 1.622l.286.071c.97.243.97 1.62 0 1.864l-.286.071a.96.96 0 0 0-.434 1.622l.211.205c.719.695.03 1.888-.931 1.613l-.284-.08a.96.96 0 0 0-1.187 1.187l.081.283c.275.96-.918 1.65-1.613.931l-.205-.211a.96.96 0 0 0-1.622.434l-.071.286c-.243.97-1.62.97-1.864 0l-.071-.286a.96.96 0 0 0-1.622-.434l-.205.211c-.695.719-1.888.03-1.613-.931l.08-.284a.96.96 0 0 0-1.186-1.187l-.284.081c-.96.275-1.65-.918-.931-1.613l.211-.205a.96.96 0 0 0-.434-1.622l-.286-.071c-.97-.243-.97-1.62 0-1.864l.286-.071a.96.96 0 0 0 .434-1.622l-.211-.205c-.719-.695-.03-1.888.931-1.613l.284.08a.96.96 0 0 0 1.187-1.186l-.081-.284c-.275-.96.918-1.65 1.613-.931l.205.211a.96.96 0 0 0 1.622-.434zM12.973 8.5H8.25l-2.834 3.779A4.998 4.998 0 0 0 12.973 8.5m0-1a4.998 4.998 0 0 0-7.557-3.779l2.834 3.78zM5.048 3.967l-.087.065zm-.431.355A4.98 4.98 0 0 0 3.002 8c0 1.455.622 2.765 1.615 3.678L7.375 8zm.344 7.646.087.065z"/>
			</svg>
		</div>
		<div class={"cyan-studio-tab " + (cyanStudioTab === "export" ? "checked":"")} id="cyan-studio_export" on:click={() => cyanStudioTab = "export"}>
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
				<path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
				<path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
			</svg>
		</div>
	</div>
</div>
{/if}

<style lang="scss">
	@font-face {
    font-family: "Comfortaa";
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/comfortaa/v40/1Pt_g8LJRfWJmhDAuUsSQamb1W0lwk4S4TbMDrMfIA.woff2) format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD
}
@font-face {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/montserrat/v26/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtr6Hw5aXo.woff2) format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD
}
	:global(:root) {
	    --cyan-background-img: url("https://dablulite.github.io/b2e7544e927e0a5d7b1b.jpg");
	    --cyan-blur: 48px;
	    --cyan-radius-round-interface: 50px;
	    --cyan-radius-interface: 24px;
	    --cyan-radius-xl: 20px;
	    --cyan-radius-large: 16px;
	    --cyan-radius-medium: 12px;
	    --cyan-radius-small: 8px;
	    --cyan-radius-xs: 4px;
	    --cyan-channelbar-width: 320px;
	    --cyan-accent-color: #009f88;
	    --cyan-interface-shadow: 0 4px 10px 0 rgb(0 0 0 / 60%);
	    --cyan-second-layer: rgb(0 0 0/60%);
	    --cyan-background-primary: rgb(0 0 0/60%);
	}
	:global(html, body) {
		height: 100%;
    	width: 100%;
    	font-family: "Comfortaa", sans-serif;
    	user-select: none;
	}
	:global(body) {
		margin: 0;
	    background: var(--cyan-background-img);
	    background-position: center;
	    background-size: cover;
	    display: flex;
	    color: #fff;
	    overflow: hidden;
	    padding-top: 59px;
	    height: calc(100% - 59px);
	}
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
#cyan-studio-page-wrapper {
    width: 100%;
    height: 100%;
}
.cyan-studio-page {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 0 16px;
    gap: 8px;
    box-sizing: border-box;
}
#cyan-studio {
    margin-right: 8px;
    margin-left: 0;
    box-shadow: var(--cyan-interface-shadow);
    border-radius: var(--cyan-radius-interface);
    background: var(--cyan-background-primary);
    backdrop-filter: blur(var(--cyan-blur));
    height: calc(100% - 8px);
    width: 400px;
    flex: 0 0 auto;
    display: flex;
	animation: animleft .4s ease;
}
.cyan-studio-tabs {
    display: flex;
    flex-direction: column;
    height: calc(100% - 16px);
    flex: 0 0 auto;
    padding: 8px;
    padding-right: 14px;
}
.cyan-studio-tab {
    border-radius: var(--cyan-radius-small);
    padding: 10px;
    margin-bottom: 2px;
    transition: .2s ease;
    cursor: pointer;
    position: relative;
	&:hover {
    background-color: hsl(228 6% 32.5%/ 0.3);
}
&.checked {
    background-color: var(--cyan-second-layer);
    box-shadow: var(--cyan-interface-shadow);
}
&.checked::before {
    content: "";
    position: absolute;
    right: -7px;
    top: 50%;
    transform: translateY(-50%);
    height: 80%;
    width: 4px;
    background-color: var(--cyan-accent-color);
    z-index: 3;
    border-radius: var(--cyan-radius-xs);
    animation: animatetabindicatorLeft .4s ease;
}
}
	@keyframes -global-animatetabindicatorBottom {
	    0% {
	        opacity: 0;
	        transform: translateX(-50%) translateY(20px)
	    }
	    100% {
	        opacity: 1;
	        transform: translateX(-50%) translateY(0)
    	}
	}
	.main {
		width: calc(100% - 16px);
    	margin: 8px;
	    margin-top: 0;
	    background-color: var(--cyan-background-primary);
	    backdrop-filter: blur(var(--cyan-blur));
	    box-shadow: var(--cyan-interface-shadow);
	    border-radius: var(--cyan-radius-interface);
	    overflow-x: hidden;
	    height: calc(100% - 8px);
		&::-webkit-scrollbar {
			width: 5px;
    		height: 8px;
    		background-color: #aaa;
		}
		&::-webkit-scrollbar-thumb {
			background: #000;
		}
	}
	.nav {
		height: 59px;
	    width: 100%;
	    display: flex;
	    justify-content: start;
	    gap: 8px;
	    align-items: center;
	    flex: 0 0 auto;
	    position: absolute;
	    top: 0;
	    left: 0;
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
		    color: #000;
		    position: relative;
			text-decoration: none;
		    &.active::before {
		        content: "";
		        width: 50%;
		        height: 2px;
		        background-color: #000;
		        position: absolute;
		        left: 50%;
		        transform: translateX(-50%);
		        bottom: 2px;
		        border-radius: var(--cyan-radius-xs);
		        animation: animatetabindicatorBottom .4s ease;
		    }
		}
	}

	:global(.button) {
    border-radius: var(--cyan-radius-medium);
    height: fit-content;
    background-color: var(--cyan-second-layer);
    color: #fff;
    display: flex;
    gap: 8px;
    align-items: center;
    transition: .2s ease;
    padding: 2px 16px;
    height: 32px;
    text-decoration: none;
    border: none;
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
    cursor: pointer;
    justify-content: center;
	&:hover {
    	box-shadow: var(--cyan-interface-shadow);
	}
}
:global(.white-anchor) {
    color: #fff;
}
@keyframes -global-animatetabindicatorLeft {
    0% {
        opacity: 0;
        transform: translateY(-50%) translateX(20px);
    }
    100% {
        opacity: 1;
        transform: translateY(-50%) translateX(0);
    }
}
</style>
