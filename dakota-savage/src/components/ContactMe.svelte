<script>

</script>

<style>
    .footer {
        display: inline-grid;
        grid-template-columns: 1fr 1fr 1fr;
        position: relative;
        width: calc(100% - 2em);
        margin: 1rem auto;
        padding: 0 1em;
    }

    .center {
        text-align: center;
        grid-column-start: 2;
        grid-column-end: 3;
    }

    .right {
        text-align: right;
        grid-column-start: 3;
        grid-column-end: 4;
    }

    .left {
        grid-column-start: 1;
        grid-column-end: 2;
    }
</style>

<div class="footer">
    <div class="left"><span>Contact Me: <a href="mailto:">djsavage0812@gmail.com</a></span></div>
    <div class="center"><span>&copy; 2021 - Built with <a href="https://sapper.svelte.dev/">Sapper</a></span></div>
    <div class="right">
        <a href="https://twitter.com/DevkotaSavage">Twitter</a>
        <a href="https://github.com/djsavage2">Github</a>
    </div>
</div>