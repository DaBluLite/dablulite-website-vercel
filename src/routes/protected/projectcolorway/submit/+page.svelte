<script lang="ts">
	import { enhance } from '$app/forms';
	import TextInput from '../../../TextInput.svelte';
	import ColorPicker from 'svelte-awesome-color-picker';

	let checked: 'colorway' | 'source' = 'colorway';

	let colorwaySourceName = '';

	let colorwayName = '';
	let colorway_codetype: 'none' | 'manual' | 'auto' = 'none';
	let boundAccent = '#5865f2';
	let boundSecond = '#2b2d31';
	let boundPrimary = '#313338';
	let boundTertiary = '#1e1f22';
    let filename = "";

	function reset() {
		colorwayName = '';
		colorwaySourceName = '';
		colorway_codetype = 'none';
		boundAccent = '#5865f2';
		boundSecond = '#2b2d31';
		boundPrimary = '#313338';
		boundTertiary = '#1e1f22';
        filename = ""
	}

	function reset_colorway() {
		boundAccent = '#5865f2';
		boundSecond = '#2b2d31';
		boundPrimary = '#313338';
		boundTertiary = '#1e1f22';
	}
</script>

<div class="profile-wrapper">
	<div class="profile-details-container">
		<h1 style="margin-bottom: 0;">Submit a Colorway/Colorway Source</h1>
		<div style="display: flex; gap: .75rem;">
			<label for="type-colorway"
				><input
					id="type-colorway"
					type="radio"
					name="type"
					value="colorway"
					checked
					on:click={() => {
						checked = 'colorway';
						reset();
					}}
				/> Colorway</label
			>
			<label for="type-source"
				><input
					id="type-source"
					type="radio"
					name="type"
					value="source"
					on:click={() => {
						checked = 'source';
						reset();
					}}
				/> Colorway Source</label
			>
		</div>
		{#if checked == 'colorway'}
			<form method="post" use:enhance action="?/colorway">
				<TextInput
					title="Colorway Name"
					value={colorwayName}
					on:input={({ detail }) => {
						colorwayName = detail
					}}
					placeholder="Give your colorway a name"
					required
				/>
				<h3 style="margin: 0;">Colors</h3>
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
				<button type="submit" class="button">Submit Colorway</button>
			</form>
			<!-- <h3 style="margin: 0;">Import type (if any)</h3>
                <div style="display: flex; gap: .75rem;">
                    <label for="code-none"><input id="code-none" type="radio" name="codetype" value="none" checked on:click={() => {
                        colorway_codetype = "none";
                        reset_colorway();
                    }}> None</label>
                    <label for="code-manual"><input id="code-manual" type="radio" name="codetype" value="manual" on:click={() => {
                        colorway_codetype = "manual";
                        reset_colorway();
                    }}> Manually Created</label>
                    <label for="code-auto"><input id="code-auto" type="radio" name="codetype" value="auto" on:click={() => {
                        colorway_codetype = "auto";
                        reset_colorway();
                    }}> Automatically Created</label>
                </div> -->
		{:else if checked == 'source'}
			<form action="?/colorwaySource" method="post" use:enhance enctype="multipart/form-data">
				<TextInput
					title="Colorway Source Name"
					name="colorway-source"
					bind:value={colorwaySourceName}
					placeholder="Give your colorway source a name"
					required
				/>
				<div class="button-wrap">
					<label for="source" class="button">{filename ? `Selected Source File: ${filename}` : "Upload Source File"}</label>
					<input type="file" name="source" id="source" accept="application/json" required on:input={(e) => {
                        if(e.target.files.length) {
                            filename = e.target.files[0].name;
                        }
                    }} />
				</div>
				<button type="submit" class="button">Submit Colorway</button>
			</form>
		{/if}
	</div>
</div>

<svelte:head>
	<title>Submit Colorways | DaBluLite</title>
</svelte:head>

<style lang="scss">
	.button-wrap {
        width: 100%;
		position: relative;
		& > input[type='file'] {
			position: absolute;
			color: transparent;
			z-index: -1;
			top: 10px;
			left: 8px;
            opacity: 0;
            pointer-events: none;
		}
        & > .button {
            width: fit-content;
            display: flex;
        }
	}
	form {
		display: flex;
		flex-direction: column;
		gap: 8px;
		align-items: start;
		& > :global(input[type='text']) {
			width: 100%;
		}
	}
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
	input[type='radio'] {
		appearance: none;
		margin: 0;
		font: inherit;
		color: currentColor;
		width: 1.15em;
		height: 1.15em;
		border: 1px solid #fff;
		border-radius: 50%;
		transform: translateY(-0.075em);
		display: grid;
		place-content: center;
		&::before {
			content: '';
			width: 1.15em;
			height: 1.15em;
			border-radius: 50%;
			transform: scale(0);
			//translate: -0.5px -0.25px;
			transition: 0.3s transform ease;
			background-color: var(--cyan-accent-color);
		}
		&:checked::before {
			transform: scale(1);
		}
	}
	label {
		display: grid;
		grid-template-columns: 1em auto;
		gap: 0.5em;
		cursor: pointer;
		color: #cfcfcf;
		&:hover,
		&:has(:checked) {
			color: #fff;
		}
	}
</style>
