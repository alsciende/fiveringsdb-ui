<template>
    <footer class="bg-dark text-white">
        <div class="container">
            Work in progress by <a href="https://twitter.com/alsciende">@alsciende</a>.
            API Documentation at <a href="https://alsciende.github.io/fiveringsdb/">https://alsciende.github.io/fiveringsdb/</a>.
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
        /* Set the fixed height of the footer here */
        height: 60px;
        line-height: 60px; /* Vertically center the text there */
    }
</style>
