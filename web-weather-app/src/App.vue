<template>
  <div id="app" :class="theme !== true ? 'dark' : ''">
      <div class="header">
          <p id="name">Weather App</p>
          <button v-on:click="changeTheme" id="changer">Change Theme</button>
      </div>
      <hr>
      <main>
          <router-view/>
      </main>
  </div>
</template>

<script>

export default {
      name: 'App',

      data () {
          return {
              theme: true,
          }
      },
     methods: {
          changeTheme() {
              this.theme = !this.theme
          }
     }
}
</script>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: Calibri, sans-serif;
    }

    #app {
        color: white;
        background: url("assets/light-background.png") bottom no-repeat;
        background-size: cover;
        transition: 0.75s;
        min-height: 100vh;
    }

    #app.dark {
        background-image: url("./assets/dark-background2.jpg");
    }

    main {
        padding: 30px;
        margin: auto;
        width: 80%;
    }

    hr {
        width: 60%;
        margin: auto;
        border: none;
        height: 2px;
        background-color: white;
        border-radius: 1px;
    }

    #changer {
        color: white;
        width: 100px;
        height: 30px;
        border-radius: 10px;
        border: 2px solid rgb(255, 255, 255);
        background-color:rgba(255, 255, 255, 0);
        outline: none;
        margin-top: 5px;
        margin-left: auto;
        margin-bottom: 10px;
    }

    #changer:hover {
        transition: 0.5s;
        background-color: rgba(255, 255, 255, 0.4);
    }

    .header {
        display: flex;
        justify-content: center;
        margin: auto;
        width: 60%;
    }

    #name {
        margin-top: 5px;
        font-size: 25px;
    }
    
    @media (max-width: 400px) {
        #name {
            font-size: 20px;
        }

        #changer {
            height: 30px;
            width: 70px;
            font-size: 10px;
        }
    }

</style>
