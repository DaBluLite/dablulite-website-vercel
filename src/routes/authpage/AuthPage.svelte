<script lang="ts">
    import { signIn } from '@auth/sveltekit/client';
</script>

<svelte:head>
	<title>Please Log In | DaBluLite</title>
	<meta name="description" content="A mission to give color to the internet" />
</svelte:head>

<div class="profile-wrapper">
    <div class="profile-details-container" style="max-width: 1000px;">
        <h1 style="margin-bottom: 0;">You are logged out</h1>
        <span>It seems like you're not logged in. Logging in allows you to access a few extra features on the Project Hub, like:</span>
        <ul>
            <li>Submitting Colorways and Colorway Sources</li>
            <li>Submitting feedback and issues straight from the Project Hub, without needing a GitHub account or being in my Discord Server</li>
        </ul>
        <a class="button" on:click={() => signIn("discord")} style="width: fit-content;">Sign in using Discord</a>
    </div>
</div>

<style lang="scss">
.project-list {
    display: flex;
    flex-direction: column;
    gap: 4px;
    &>.project {
    position: relative;
    line-height: 24px;
}
}
.profile-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
	animation: animleft .4s ease;
}
.profile-details-container {
    flex-direction: column;
    justify-content: center;
    gap: 8px;
    display: flex;
}
li {
    margin-bottom: 8px;
}
</style>