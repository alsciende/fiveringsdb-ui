<template>
    <form>
        <div class="form-group">
            <label>Text</label>
            <b-form-textarea v-model="text"
                             :rows="5">
            </b-form-textarea>
            <div class="card bg-light mt-1">
                <div class="card-body" v-html="markdown"></div>
            </div>
        </div>
        <div class="form-group">
            <label>Source</label>
            <b-form-input v-model="value.source"></b-form-input>
        </div>
        <div class="form-group">
            <label>Source link (optional)</label>
            <b-form-input v-model="value.link"></b-form-input>
        </div>
    </form>
</template>

<script>
  import MarkdownIt from 'markdown-it';

  const md = new MarkdownIt();

  export default {
    name: 'rulings-editor',
    props: {
      value: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        text: this.value.text,
      };
    },
    computed: {
      markdown() {
        return md.render(this.text);
      },
    },
  }
  ;
</script>

<style>
</style>
