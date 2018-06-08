<template>
  <div>
    <vs-row>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
        <vs-card vs-color="success">
          <vs-card-header vs-background-color="dark" vs-title="Who am I?" vs-subtitle="Hmmn..." vs-icon="search"></vs-card-header>
          <vs-card-body>
            <span>{{ card1 }}</span>
          </vs-card-body>
        </vs-card>
      </vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
        <vs-card vs-color="primary">
          <vs-card-header vs-background-color="dark" vs-title="About me" vs-subtitle="Dig in!" vs-icon="public"></vs-card-header>
          <vs-card-body>
            <span>{{ card2 }}</span>
          </vs-card-body>
        </vs-card>
      </vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
        <vs-card vs-color="primary">
          <vs-card-header vs-background-color="dark" vs-title="Experience" vs-subtitle="If I get hired" vs-icon="public"></vs-card-header>
          <vs-card-body>
            <span>{{ card3 }}</span>
          </vs-card-body>
        </vs-card>
      </vs-col>
    </vs-row>
    <vs-row>
      <vs-col vs-w="12" vs-align="center" vs-justify="center" vs-type="flex">
      <form action="mailto:haydenhoffman@gmail.com" method="post">
        <h1>Contact me!</h1>
         Name: <br><vs-input vs-label-placeholder="name" name="name" v-model="input.name"/><br>
         Email: <br><vs-input vs-label-placeholder="email" name="email" v-model="input.email"/><br>
         Message: <br><vs-input vs-label-placeholder="message" name="message" v-model="input.message"/><br><br>
        <vs-button type="submit">Contact</vs-button>
      </form>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
    export default {
        name: "Home",
        data () {
          return {
            input: {
              name: '',
              email: '',
              message: ''
            },
            card1: 'Hey, the name\'s Hayden, a second-year engineering student at Western University. If you\'ve happened to stumble across this webpage, well... you\'re on my personal webpage, an intricate little thing that takes a look at all the wonderful projects I\'d partaken in over the past couple of years.',
            card2: 'My hobbies include programming, long-distance biking, cooking, making music and a lot of other cool stuff! I\'m a huge extrovert and love to meet new people, make new connections, and help people out in any way possible. Definitely reach out to me for any questions or if you\'d like to get to know me better!',
            card3: 'I currently work as one of the lead front-end developers for Motify Learn - a startup with the goal to build an app that encourages those on the autism spectrum to live a proper, structured life and to develop any necessary skills needed for daily activities. Not only will this jumpstart my career, but it\'s fun, too!'
          }
        },
        created () {

        },
        methods: {
          vClick: function() {
            this.$vs.notify({title:'Default',text:'Yes sir, this is me!'});
          }
        }
    }
</script>

<style scoped>
  body {
    background-image: url("../assets/nature.jpg");
  }
</style>
