<template>
    <footer class="bg-light d-print-none">
        <div class="container text-center pt-3">
            <p>
                Work in progress by <a href="https://twitter.com/alsciende">@alsciende</a>.
                API Documentation at <a href="https://alsciende.github.io/fiveringsdb-api/">https://alsciende.github.io/fiveringsdb-api/</a>.
            </p>
            <p class="small">
                The source material, text and images, presented on this site, is copyrighted by Fantasy Flight Games.<br>
                Legend of the Five Rings is a trademark of Fantasy Flight Games.
            </p>
            <p class="small">
                This website is not produced, endorsed, supported, or affiliated with Fantasy Flight Games.
            </p>
        </div>
    </footer>
</template>

<script>
  export default {
    name: 'app-footer',
    props: [],
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    footer {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 130px;
    }
</style>
