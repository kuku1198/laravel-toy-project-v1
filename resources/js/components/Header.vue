<template>


    <v-app-bar
            app
            clipped-left
    >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"/>
        <v-toolbar-title>To Do List</v-toolbar-title>
    </v-app-bar>
</template>

<script>
    export default {
        data: () => ({
            drawer: null,
        })
    }
</script>