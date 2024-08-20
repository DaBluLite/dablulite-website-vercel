<svelte:head>
	<title>Home | DaBluLite</title>
	<meta name="description" content="Hello, I'm DaBluLite, a web developer that likes to experiment with different designs" />
</svelte:head>

<script lang="ts">
	import MainNr from "$lib/images/main-nr.png";
	import Main from "$lib/images/main.png";
	let homepage: "featured" | "about" = "featured";
	import colorishImg from "$lib/images/colorish.png";
</script>

<div class="profile-container">
	<!-- svelte-ignore a11y-img-redundant-alt -->
	<div style="display: flex; flex-direction: column; flex: 1 1 auto; height: 100%; position: relative;">
		<h2 class="homepage-title">
			{#if homepage == "featured"}
				Featured Project
			{:else}
				About
			{/if}
		</h2>
		{#if homepage == "featured"}
		<div class="profile-details-container animate-left">
			<h1>Colorish</h1>
			<span>
				The official manager for Project Colorway-compatible apps is here.
			</span>
			<div class="profile-social-media">
				<a href="https://github.com/ProjectColorway/colorish/releases/latest" target="_blank" class="button">Download Now</a>
				<a href="https://github.com/ProjectColorway/colorish" target="_blank" class="button"><svg fill="currentColor" width="24" height="24" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="s-y_bCXRrkrYfP"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>Github Repo</a>
				<a href="/projectcolorway/colorish" class="button">Project Page</a>
			</div>
		</div>
		{/if}
		{#if homepage == "about"}
		<div class="profile-details-container animate-left">
			<img class="profile-picture" src="https://avatars.githubusercontent.com/u/73998678?v=4" alt="dablulite profile picture"/>
			<span>Hello, I'm DaBluLite, a web developer that likes to experiment with different designs. I like music and coding, and I'm always open to testing new things.</span>
			<div class="profile-social-media">
				<a href="https://discord.com/users/582170007505731594" target="_blank" class="button"><svg fill="currentColor" width="24" height="24" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"></path></svg>@dablulite</a>
				<a href="https://github.com/DaBluLite/" target="_blank" class="button"><svg fill="currentColor" width="24" height="24" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>DaBluLite</a>
				<a href="https://github.com/ProjectColorway" target="_blank" class="button"><svg fill="currentColor" width="24" height="24" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>Project Colorway</a>
				<a href="https://open.spotify.com/user/k357aopsqp612md25nbd17ps4?si=b3e90c555c35450f" target="_blank" class="button"><svg fill="currentColor" width="24" height="24" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Spotify</title><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"></path></svg>DaBluLite</a>
				<a href="https://tidal.com/browse/user/197201549" target="_blank" class="button"><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="24" height="24"><title>Tidal</title><path d="M12.012 3.992L8.008 7.996 4.004 3.992 0 7.996 4.004 12l4.004-4.004L12.012 12l-4.004 4.004 4.004 4.004 4.004-4.004L12.012 12l4.004-4.004-4.004-4.004zM16.042 7.996l3.979-3.979L24 7.996l-3.979 3.979z"/></svg>DaBluLite</a>
				<a href="https://steamcommunity.com/id/dablulite/" target="_blank" class="button"><svg fill="currentColor" width="24" height="24" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z"></path></svg>DaBluLite</a>
				<!-- svelte-ignore a11y-missing-attribute -->
				<a target="_blank" class="button"><svg fill="currentColor" width="24" height="24" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.102 21.033C6.211 22.881 8.977 24 12 24c3.026 0 5.789-1.119 7.902-2.967 1.877-1.912-4.316-8.709-7.902-11.417-3.582 2.708-9.779 9.505-7.898 11.417zm11.16-14.406c2.5 2.961 7.484 10.313 6.076 12.912C23.002 17.48 24 14.861 24 12.004c0-3.34-1.365-6.362-3.57-8.536 0 0-.027-.022-.082-.042-.063-.022-.152-.045-.281-.045-.592 0-1.985.434-4.805 3.246zM3.654 3.426c-.057.02-.082.041-.086.042C1.365 5.642 0 8.664 0 12.004c0 2.854.998 5.473 2.661 7.533-1.401-2.605 3.579-9.951 6.08-12.91-2.82-2.813-4.216-3.245-4.806-3.245-.131 0-.223.021-.281.046v-.002zM12 3.551S9.055 1.828 6.755 1.746c-.903-.033-1.454.295-1.521.339C7.379.646 9.659 0 11.984 0H12c2.334 0 4.605.646 6.766 2.085-.068-.046-.615-.372-1.52-.339C14.946 1.828 12 3.545 12 3.545v.006z"></path></svg>DaBluLite</a>
			</div>
		</div>
		{/if}
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div class="nav" style="width: 100%;">
			<div class={homepage == "featured"? "active": ""} on:click={() => homepage = "featured"}>Featured</div>
			<div class={homepage == "about"? "active": ""} on:click={() => homepage = "about"}>About</div>
		</div>
	</div>
	<div class="project-section animate-left">
		<h3 style="margin-bottom: 0;">Some of my projects:</h3>
		<div class="project-list">
			<div class="project">
				<img src="https://repository-images.githubusercontent.com/788805704/225292b3-b134-4a0f-902d-7ef90143e64f" alt="Project Colorway Banner">
				<b>Project Colorway</b>
				Vastly colorful. Color-only presets for apps and websites, with the goal of a colorful internet.
				<div style="display: flex; gap: 12px;">
					<a href="https://github.com/ProjectColorway" target="_blank" class="button"><svg fill="currentColor" width="24" height="24" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>GitHub Profile</a>
					<a href="/projectcolorway" class="button">Project Page</a>
				</div>
			</div>
			<div class="project">
				<img src="https://repository-images.githubusercontent.com/844245790/164e9222-b5cd-4b04-bd2d-a57c9629df50" alt="Colorish Banner">
				<b>Colorish</b>
				The official manager for Project Colorway-compatible apps.
				<div style="display: flex; gap: 12px;">
					<a href="https://github.com/ProjectColorway/colorish/releases/latest" target="_blank" class="button">Download</a>
					<a href="/projectcolorway/colorish" class="button">Project Page</a>
					<a href="https://github.com/ProjectColorway/colorish" target="_blank" class="button"><svg fill="currentColor" width="24" height="24" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>GitHub Page</a>
				</div>
			</div>
			<div class="project">
				<img src={Main} alt="Cyan Screenshot">
				<b>Cyan</b>
				A clean and customizable Discord theme, with custom background support
				<div style="display: flex; gap: 12px;">
					<a href="https://github.com/DaBluLite/Cyan" target="_blank" class="button"><svg fill="currentColor" width="24" height="24" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>Repository</a>
					<a href="https://betterdiscord.app/Download?id=753" class="button">Download</a>
				</div>
			</div>
			<div class="project">
				<img src={MainNr} alt="Nexus Remastered Screenshot">
				<b>Nexus Remastered</b>
				The theme that never came to be, and predecessor to Cyan, remastered and better than before
				<a href="https://github.com/DaBluLite/NexusRemastered" target="_blank" class="button"><svg fill="currentColor" width="24" height="24" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>Repository</a>
			</div>
			<div class="project">
				<b>DaBluLite's Project Hub</b>
				The very website you're on right now
				<a href="https://github.com/DaBluLite/dablulite-website-vercel" target="_blank" class="button"><svg fill="currentColor" width="24" height="24" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>Repository</a>
				
			</div>
			<div class="project">
				<b>Github Desktop</b>
				An Electron-based desktop app for Github, writtend in JSX (Non-react) and TS
				<a href="https://github.com/DaBluLite/gh-desktop" target="_blank" class="button"><svg fill="currentColor" width="24" height="24" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>Repository</a>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.profile-details-container {
    flex-direction: column;
    justify-content: center;
    gap: 8px;
	max-width: 600px;
	margin: auto;
	&> span {
		font-size: 24px;
	}
}
.project-section {
	flex-direction: column;
    gap: 8px;
	max-width: 400px;
	height: 100%;
	overflow: hidden auto;
	padding: 0 8px;
}
.profile-container,
.profile-details-container,
.project-section {
    display: flex;
}
.profile-picture {
    width: 162px;
    height: 162px;
    border-radius: 50%;
    box-shadow: var(--cyan-interface-shadow);
	margin-bottom: 12px;
}
.profile-container {
    gap: 20px;
    padding: 0 32px;
    height: 100%;
	align-items: start;
	justify-content: space-between;
    width: calc(100% - 64px);
	animation: animleft .4s ease;
}
.animate-left {
	animation: animleft .4s ease;
}
.project-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
	margin-bottom: 16px;
	scrollbar-width: none !important;
	animation: animleft .4s ease;
	&> .project {
    	position: relative;
    	line-height: 24px;
		padding: 12px;
		border-radius: var(--cyan-radius-medium);
		background-color: var(--cyan-second-layer);
		box-shadow: var(--cyan-interface-shadow);
		display: flex;
		flex-direction: column;
		gap: 12px;
		width: 350px;
		&> img {
			width: 100%;
			height: auto;
			border-radius: var(--cyan-radius-small);
			box-shadow: var(--cyan-interface-shadow);
			background-color: var(--cyan-second-layer);
		}
		&> b {
			font-size: 20px;
		}
	}
}
.profile-social-media {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}
.nav {
		height: 59px;
		width: 100%;
		display: flex;
		justify-content: start;
		gap: 8px;
		align-items: center;
		flex: 0 0 auto;
		color: #fff;
		& .button {
		border-radius: var(--cyan-radius-medium);
		height: fit-content;
		background-color: var(--cyan-second-layer);
		color: #fff;
		display: flex;
		gap: 8px;
		align-items: center;
		transition: 0.2s ease;
		padding: 2px 16px;
		height: 32px;
		min-height: 32px;
		text-decoration: none;
		border: none;
		font-size: 14px;
		font-weight: 500;
		line-height: 16px;
		cursor: pointer;
		justify-content: center;
		text-wrap: nowrap;
		&:hover {
			box-shadow: var(--cyan-interface-shadow);
		}
	}
		& img {
			border-radius: 50%;
			background-color: #fff;
		}
		& a,
		& div {
			height: 43px;
			padding: 8px;
			display: flex;
			justify-content: center;
			align-items: center;
			cursor: pointer;
			color: currentColor;
			position: relative;
			text-decoration: none;
			&.active::before {
				content: '';
				width: 50%;
				height: 2px;
				background-color: currentColor;
				position: absolute;
				left: 50%;
				transform: translateX(-50%);
				bottom: 2px;
				border-radius: var(--cyan-radius-xs);
				animation: animatetabindicatorBottom 0.4s ease;
			}
		}
		&> span {
			height: 43px;
			padding: 8px;
			display: flex;
			justify-content: center;
			align-items: center;
			color: currentColor;
			position: relative;
			text-decoration: none;
		}
		& > ul {
			animation: animbottom 0.3s ease;
			border-radius: var(--cyan-radius-large);
			background-color: var(--cyan-background-primary);
			backdrop-filter: blur(var(--cyan-blur));
			box-shadow: var(--cyan-interface-shadow);
			color: #fff;
			display: flex;
			align-items: center;
			margin: 0;
			padding: 0 12px;
			height: 46px;
			& > a.active::before {
				bottom: 8px;
			}
		}
	}
	.homepage-title {
		position: absolute;
		top: 30px;
		left: 10px;
		margin: 0;
	}
</style>
