<script lang="ts">
    export let title;
    export let onInput;
    export let value;
    export let min;
    export let max;
</script>

<h4 style="margin: 0">{title}:</h4>
<input type="number" class="text-input" on:input={onInput}  value={value?.toString()} min={min} max={max}/>

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