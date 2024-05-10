<script lang="ts">
    export let title, placeholder = "Enter text...", onInput, value
</script>

<h4 style="margin: 0;">{title}:</h4>
<input type="text" class="text-input" placeholder={placeholder} on:input={onInput}  value={value}/>

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