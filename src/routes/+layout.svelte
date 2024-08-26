<script lang="ts">
	import { page } from '$app/stores';
	import { inject } from '@vercel/analytics';
	import { showCyanStudio } from './main';

	import { signIn, signOut } from '@auth/sveltekit/client';

	import person_circle from 'bootstrap-icons/icons/person-circle.svg';

	import 'bootstrap-icons/font/bootstrap-icons.scss';
	import CyanStudio from './CyanStudio.svelte';
	import pageBg from "$lib/images/page-bg.jpg";
	import { onMount } from 'svelte';
	
	onMount(() => {
		document.documentElement.style.setProperty('--cyan-background-img', `url("${pageBg}")`);
	})

	inject();
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-missing-attribute -->
<div style="display: flex; flex-direction: column; width: 100%; height: 100%;">
	{#if $page.url.pathname.startsWith("/projectcolorway/colorish")}
	<style lang="scss">
		body {
    background: #090909;
}
.nav {
    color: #FFFFFF !important;
}
.main {
    margin: 0 !important;
    border-radius: 0 !important;
    background: none !important;
    backdrop-filter: none !important;
    box-shadow: none !important;
    width: 100% !important;
}
	</style>
	{/if}
	<div class="nav">
		<a
			href="/"
			class={`back ${
				$page.url.pathname.startsWith('/projectcolorway') ||
				$page.url.pathname.startsWith('/protected/projectcolorway') ||
				$page.url.pathname.startsWith('/nexusremastered') ||
				$page.url.pathname.startsWith('/protected/nexusremastered') ||
				$page.url.pathname.startsWith('/cyan') ||
				$page.url.pathname.startsWith('/protected/cyan')
					? 'visible'
					: ''
			}`}>&#xF12F;</a
		>
		<span style="font-weight: 1000;">DaBluLite's Project Hub</span>
		<div
			class={`navTabs ${
				$page.url.pathname.startsWith('/projectcolorway') ||
				$page.url.pathname.startsWith('/protected/projectcolorway') ||
				$page.url.pathname.startsWith('/nexusremastered') ||
				$page.url.pathname.startsWith('/protected/nexusremastered') ||
				$page.url.pathname.startsWith('/cyan') ||
				$page.url.pathname.startsWith('/protected/cyan')
					? 'hidden'
					: ''
			}`}
		>
			<a href="/" class={$page.url.pathname === '/' ? 'active' : ''}>Home</a>
			<a
				href="/cyan"
				class={$page.url.pathname.startsWith('/cyan') ||
				$page.url.pathname.startsWith('/protected/cyan')
					? 'active'
					: ''}>Cyan²</a
			>
			<a
				href="/nexusremastered"
				class={$page.url.pathname.startsWith('/nexusremastered') ||
				$page.url.pathname.startsWith('/protected/nexusremastered')
					? 'active'
					: ''}>Nexus Remastered</a
			>
			<a
				href="/projectcolorway"
				class={$page.url.pathname.startsWith('/projectcolorway') ||
				$page.url.pathname.startsWith('/protected/projectcolorway')
					? 'active'
					: ''}>Project Colorway</a
			>
			<a href="/csssnippets" class={$page.url.pathname.startsWith('/csssnippets') ? 'active' : ''}
				>CSS Snippets</a
			>
			<div
				class={`nestedTabs ${
					$page.url.pathname.startsWith('/cyan') || $page.url.pathname.startsWith('/protected/cyan')
						? 'visible'
						: ''
				}`}
			>
				<a class={$page.url.pathname == '/cyan' ? 'active' : ''} href="/cyan">Cyan²</a>
				<li class="ver-sep" />
				<a class={$page.url.pathname.startsWith('/cyan/ui') ? 'active' : ''} href="/cyan/ui"
					>User Experience</a
				>
				<a
					class={$page.url.pathname.startsWith('/cyan/serverjoin') ? 'active' : ''}
					href="/cyan/serverjoin">Joining Servers</a
				>
				<a
					class={$page.url.pathname.startsWith('/cyan/quickswitch') ? 'active' : ''}
					href="/cyan/quickswitch">Spotlight Switch</a
				>
				<a
					class={$page.url.pathname.startsWith('/cyan/settings') ? 'active' : ''}
					href="/cyan/settings">User Settings</a
				>
			</div>
			<div
				class={`nestedTabs ${
					$page.url.pathname.startsWith('/nexusremastered') ||
					$page.url.pathname.startsWith('/protected/nexusremastered')
						? 'visible'
						: ''
				}`}
			>
				<a href="/nexusremastered" class={$page.url.pathname == '/nexusremastered' ? 'active' : ''}
					>Nexus Remastered</a
				>
				<li class="ver-sep" />
				<a
					class={$page.url.pathname.startsWith('/nexusremastered/ui') ? 'active' : ''}
					href="/nexusremastered/ui">User Experience</a
				>
				<a
					class={$page.url.pathname.startsWith('/nexusremastered/serverjoin') ? 'active' : ''}
					href="/nexusremastered/serverjoin">Joining Servers</a
				>
				<a
					class={$page.url.pathname.startsWith('/nexusremastered/quickswitch') ? 'active' : ''}
					href="/nexusremastered/quickswitch">Spotlight Switch</a
				>
				<a
					class={$page.url.pathname.startsWith('/nexusremastered/settings') ? 'active' : ''}
					href="/nexusremastered/settings">User Settings</a
				>
			</div>
			<div
				class={`nestedTabs ${
					$page.url.pathname.startsWith('/projectcolorway') ||
					$page.url.pathname.startsWith('/protected/projectcolorway')
						? 'visible'
						: ''
				}`}
			>
				<a href="/projectcolorway" class={$page.url.pathname == '/projectcolorway' ? 'active' : ''}
					>Project Colorway</a
				>
				<li class="ver-sep" />
				<a
					href="/projectcolorway/colorish"
					class={$page.url.pathname.startsWith('/projectcolorway/colorish') ? 'active' : ''}
					>Colorish</a
				>
				<a
					href="/projectcolorway/sources"
					class={$page.url.pathname.startsWith('/projectcolorway/sources') ? 'active' : ''}
					>Colorway Sources</a
				>
				<a
					href="/protected/projectcolorway/submit"
					class={$page.url.pathname.startsWith('/protected/projectcolorway/submit') ? 'active' : ''}
					>Submit Colorways</a
				>
				<a
					href="/projectcolorway/generator"
					class={$page.url.pathname.startsWith('/projectcolorway/generator') ? 'active' : ''}
					>CSS Import Generator</a
				>
			</div>
		</div>
		<div on:click={() => showCyanStudio.set(true)}>Cyan Studio</div>
		<div class="user_menu_container" tabindex="-1">
			{#if Object.keys($page.data.session || {}).length}
				<img height="43" width="43" src={$page.data.session.user.image || person_circle} />
				<div class="user-menu">
					<span style="color: #fff; text-wrap: nowrap; padding-top: 8px;"
						>{$page.data.session.user.name || $page.data.session.user.email}</span
					>
					<div on:click={() => signOut()} class="button">Sign Out</div>
				</div>
			{:else}
				<img height="43" width="43" src={person_circle} />
				<div class="user-menu">
					<div on:click={() => signIn('discord')} class="button">Sign In with Discord</div>
				</div>
			{/if}
		</div>
	</div>
	<div class="main">
		<slot />
	</div>
</div>

{#if $showCyanStudio === true}
	<CyanStudio />
{/if}

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&display=swap');
	@font-face {
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 400;
		font-display: swap;
		src: url(https://fonts.gstatic.com/s/montserrat/v26/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtr6Hw5aXo.woff2)
			format('woff2');
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304,
			U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF,
			U+FFFD;
	}
	:global(:root) {
		--cyan-background-img: url('https://dablulite.github.io/b2e7544e927e0a5d7b1b.jpg');
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
		font-family: 'Comfortaa', sans-serif;
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
		height: 100%;
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
	@keyframes -global-animright {
		from {
			transform: translateX(-20px);
			opacity: 0;
		}
		to {
			opacity: 1;
			transform: none;
		}
	}
	@keyframes -global-animbottom {
		from {
			transform: translateY(20px);
			opacity: 0;
		}
		to {
			opacity: 1;
			transform: none;
		}
	}
	@keyframes -global-animatetabindicatorBottom {
		0% {
			opacity: 0;
			transform: translateX(-50%) translateY(20px);
		}
		100% {
			opacity: 1;
			transform: translateX(-50%) translateY(0);
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
		width: calc(100% - 12px);
		padding-left: 12px;
		display: flex;
		justify-content: start;
		gap: 8px;
		align-items: center;
		flex: 0 0 auto;
		color: #000;
		& > .back {
			font-family: bootstrap-icons;
			display: none;
			font-size: 24px;
			&.visible {
				display: flex;
			}
		}
		& > .navTabs {
			height: 59px;
			display: flex;
			justify-content: start;
			gap: 8px;
			align-items: center;
			margin-left: auto;
			position: relative;
			transition: 0.4s ease;
			&.hidden > a {
				transform: translateX(-20px);
				opacity: 0;
				pointer-events: none;
			}
			& > .nestedTabs {
				height: 59px;
				display: flex;
				justify-content: start;
				gap: 8px;
				align-items: center;
				margin-left: auto;
				position: absolute;
				width: max-content;
				top: 0;
				right: 0;
				transition: 0.4s ease;
				transform: translateX(20px);
				pointer-events: none;
				opacity: 0;
				&.visible {
					opacity: 1;
					transform: translateX(0);
					pointer-events: all;
				}
			}
		}
		& .button {
			border-radius: var(--cyan-radius-medium);
			height: fit-content;
			background-color: var(--cyan-second-layer);
			color: #fff;
			display: flex;
			gap: 8px;
			align-items: center;
			transition: 0.2s ease;
			padding: 2px 16px;
			height: 32px;
			min-height: 32px;
			text-decoration: none;
			border: none;
			font-size: 14px;
			font-weight: 500;
			line-height: 16px;
			cursor: pointer;
			justify-content: center;
			text-wrap: nowrap;
			&:hover {
				box-shadow: var(--cyan-interface-shadow);
			}
		}
		& img {
			border-radius: 50%;
			background-color: #fff;
		}
		& a,
		& div {
			transition: 0.4s ease;
			height: 43px;
			padding: 8px;
			display: flex;
			justify-content: center;
			align-items: center;
			cursor: pointer;
			color: currentColor;
			position: relative;
			text-decoration: none;
			&.active::before {
				content: '';
				width: 50%;
				height: 2px;
				background-color: currentColor;
				position: absolute;
				left: 50%;
				transform: translateX(-50%);
				bottom: 2px;
				border-radius: var(--cyan-radius-xs);
				animation: animatetabindicatorBottom 0.4s ease;
			}
		}
		& > span {
			height: 43px;
			padding: 8px;
			display: flex;
			justify-content: center;
			align-items: center;
			color: currentColor;
			position: relative;
			text-decoration: none;
		}
		& > ul {
			animation: animbottom 0.3s ease;
			border-radius: var(--cyan-radius-large);
			background-color: var(--cyan-background-primary);
			backdrop-filter: blur(var(--cyan-blur));
			box-shadow: var(--cyan-interface-shadow);
			color: #fff;
			display: flex;
			align-items: center;
			margin: 0;
			padding: 0 12px;
			height: 46px;
			& > a.active::before {
				bottom: 8px;
			}
		}
	}

	:global(.button) {
		border-radius: var(--cyan-radius-medium);
		height: fit-content;
		background-color: var(--cyan-second-layer);
		color: #fff !important;
		display: flex !important;
		gap: 8px;
		align-items: center;
		transition: 0.2s ease;
		padding: 2px 16px;
		height: 32px;
		text-decoration: none;
		border: none;
		font-size: 14px !important;
		font-weight: 500 !important;
		line-height: 16px !important;
		cursor: pointer;
		justify-content: center;
		font-family: 'Comfortaa', sans-serif;
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
	.ver-sep {
		display: block;
		width: 2px;
		height: 50%;
		margin: auto 3px;
		background-color: currentColor;
	}
	.user_menu_container {
		position: relative;
		cursor: default;
		z-index: +2;
		& > .user-menu {
			position: absolute;
			top: 55px;
			right: 12px;
			padding: 8px;
			display: flex;
			flex-direction: column;
			width: max-content;
			gap: 8px;
			align-items: center;
			cursor: default;
			background-color: var(--cyan-background-primary);
			backdrop-filter: blur(var(--cyan-blur));
			border-radius: var(--cyan-radius-large);
			box-shadow: var(--cyan-interface-shadow);
			transform: translateY(-20px);
			opacity: 0;
			transition: 0.3s ease;
			height: fit-content;
			pointer-events: none;
		}
		&:focus-within .user-menu {
			transform: none;
			pointer-events: all;
			opacity: 1;
		}
	}
</style>
