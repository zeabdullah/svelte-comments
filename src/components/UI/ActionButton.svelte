<script lang="ts">
	type ActionButtonVariant = 'primary' | 'secondary';

	let classname = '';

	export let variant: ActionButtonVariant = 'primary';
	export { classname as class };
</script>

<button class="btn-action btn-action--{variant} {classname}" on:click>
	<slot />
</button>

<style lang="scss">
	.btn-action {
		display: flex;
		align-items: center;
		gap: 0.5rem;

		font-weight: var(--fw-700);
		background-color: transparent;
		padding: 0.4rem 0.6rem;
		border-radius: calc(var(--bdr-radius) / 2);

		transition: opacity var(--duration) linear;

		&:hover {
			opacity: 0.5;
		}

		&--primary {
			color: var(--clr-primary-500);
		}
		&--secondary {
			color: var(--clr-accent-500);
		}
	}
</style>
