<template>
    <div>
        <div class="header">
            <router-link to="/" id="name">Weather App</router-link>
            <button v-on:click="$emit('changeTheme')" id="changer">
                Theme
            </button>
        </div>
        <hr>
    </div>
</template>

<script>
    export default {
        name: "HeaderBar"
    }
</script>

<style scoped>
    hr {
        width: 60%;
        margin: auto;
        border: none;
        height: 2px;
        background-color: white;
    }

    .header {
        display: flex;
        justify-content: space-between;
        margin: auto;
        width: 60%;
    }

    #name {
        margin-top: 5px;
        font-size: 25px;
        text-decoration: none;
        color: white;
    }

    #name:after {
        text-decoration: none;
        color: white;
    }

    #changer {
        color: white;
        padding: 5px;
        border: 2px solid rgb(255, 255, 255);
        background-color: rgba(255, 255, 255, 0);
        outline: none;
        margin-top: 5px;
        margin-left: auto;
        margin-bottom: 10px;
        transition: all 0.5s;
    }

    #changer:hover {
        transition: 0.5s;
        background-color: rgba(255, 255, 255, 0.4);
    }

    @media (max-width: 400px) {
        #name {
            font-size: 20px;
        }

        #changer {
            font-size: 10px;
        }

        .header {
            width: 70%;
        }

        hr {
            width: 70%;
        }
    }
</style>