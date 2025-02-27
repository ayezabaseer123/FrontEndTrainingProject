<template>
    <div class="forget-password-view">
      <div class="forget-password-content ">
          <div class="flex flex-column gap-3">
          <h1 class="heading m-0">
          {{ $t('local.forgetPassword.labels.forgetPassword') }}
      </h1>
      <p class="forget-password-prompt">
          {{ $t('local.forgetPassword.labels.forgetPasswordPrompt') }}
      </p>
      <Divider class="rv-custom-width" />
      <Form :validation-schema="validationSchemas "  v-slot="{  meta }">
          <Field v-slot="{ field, errorMessage }" name="email">
              <PTextInput v-bind="field" id="email" :label="$t('local.signup.labels.emailAddress')" type="email"
                  :error="errorMessage" :placeholder="$t('local.signup.placeholders.emailAddress')" />
          </Field>
          <Button class="p-button-primary w-full rv-custom-width mt-3" :disabled="!meta.valid" type="submit">
                  {{  $t('local.forgetPassword.buttons.requestResetLink')
  
                  }}
              </Button>
              <p class="fpv-back-to-login" @click="goToLoginScreen">{{ $t('local.forgetPassword.labels.backToLogin') }}</p>
     
      </Form>
      </div>
      </div>
      
      
    </div>
  </template>
  <script setup lang="ts">
  
  import Divider from 'primevue/divider';
  import { Form ,Field} from 'vee-validate'
  import PTextInput from '@/components/PInputText.vue';
  import Button from 'primevue/button'
  import { validationSchemas } from '@/types/forgetPassword'
  import { useRouter } from 'vue-router';
  
  const router=useRouter()
  
  
  const goToLoginScreen=()=>{
    router.push('/login')
  }
  
  </script>
  <style scoped lang="scss">
  @use '@/style/theme.scss' as *;
  .forget-password-view{
      padding: 0;
      display: flex;
      flex-direction: column;
      height: 100vh;
      
  }
  
  .forget-password-content{
      margin: auto;
      display: flex;
      
      align-items: center;
      justify-content: center;
  }
  .forget-password-prompt {
      min-width:413px;
      @extend %body-large;
      color: var(--text-secondary);
      max-width: 411px;
  }
  .rv-custom-width {
      max-width: 411px;
  }

  .fpv-back-to-login{
    color: var(--primary);
    text-align: center;
    cursor: pointer;
  }
  </style>