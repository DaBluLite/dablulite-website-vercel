<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import ColorPicker from 'svelte-awesome-color-picker';
	import { _sources } from '../../+server';
	import { colorToHex } from '$lib/utils';
	import TextInput from '../../TextInput.svelte';
	import SourcesMenu from './SelectMenu.svelte';
	import SelectMenu from './SelectMenu.svelte';

	let boundAccent = '#5865f2';
	let boundSecond = '#2b2d31';
	let boundPrimary = '#313338';
	let boundTertiary = '#1e1f22';

	enum SortOptions {
    NAME_AZ = 1,
    NAME_ZA = 2,
    SOURCE_AZ = 3,
    SOURCE_ZA = 4,
    SOURCETYPE_ONLINE = 5,
    SOURCETYPE_OFFLINE = 6,
    COLORCOUNT_ASCENDING = 7,
    COLORCOUNT_DESCENDING = 8,
    MOST_USED = 9,
    LEAST_USED = 10
	}

	let app = 'discord';
	let searchValue = "";
	let visibleSources = "all";
	let sortBy: SortOptions = SortOptions.NAME_AZ;

	let colorwayData: SourceObject[] = [];

	let filters = [
        {
            name: "All",
            id: "all",
            sources: colorwayData
        },
        ...colorwayData.map(source => ({
            name: source.source,
            id: source.source.toLowerCase().replaceAll(" ", "-"),
            sources: [source]
        }))
    ];

	onMount(async () => {
		const responses: Response[] = await Promise.all(
			_sources.sources.map(({ url }: { url: string }) => fetch(url))
		);

		colorwayData = (await Promise.all(
			responses
				.map((res, i) => ({
					response: res,
					name: _sources.sources[i].name
				}))
				.map((res: { response: Response; name: string }) =>
					res.response
						.json()
						.then((dt) => ({
							colorways: dt.colorways as Colorway[],
							source: res.name,
							type: 'online' as SourceType
						}))
						.catch(() => ({
							colorways: [] as Colorway[],
							source: res.name,
							type: 'online' as SourceType
						}))
				)
		)) as {
			type: SourceType;
			source: string;
			colorways: Colorway[];
		}[];

		filters = [
        {
            name: "All",
            id: "all",
            sources: colorwayData
        },
        ...colorwayData.map(source => ({
            name: source.source,
            id: source.source.toLowerCase().replaceAll(" ", "-"),
            sources: [source]
        }))
    ]
	});
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
			<TextInput placeholder="Search for a colorway..." bind:value={searchValue}/>
			<div style="display: flex; gap: 8px;">
				<SelectMenu
		item={filters.filter((filter) => filter.id == visibleSources)[0]}
		items={filters}
		title="Source"
		on:change={({ detail: { id } }) => {
			visibleSources = id;
		}}
	/>
	<SelectMenu
		item={{
			name: "Discord",
			id: "discord"
		}}
		items={[
			{
				name: "Discord",
				id: "discord"
			},
			{
				name: "GitHub",
				id: "github"
			},
			{
				name: "Cyan",
				id: "cyan"
			},
			{
				name: "Cyan 1 (Legacy) (Discord Theme)",
				id: "cyanlegacy"
			},
			{
				name: "Nexus Remastered (Discord Theme)",
				id: "nexusremastered"
			},
			{
				name: "Modular (Discord Theme)",
				id: "modular"
			},
			{
				name: "Virtual-Boy (Discord Theme)",
				id: "virtualboy"
			},
			{
				name: "Solana (Discord Theme)",
				id: "solana"
			}
		]}
		title="App"
		on:change={({ detail: { id } }) => {
			app = id;
		}}
	/>
			</div>
			<div class="selector">
				<div
					class="button"
					on:click={() => {
						boundAccent = '#5865f2';
						boundSecond = '#2b2d31';
						boundPrimary = '#313338';
						boundTertiary = '#1e1f22';
					}}
				>
					<div class="colorwayColors">
						<div class="color" style={`background-color: #5865f2`} />
						<div class="color" style={`background-color: #2b2d31`} />
						<div class="color" style={`background-color: #313338`} />
						<div class="color" style={`background-color: #1e1f22`} />
					</div>
					<div class="labelContainer">
						<span class="label">Reset to default</span>
					</div>
				</div>
				{#each (filters
					.find(filter => filter.id === visibleSources) || { name: "null", id: "null", sources: [] }).sources
					.map(({ colorways, source, type }) => colorways.map((colorway) => ({ ...colorway, sourceType: type, source: source, preset: colorway.preset || (colorway.isGradient ? "Gradient" : "Default") })))
					.flat()
					.sort((a, b) => {
						switch (sortBy) {
							case 1:
								return a.name.localeCompare(b.name);
							case 2:
								return b.name.localeCompare(a.name);
							default:
								return a.name.localeCompare(b.name);
						}
					})
					.filter(({ name }) => name.toLowerCase().includes(searchValue.toLowerCase())) as color}
					<!-- svelte-ignore a11y-no-static-element-interactions -->
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<div
							class="button"
							on:click={() => {
								(color.colors || ['accent', 'primary', 'secondary', 'tertiary']).forEach(
									(colorStr) => {
										switch (colorStr) {
											case 'accent':
												boundAccent = '#' + colorToHex(color[colorStr]);
												return;
											case 'primary':
												boundPrimary = '#' + colorToHex(color[colorStr]);
												return;
											case 'secondary':
												boundSecond = '#' + colorToHex(color[colorStr]);
												return;
											case 'tertiary':
												boundTertiary = '#' + colorToHex(color[colorStr]);
												return;
										}
									}
								);
							}}
						>
							<div class="colorwayColors">
								{#if !color.isGradient}
									{#each color.colors || ['accent', 'primary', 'secondary', 'tertiary'] as colorStr}
										<div
											class="color"
											style={`background-color: #${colorToHex(color[colorStr])}`}
										/>
									{/each}
								{:else}
									<div
										class="color"
										style={`background: linear-gradient(${color.linearGradient})`}
									/>
								{/if}
							</div>
							<div class="labelContainer">
								<span class="label">{color.name}</span>
								<span class="label sub">By {color.author} • from {color.source}</span>
							</div>
						</div>
				{/each}
			</div>
			<button
				class="button"
				on:click={() => {
					navigator.clipboard.writeText(
						`@import url("${
							$page.url.origin
						}/projectcolorway/gen?app=${app}&accent=${boundAccent.replace(
							'#',
							''
						)}&primary=${boundPrimary.replace('#', '')}&secondary=${boundSecond.replace(
							'#',
							''
						)}&tertiary=${boundTertiary.replace('#', '')}");`
					);
				}}>Copy Import</button
			>
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
		position: relative;
		display: grid;
		grid-template-columns: repeat(2, calc(50% - 4px));
		grid-auto-rows: max-content;
		gap: 8px;
		width: 100%;
		scrollbar-width: none !important;
		box-sizing: border-box;
		max-height: 400px;
		overflow: hidden auto;
		scrollbar-width: thin !important;
		padding: 0 8px;
		margin-left: -8px;
		& > .button {
			display: flex;
			flex-direction: row;
			justify-content: start;
			padding: 11px 8px;
			gap: 5px;
			box-sizing: border-box;
			min-height: 56px;
			align-items: center;
			transition: 0.2s ease;
			cursor: pointer;
			& > .labelContainer {
				min-width: 0;
				display: flex;
				flex-direction: column;
				margin-right: 8px;
				width: 100%;
			}
			& .label {
				margin-right: auto;
				margin-left: 0.5rem;
				&.sub {
					color: #a6a6a6;
				}
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
