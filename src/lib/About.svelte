<script>
    let x = false;
    const toggleModal = () => {
        x = !x;
        console.log(x);
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
    <button class="abt-btn" on:click={toggleModal}>About</button>
{/if}

<style>
    .wrapper {
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0%;
        left: 0%;
		backdrop-filter: blur(6px);
    }
    .modal {
        width: 70%;
        height: 70%;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #242424;
        border: 5px solid #888;
        border-radius: 15px;
    }
    .x-btn {
        position: absolute;
        right: 0px;
        background-color: transparent;
        border-radius: 15px;
        font-size: 30px;
    }
</style>