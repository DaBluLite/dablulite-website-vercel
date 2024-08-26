<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import ColorPicker from 'svelte-awesome-color-picker';
	import { _sources } from '../../+server';
	import { colorToHex } from '$lib/utils';

	let boundAccent = '#5865f2';
	let boundSecond = '#2b2d31';
	let boundPrimary = '#313338';
	let boundTertiary = '#1e1f22';

	let app = "discord";

	let colorwayData: SourceObject[] = [];

	onMount(async () => {
		const onlineSources: { name: string; url: string }[] = [{
			name: "Project Colorway",
			url: "https://raw.githubusercontent.com/ProjectColorway/ProjectColorway/master/index.json"
		}, ..._sources.sources];

		const responses: Response[] = await Promise.all(
			onlineSources.map(({ url }: { url: string }) =>
				fetch(url)
			)
		);

		colorwayData = (await Promise.all(responses
				.map((res, i) => ({
					response: res,
					name: onlineSources[i].name,
				}))
				.map((res: { response: Response; name: string }) =>
					res.response
						.json()
						.then((dt) => ({
							colorways: dt.colorways as Colorway[],
							source: res.name,
							type: "online" as SourceType,
						}))
						.catch(() => ({
							colorways: [] as Colorway[],
							source: res.name,
							type: "online" as SourceType,
						}))
				))) as {
			type: SourceType;
			source: string;
			colorways: Colorway[];
		}[];
	})
</script>

<svelte:head>
	<title>Generate CSS Import | DaBluLite</title>
</svelte:head>

<div class="profile-wrapper">
	<div class="profile-details-container">
		<h1 style="margin-bottom: 0;">Generate a Colorway CSS import</h1>
		<div style="display: flex; gap: .75rem; flex-direction: column; align-items: start;">
				<div style="display: flex; gap: .75rem;">
					<ColorPicker
						name="accent"
						label="Accent"
						bind:hex={boundAccent}
						--cp-border-color="#fff"
						--cp-input-color="#333"
						--cp-bg-color="#333"
						isAlpha={false}
					/>
					<ColorPicker
						name="primary"
						label="Primary"
						bind:hex={boundPrimary}
						--cp-border-color="#fff"
						--cp-input-color="#333"
						--cp-bg-color="#333"
						isAlpha={false}
					/>
					<ColorPicker
						name="secondary"
						label="Secondary"
						bind:hex={boundSecond}
						--cp-border-color="#fff"
						--cp-input-color="#333"
						--cp-bg-color="#333"
						isAlpha={false}
					/>
					<ColorPicker
						name="tertiary"
						label="Tertiary"
						bind:hex={boundTertiary}
						--cp-border-color="#fff"
						--cp-input-color="#333"
						--cp-bg-color="#333"
						isAlpha={false}
					/>
				</div>
				<div class="selector">
					{#each colorwayData as { colorways }}
						<!-- svelte-ignore a11y-no-static-element-interactions -->
						{#each colorways as color}
							<!-- svelte-ignore a11y-click-events-have-key-events -->
							<div
								class="button"
								on:click={() => {
									(color.colors || ["accent", "primary", "secondary", "tertiary"]).forEach((colorStr) => {
										switch(colorStr) {
											case "accent":
												boundAccent = "#" + colorToHex(color[colorStr]);
												return;
											case "primary":
												boundPrimary = "#" + colorToHex(color[colorStr]);
												return;
											case "secondary":
												boundSecond = "#" + colorToHex(color[colorStr]);
												return;
											case "tertiary":
												boundTertiary = "#" + colorToHex(color[colorStr]);
												return;
										}
									})
								}}
							>
								<div class="colorwayColors">
									{#if !color.isGradient}
										{#each (color.colors || ["accent", "primary", "secondary", "tertiary"]) as colorStr}
											<div
												class="color"
												style={`background-color: #${colorToHex(
													color[colorStr]
												)}`}
											/>
										{/each}
									{:else}
										<div
											class="color"
											style={`background: linear-gradient(${color.linearGradient})`}
										/>
									{/if}
								</div>
								<span class="label">{color.name}</span>
							</div>
						{/each}
					{/each}
				</div>
				<select name="" id="" class="button" style="border: none;" bind:value={app}>
					<option value="discord">Discord</option>
					<option value="github">GitHub</option>
					<option value="cyan">Cyan</option>
					<option value="cyanlegacy">Cyan 1 (Legacy)</option>
					<option value="nexusremastered">Nexus Remastered</option>
					<option value="modular">Modular (Discord Theme)</option>
					<option value="virtualboy">Virtual-Boy (Discord Theme)</option>
					<option value="solana">Solana (Discord Theme)</option>
				</select>
				<button class="button" on:click={() => {
					navigator.clipboard.writeText(`@import url("${$page.url.origin}/projectcolorway/gen?app=${app}&accent=${boundAccent.replace("#", "")}&primary=${boundPrimary.replace("#", "")}&secondary=${boundSecond.replace("#", "")}&tertiary=${boundTertiary.replace("#", "")}");`)
				}}>Copy Import</button>
		</div>
	</div>
</div>

<style lang="scss">
	.profile-wrapper {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		animation: animleft 0.4s ease;
	}
	.profile-details-container {
		flex-direction: column;
		justify-content: center;
		gap: 8px;
		display: flex;
	}
	.selector {
		display: flex;
		flex-direction: column;
		gap: 4px;
		width: 100%;
		max-height: 400px;
		overflow: hidden auto;
		scrollbar-width: thin !important;
		padding: 0 8px;
		margin-left: -8px;
		& > .button {
			justify-content: start;
			width: 100%;
			flex-shrink: 0;
			box-sizing: border-box;
			min-height: 44px;
			align-items: center;
			gap: 0;
			padding: 0 8px;
			& .label {
				margin-right: auto;
				margin-left: 0.5rem;
			}
			& > .colorwayColors {
				flex-shrink: 0;
				display: flex;
				flex-flow: wrap;
				flex-direction: row;
				overflow: hidden;
				border-radius: 50%;
				width: 30px;
				height: 30px;
				box-shadow: 0 0 0 1.5px #a6a6a6;
				box-sizing: border-box;
				& > .color {
					width: 50%;
					height: 50%;
				}
				&:not(:has(> .color:nth-child(2))) > .color {
					width: 100%;
					height: 100%;
				}
				&:not(:has(> .color:nth-child(3))) > .color {
					height: 100%;
				}
				&:not(:has(> .color:nth-child(4))) > .color:nth-child(3) {
					width: 100%;
				}
			}
		}
	}
</style>
