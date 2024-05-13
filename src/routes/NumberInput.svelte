<script lang="ts">
    export let title;
    export let onInput: (e) => void;
    export let value: number;
    export let min;
    export let max;
    export let step;
</script>

<h4 style="margin: 0">{title}:</h4>
<input type="number" class="text-input" on:input={onInput} bind:value={value} min={min} max={max} step={step}/>

<style lang="scss">
    .text-input {
    transition: .2s ease;
    border-radius: var(--cyan-radius-medium);
    padding: 10px 11px;
    resize: none;
    background: none;
    border: none;
    color: #fff;
	&:focus {
	    box-shadow: var(--cyan-interface-shadow);
	    background-color: var(--cyan-second-layer);
    	outline: none;
	}
}
</style>