<script lang="ts">
	let accent = '#5865f2';
	let second = '#2b2d31';
	let primary = '#313338';
	let tertiary = '#1e1f22';
</script>

<div class="swatch">
    <div class="color" style="background-color: {accent};"/>
    <div class="color" style="background-color: {primary};"/>
    <div class="color" style="background-color: {second};"/>
    <div class="color" style="background-color: {tertiary};"/>
</div>

<style lang="scss">
	.swatch {
		display: flex;
		flex-flow: wrap;
		flex-direction: row;
		overflow: hidden;
		border-radius: 50%;
		width: 100%;
		height: 100%;
		box-shadow: 0 0 0 1.5px #a6a6a6;
		box-sizing: border-box;
        &> .color {
            width: 50%;
			height: 50%;
			display: flex;
        }
	}
</style>
