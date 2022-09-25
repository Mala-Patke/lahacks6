<script lang="ts">
	let x = true;
	const toggleModal = () => {
		x = !x;
	};
</script>

{#if x}
	<div class="wrapper">
		<div class="modal">
			<button class="x-btn" on:click={toggleModal}>x</button>
            <div>
                <h2>How to Use</h2>
                <p>
                    Once you close this window, you will see a marker on the screen. This marker represents the center 
                    of the circular affected area of your choosing. Drag the marker to the location you want to flood, 
                    or simply click on the location. When you have selected a location to flood, click "Flood!". On 
                    the right, a bunch of numbers will pop up on the right whose headers are self-explanatory. To see 
                    this page again, click "Help" in the top-right corner. Above that is also a page describing our 
                    intentions behind this project.
                </p>
            </div>
		</div>
	</div>
{/if}

{#if !x}
	<button class="help-btn" on:click={toggleModal}>Help</button>
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

	.help-btn {
		position: absolute;
		right: 2vh;
		top: 8vh;
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
