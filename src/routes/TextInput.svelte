<script lang="ts">
    export let title: string,
        placeholder: string = "Enter text...",
        value: string,
        onInput: (e: { value: string }) => void,
        name: string
</script>

<h4 style="margin-bottom: 0;">{title}:</h4>
<input type="text" class="text-input" name={name} placeholder={placeholder}  bind:value={value} on:input={onInput}/>

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