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
                <h2>About Project Name</h2>
                <p>
                    Each topic presents distinct yet related questions with varying scope and scale in 
                    time, space, and the people involved. Attempts to understand and manage the mechanisms at work 
                    in floodplains have been made for six millennia. Flood waters typically inundate farm 
                    land, making the land unworkable and preventing crops from being planted or harvested.
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
		width: 70%;
		height: 70%;
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
        font-size: 40px;
    }

    p {
        font-size: 28px;
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
