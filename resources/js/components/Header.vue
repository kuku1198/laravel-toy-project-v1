<template>
    <v-app>
        <Navigation v-bind:is-drawer=drawer></Navigation>

        <v-app-bar
                app
                clipped-left
        >
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"/>
            <v-toolbar-title>To Do List</v-toolbar-title>
        </v-app-bar>
    </v-app>
</template>

<script>
    import Navigation from "./Navigation";

    export default {
        components: {
            Navigation
        },
        data: function () {
            return {
                drawer: false
            }
        }
    }
</script>