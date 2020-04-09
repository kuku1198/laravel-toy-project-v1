<template>
    <v-navigation-drawer v-model="isDrawer" app clipped>
        <v-list dense>
            <v-list-item link to="/boards">
                <v-list-item-action>
                    <v-icon>mdi-view-dashboard</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Boards</v-list-item-title>
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
