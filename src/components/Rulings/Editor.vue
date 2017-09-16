<template>
    <form>
        <div class="form-group">
            <label>Text</label>
            <mavon-editor
                    v-model="value.text"
                    :editable="true"
                    :toolbars="toolbars"
                    language="en"
                    default_open="edit"
            ></mavon-editor>
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
  import { mavonEditor } from 'mavon-editor';
  import 'mavon-editor/dist/css/index.css';

  export default {
    name: 'rulings-editor',
    props: {
      value: {
        type: Object,
        required: true,
      },
    },
    components: {
      mavonEditor,
    },
    data() {
      return {
        toolbars: {
          bold: true,
          italic: true,
          header: true,
          underline: true,
          strikethrough: true,
          quote: true,
          ol: true,
          ul: true,
          link: true,
          help: true,
          preview: true,
        },
      };
    },
  }
  ;
</script>

<style>
</style>
