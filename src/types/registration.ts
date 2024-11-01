import * as yup from 'yup'
import i18n from '@/i18n' // Import your i18n instance

// Helper function to get translations
const t = i18n.global.t

export const validationSchemas = [
  // Step 1: Personal Information
  yup.object({
    fullName: yup.string().required(t('local.signup.validation.required')),
    email: yup
      .string()
      .email(t('local.signup.validation.email'))
      .required(t('local.signup.validation.required')),
    password: yup
      .string()
      .min(8, t('local.signup.validation.passwordMin'))
      .required(t('local.signup.validation.required')),
    termsAccepted: yup
      .boolean()
      .oneOf([true], t('local.signup.validation.terms')),
  }),

  // Step 2: Residency Information
  yup.object({
    phoneNumber: yup.string().required(t('local.signup.validation.required')),
    address: yup.string().required(t('local.signup.validation.required')),
    country: yup.mixed().required(t('local.signup.validation.required')),
  }),

  // Step 3: Bank Verification
  yup.object({
    bvn: yup
      .string()
      .matches(/^\d{10}$/, t('local.signup.validation.bvnFormat'))
      .required(t('local.signup.validation.required')),
  }),
]
