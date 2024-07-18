<template>
    <ImagemPrincipal/>
    <VideoUnico/>
    <TabelaUnica/>
</template>

<script>
import ImagemPrincipal from './ImagemDiversas.vue';
import VideoUnico from './VideoUnico.vue';
import TabelaUnica from './TabelaUnica.vue';

export default {
    name: 'PaginaPrincipal',
    components: {
          ImagemPrincipal, VideoUnico, TabelaUnica

    },
    props: {
        msg: String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
