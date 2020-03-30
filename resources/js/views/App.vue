<template>
    <v-app>
        <Header></Header>
        <Footer></Footer>
    </v-app>
</template>

<script>
    import Header from '../components/Header';
    import Footer from '../components/Footer';

    export default {
        components: {
            Header, Footer
        },
        created() {
            this.$vuetify.theme.dark = true
        },
    };
</script>
