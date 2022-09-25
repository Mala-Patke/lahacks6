<script lang="ts">
	let x = false;
	const toggleModal = () => {
		x = !x;
	};
</script>

{#if x}
	<div class="wrapper">
		<div class="modal">
			<button class="x-btn" on:click={toggleModal}>x</button>
            <div>
                <h2>About "Flood is Thicker than Water"</h2>
                <p>
                    This summer (2022), seasonal rains in Pakistan spiraled into extreme flooding, covering 1/3 of the 
                    country and displacing 1/6 of the population. Often, tragedies like this must compete against 
                    mainstream news, and when the media places an invisible wall between you and the experiences of those who suffer, 
					it's easy to lose sight of the humanity behind the statistics. Through Flood is Thicker than Water, we aim to 
					remove this separation and better capture the devastating impact of the floods.
                </p>
            </div>
		</div>
	</div>
{/if}

{#if !x}
	<button class="about-btn" on:click={toggleModal}>About</button>
{/if}

<style>
    @font-face {
        font-family: "DIN PRO";
        src: url("../assets/DINPro400.otf");
    }

	.wrapper {
		width: 100vw;
		height: 100vh;
		position: fixed;
		top: 0%;
		left: 0%;
		backdrop-filter: blur(6px);
		z-index: 3;
        font-family: "DIN PRO";
	}

	.modal {
		width: 60%;
		height: 60%;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background-color: #242424;
		border: 5px solid #35A2C3;
		border-radius: 15px;
	}

    .modal div {
        width: 80%;
        height: 80%;
        position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    h2 {
        font-size: 36px;
		color: white;
    }

    p {
        font-size: 24px;
        line-height: 1.3em;
    }

	.about-btn {
		position: absolute;
		right: 2vh;
		top: 2vh;
        font-family: "DIN PRO";
        border: 1px solid rgba(255, 255, 255, 0.87);
	}

	.x-btn {
		position: absolute;
		right: 0;
		background-color: transparent;
		border-radius: 15px;
		font-size: 30px;
        font-family: "DIN PRO";
	}
</style>
