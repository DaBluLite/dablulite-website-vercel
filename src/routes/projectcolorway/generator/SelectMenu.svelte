<script lang="ts">
	let pos = { x: 0, y: 0 };
	let showMenu = false;
	export let title = "Option";
	export let items: { name: string; id: string }[];
	export let item: typeof items[number];

	import { createEventDispatcher } from "svelte";

	const dispatch = createEventDispatcher();

	function rightClickContextMenu(e: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement; }) {
        window.dispatchEvent(new Event("click"));
		showMenu = !showMenu;
		pos = {
			x: e.currentTarget.getBoundingClientRect().x - 8,
			y: e.currentTarget.getBoundingClientRect().y - 16
		};
	}
	function onPageClick() {
		showMenu = false;
	}

	function onSourceChange_internal(src: { name: string; id: string }) {
		dispatch("change", src);
		showMenu = false;
		item = src;
	}
</script>

{#if showMenu}
	<nav style="position: absolute; top:{pos.y}px; left:{pos.x}px">
		{#each items as { name, id }}
			<button
				on:click={() => onSourceChange_internal({ name, id })}
				class="colorwaysContextMenuItm"
			>
				{name}
				<svg
					aria-hidden="true"
					role="img"
					width="18"
					height="18"
					viewBox="0 0 24 24"
					style="margin-left: 8px;"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
						fill="currentColor"
					/>
					{#if item.id == id}
						<circle fill="#fff" cx="12" cy="12" r="5" />
					{/if}
				</svg>
			</button>
		{/each}
	</nav>
{/if}

<button
	class="button"
	on:click|stopPropagation={(e) => {
		rightClickContextMenu(e);
	}}
>
	{title}: {item.name}
</button>
<svelte:window on:click={onPageClick} />

<style lang="scss">
	@keyframes animbottom {
    from {
        transform: translateY(-20px);
        opacity: 0;
    }
    to {
        opacity: 1;
        transform: none;
    }
}
	nav {
		border-radius: var(--cyan-radius-xl);
		box-shadow: var(--cyan-interface-shadow);
		background-color: var(--cyan-second-layer);
		padding: 4px;
		display: flex;
		flex-direction: column;
		gap: 4px;
		z-index: 5;
		backdrop-filter: blur(var(--cyan-blur));
		animation: animbottom .4s ease;
		& > button {
			box-sizing: border-box;
			display: flex;
			justify-content: space-between;
			align-items: center;
			min-height: 32px;
			padding: 8px 12px;
			border-radius: var(--cyan-radius-small);
			transition: 0.2s ease;
			cursor: pointer;
			color: #dfdfdf;
			border: none;
			background-color: transparent;
			&:hover {
				background-color: var(--cyan-second-layer);
				box-shadow: var(--cyan-interface-shadow);
			}
		}
	}
</style>
