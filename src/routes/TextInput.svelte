<script lang="ts">
	import { createEventDispatcher } from "svelte";

    export let title: string,
        placeholder: string = "Enter text...",
        value: string,
        required: boolean = false,
        name: string = "";

    const dispatch = createEventDispatcher();
</script>

<h4 style="margin-bottom: 0;">{title}:</h4>
<input type="text" class="text-input" placeholder={placeholder}  bind:value={value} required={required} name={name} on:input={({ currentTarget: { value } }) => dispatch("input", value)} />

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