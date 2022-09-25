<script>
    let x = false;
    const toggleModal = () => {
        x = !x;
    }
</script>

{#if x}
    <div class="wrapper">
        <div class="modal">
            <button class="x-btn" on:click={toggleModal}>x</button>
        </div>
    </div>
{/if}

{#if !x}
    <button class="about-btn" on:click={toggleModal}>About</button>
{/if}

<style>
    .wrapper {
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0%;
        left: 0%;
		backdrop-filter: blur(6px);
        z-index: 3;
    }
    .modal {
        width: 70%;
        height: 70%;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #242424;
        border: 5px solid #ff69b4;
        border-radius: 15px;
    }
    .about-btn {
        position: absolute;
        right: 2vh;
        top: 2vh;
    }
    .x-btn {
        position: absolute;
        right: 0;
        background-color: transparent;
        border-radius: 15px;
        font-size: 30px;
    }
</style>