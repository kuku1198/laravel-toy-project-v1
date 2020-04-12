<template>
    <v-navigation-drawer v-model="isDrawer" app clipped>
        <v-list dense>
            <v-list-item link to="/">
                <v-list-item-action>
                    <v-icon>mdi-format-list-checks</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>To Do List</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    props: {
        isDrawer: Boolean,
    },
};
</script>
