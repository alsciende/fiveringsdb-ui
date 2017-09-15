<template>
    <div class="cards-list">
        <div class="row mb-2" v-for="card in cards" v-bind:key="card.id">
            <div class="col-md-7 mb-2">
                <cards-card v-bind:card="card">
                    <utils-card-link :card="card"></utils-card-link>
                </cards-card>
                <div v-for="ruling in rulings" class="card mt-2 card-ruling">
                    <div class="card-header">
                        Ruling
                    </div>
                    <div class="card-body">
                        <blockquote class="blockquote mb-0">
                            <p>
                                {{ ruling.text }}
                            </p>
                            <footer class="blockquote-footer"><a :href="ruling.href">{{ ruling.source }}</a></footer>
                        </blockquote>
                    </div>
                    <div v-if="isGuru" class="card-footer">
                        <a href="#" class="card-link">Edit ruling</a>
                        <a href="#" class="card-link text-danger">Delete ruling</a>
                    </div>
                </div>
                <button v-if="isGuru" type="button" class="btn btn-outline-primary mt-2">Add a ruling</button>
            </div>
            <div class="col-md-5 mb-2 text-center">
                <utils-card-image :card="card" class="card-image img-fluid"></utils-card-image>
            </div>
        </div>
    </div>
</template>

<script>
  import CardsCard from '../../components/Cards/Card';
  import UtilsCardImage from '../../components/Utils/CardImage';
  import UtilsCardLink from '../../components/Utils/CardLink';

  export default {
    name: 'cards-list-full',
    props: ['cards'],
    components: {
      UtilsCardImage,
      UtilsCardLink,
      CardsCard,
    },
    data() {
      return {
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
      };
    },
    computed: {
      isGuru() {
        return this.$store.getters.roles.indexOf('ROLE_GURU') !== -1;
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
