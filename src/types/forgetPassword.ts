import * as yup from 'yup'
import i18n from '@/i18n' // Import your i18n instance

// Helper function to get translations
const t = i18n.global.t

export const validationSchemas = 
    yup.object({
     
      email: yup
        .string()
        .email(t('local.signup.validation.email'))
        .required(t('local.signup.validation.required')),
    
    })
  