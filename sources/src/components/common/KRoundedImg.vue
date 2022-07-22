<template>
    <div>
        <v-img v-bind:src="img" class="rounded-circle mx-auto mb-3 interests-border interests-img" eager/>
        <span class="body-2">{{ title }}</span>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
    name: "KRoundedImg",
    props: {
        img: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        }
    }
});
</script>

<style lang="scss" scoped>
.interests-border {
    box-shadow: 0 0 0 7px #CFD8DC;
    -moz-box-shadow: 0 0 0 7px #CFD8DC;
    -o-box-shadow: 0 0 0 7px #CFD8DC;
    -webkit-box-shadow: 0 0 0 7px #CFD8DC;
}

.interests-img {
    min-height: 90px;
    min-width: 90px;
    max-width: 90px;
    max-height: 90px;
}
</style>
