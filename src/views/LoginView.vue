<template>
    <div class="login-view">
        <div class="login-content ">
            <div class="flex flex-column gap-3">
                <h1 class="heading m-0">
                    {{ $t('local.login.labels.login') }}
                </h1>
                <p class="login-prompt">
                    {{ $t('local.login.labels.signInPrompt') }}
                </p>
                <Divider class="rv-custom-width" />
                <Form :validation-schema="validationSchemas" @submit="onSubmit" v-slot="{ meta }">
                    <Field v-slot="{ field, errorMessage }" name="email">
                        <PTextInput v-bind="field" id="email" :label="$t('local.signup.labels.emailAddress')"
                            type="email" :error="errorMessage"
                            :placeholder="$t('local.signup.placeholders.emailAddress')" />
                    </Field>

                    <Field v-slot="{ field, errorMessage }" name="password">
                        <PTextInput class="mt-2" v-bind="field" id="password" :label="$t('local.login.labels.password')"
                            type="password" :error="errorMessage"
                            :placeholder="$t('local.signup.placeholders.password')" toggle-password
                            :icon-field="true" />
                    </Field>
                    <p class="lg-forgot-password" @click="goToForgetPasswordScreen">{{
                        $t('local.login.labels.forgotPassword') }}</p>
                    <Button class="p-button-primary w-full rv-custom-width mt-3" :disabled="!meta.valid" type="submit">
                        {{ $t('local.login.buttons.login')

                        }}
                    </Button>
                </Form>
            </div>
        </div>


    </div>
</template>
<script setup lang="ts">

import Divider from 'primevue/divider';
import { Form, Field } from 'vee-validate'
import PTextInput from '@/components/PInputText.vue';
import Button from 'primevue/button'
import { validationSchemas } from '@/types/login'
import { useRouter } from 'vue-router';

const router = useRouter()


const goToForgetPasswordScreen = () => {
    router.push('/forget-password')
}

//add a submit function
const onSubmit = async (values: any) => {
    console.log(values);
    //call the login service
    //redirect to the home page
    router.push('/dashboard')
}

</script>
<style scoped lang="scss">
@use '@/style/theme.scss' as *;

.login-view {
    padding: 0;
    display: flex;
    flex-direction: column;
    height: 100vh;

}

.login-content {
    margin: auto;
    display: flex;

    align-items: center;
    justify-content: center;
}

.login-prompt {
    min-width: 413px;
    @extend %body-large;
    color: var(--text-secondary);
    max-width: 411px;
}

.rv-custom-width {
    max-width: 411px;
}

.lg-forgot-password {
    @extend %body-regular;
    color: var(--primary);
    text-align: right;
    cursor: pointer;

}
</style>