<template>
    <slot />
    <v-snackbar close-on-content-click rounded location="top" v-model="show" :timeout="options.timeout" :color="options.snackbarcolor" :vertical="options.snackvertical"
        >
        {{ text }}
        <template v-slot:actions v-if="options.showCloseButton">
            <v-btn rounded variant="icon" @click="show = false">
                <v-icon size="17" color="#ffffff">mdi-close</v-icon>
            </v-btn>
        </template>
    </v-snackbar>
</template>
  
<script lang="ts">
import { CreateSnackbarKey, CreateSnackbarOptions } from '~/composables/useSnackbar';
export default defineComponent({

    setup() {
        const state = reactive({
            show: false,
            text: '',
            options: {
                snackbarcolor: 'success',
                showCloseButton: true,
                closeButtonColor: '#ffffff',
                timeout: 3000,
                snackvertical: false
            } as CreateSnackbarOptions,
        });
        const createSnackbar = (
            text: string,
            options: CreateSnackbarOptions = {}
        ) => {
            state.show = true;
            state.text = text;
            state.options = Object.assign(state.options, options);
        };
        provide(CreateSnackbarKey, createSnackbar);
        return {
            ...toRefs(state),
        };
    },
});
</script>