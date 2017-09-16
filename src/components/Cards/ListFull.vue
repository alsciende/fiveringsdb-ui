<template>
    <div class="cards-list">
        <div class="row mb-2" v-for="card in cards" v-bind:key="card.id">
            <div class="col-md-7 mb-2">
                <cards-card v-bind:card="card">
                    <utils-card-link :card="card"></utils-card-link>
                </cards-card>
                <div v-for="ruling in rulings" class="card mt-2 card-ruling">
                    <div class="card-body">
                        <blockquote class="blockquote mb-0">
                            <p>
                                {{ ruling.text }}
                            </p>
                            <footer class="blockquote-footer"><a :href="ruling.href">{{ ruling.source }}</a></footer>
                        </blockquote>
                    </div>
                    <div v-if="isGuru" class="card-footer">
                        <a @click.prevent="setRuling(ruling)" href="#" class="card-link">Edit ruling</a>
                        <a href="#" class="card-link text-danger">Delete ruling</a>
                    </div>
                </div>
                <button v-if="isGuru" @click.prevent="setRuling()" type="button"
                        class="btn btn-outline-primary mt-2">Add a ruling
                </button>
                <b-modal id="rulingModal"
                         ref="rulingModal"
                         title="Ruling"
                         v-model="modal"
                         :no-close-on-backdrop="true"
                         ok-title="Save"
                         @ok="saveRuling"
                >
                    <rulings-editor v-if="ruling" v-model="ruling"></rulings-editor>
                </b-modal>
            </div>
            <div class="col-md-5 mb-2 text-center">
                <utils-card-image :card="card" class="card-image img-fluid"></utils-card-image>
            </div>
        </div>
    </div>
</template>

<script>
  import CardsCard from '../Cards/Card';
  import UtilsCardImage from '../Utils/CardImage';
  import UtilsCardLink from '../Utils/CardLink';
  import RulingsEditor from '../Rulings/Editor';

  export default {
    name: 'cards-list-full',
    props: ['cards'],
    components: {
      UtilsCardImage,
      UtilsCardLink,
      CardsCard,
      RulingsEditor,
    },
    data() {
      return {
        modal: false,
        ruling: null,
        rulings: [
          {
            text: 'If Young Rumormonger redirects the dishonor, the cost is still considered to be paid, and the character that was originally selected for dishonor gets the attachment.',
            href: 'http://www.cardgamedb.com/forums/index.php?/topic/36984-young-rumormonger-and-calling-in-favors/',
            source: 'CardGameDB forums',
          },
          {
            text: 'If Calling in Favors is used to dishonor a character and take control of an opponent\'s attachment that is attached to that same character (e.g. Cloud the Mind, Fiery Madness), the attachment stays in play.',
            href: 'http://www.cardgamedb.com/forums/index.php?/topic/37122-calling-in-favors-cloud-the-mind/',
            source: 'CardGameDB forums',
          },
        ],
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
    computed: {
      isGuru() {
        return this.$store.getters.roles.indexOf('ROLE_GURU') !== -1;
      },
    },
    methods: {
      setRuling(ruling) {
        if (ruling) {
          this.ruling = ruling;
        } else {
          this.ruling = {
            id: null,
            text: '',
            source: '',
            href: '',
          };
        }

        this.modal = true;
      },
      saveRuling() {

      },
    },
  }
  ;
</script>

<style>
    .card-ruling .blockquote {
        font-size: 1rem;
    }

    .card-ruling .blockquote .blockquote-footer {
        font-size: 1rem;
    }
</style>
