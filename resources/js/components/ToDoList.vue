<template>
    <v-row class="ma-auto" align="start" justify="center">
        <v-col cols="12" md="8">
            <v-card>
                <v-toolbar color="deep-orange">
                    <v-toolbar-title>To Do List</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                    <v-form>
                        <v-text-field name="eamil" type="text" />
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-spacer />
                    <v-btn color="deep-orange" @click="setItem">Add</v-btn>
                </v-card-actions>
            </v-card>

            <v-card style="border-top: 1px solid white;">
                <v-list rounded>
                    <v-list-item-group>
                        <v-list-item v-for="item in items">
                            <v-list-item-content>
                                <v-list-item-title
                                    v-text="item.text"
                                ></v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    data: () => ({
        items: [
            { text: 'Real-Time' },
            { text: 'Audience' },
            { text: 'Conversions' },
        ],
    }),
    methods: {
        setItem() {
            this.items.push({ text: 'test' });
        },
    },
};
</script>
