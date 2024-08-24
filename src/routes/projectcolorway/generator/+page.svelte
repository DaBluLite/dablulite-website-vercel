<script lang="ts">
	import { page } from '$app/stores';
	import ColorPicker from 'svelte-awesome-color-picker';

	let boundAccent = '#5865f2';
	let boundSecond = '#2b2d31';
	let boundPrimary = '#313338';
	let boundTertiary = '#1e1f22';

	let app = "discord";
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
					/>
					<ColorPicker
						name="primary"
						label="Primary"
						bind:hex={boundPrimary}
						--cp-border-color="#fff"
						--cp-input-color="#333"
						--cp-bg-color="#333"
					/>
					<ColorPicker
						name="secondary"
						label="Secondary"
						bind:hex={boundSecond}
						--cp-border-color="#fff"
						--cp-input-color="#333"
						--cp-bg-color="#333"
					/>
					<ColorPicker
						name="tertiary"
						label="Tertiary"
						bind:hex={boundTertiary}
						--cp-border-color="#fff"
						--cp-input-color="#333"
						--cp-bg-color="#333"
					/>
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
</style>
