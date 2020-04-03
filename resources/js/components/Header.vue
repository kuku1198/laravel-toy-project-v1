<template>
    <div>
        <navigation v-bind:is-drawer="drawer"></navigation>

        <v-app-bar app clipped-left>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
            <v-toolbar-title>To Do List</v-toolbar-title>
            <v-spacer></v-spacer>

            <v-btn icon to="/login">
                <v-icon>mdi-login</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>mdi-account</v-icon>
            </v-btn>
        </v-app-bar>
    </div>
</template>

<script>
import navigation from './Navigation';

export default {
    components: {
        navigation,
    },
    data() {
        return {
            drawer: false,
        };
    },
};
</script>
