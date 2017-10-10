<template>
    <div class="row content">
        <div class="col-md-6">
            <div class="form-group">
                <label for="name">Name</label>
                <b-form-input v-model="deck.name"
                              id="name"
                              type="text"
                              placeholder="Enter your name"></b-form-input>
            </div>
            <div class="form-group">
                <label for="description">Description</label>
                <b-form-textarea v-model="deck.description"
                                 id="description"
                                 :rows="30">
                </b-form-textarea>
            </div>
            <div class="form-group">
                <slot></slot>
            </div>
        </div>
        <div class="col-md-6">
            <b-card no-body>
                <b-tabs ref="tabs" card>
                    <b-tab title="Deck" active>
                        <h2>{{ deck.name }}</h2>
                        <utils-deck-content
                                :deck="deck"
                        ></utils-deck-content>
                    </b-tab>
                    <b-tab title="Preview">
                        <div v-html="markdown"></div>
                    </b-tab>
                    <b-tab title="Help">
                        <div class="markdown-reference" v-html="markdownReference"></div>
                    </b-tab>
                </b-tabs>
            </b-card>
        </div>
    </div>
</template>

<script>
  import MarkdownIt from 'markdown-it';
  import UtilsDeckContent from '@/components/Utils/DeckContent';
  import markdownReference from '../Builder/markdown-reference.txt';

  const md = new MarkdownIt();

  export default {
    name: 'utils-deck-description-editor',
    components: {
      UtilsDeckContent,
    },
    props: {
      deck: {
        type: Object,
        required: true,
      },

    },
    data() {
      return {
        markdownReference,
      };
    },
    computed: {
      markdown() {
        return md.render(this.deck.description);
      },
      content() {
        return this.$store.getters.slots;
      },
    },
    methods: {},
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .markdown-reference pre {
        background-color: cornsilk;
    }
</style>
