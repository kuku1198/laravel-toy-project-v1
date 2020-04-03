<template>
    <v-app>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
    </v-app>
</template>

<script>
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

export default {
    components: {
        Header,
        Main,
        Footer,
    },
    created() {
        this.$vuetify.theme.dark = true;
    },
};
</script>
