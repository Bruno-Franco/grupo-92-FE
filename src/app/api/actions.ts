'use server';

import { verifyCaptchaToken } from '../utils/captcha';

export async function preInscForm(token: string | null) {
  if (!token) {
    return {
      success: false,
      mesage: 'Token not found!',
    };
  }

  const captchaData = await verifyCaptchaToken(token);
  if (!captchaData) {
    return {
      success: false,
      message: 'Falha no Captcha!',
    };
  }

  if (!captchaData.success || captchaData.score < 0.5) {
    return {
      success: false,
      message: 'Captcha Falhou!',
      errors: !captchaData.success ? captchaData['error-codes'] : null,
    };
  }

  return {
    success: true,
    message: 'Email enviado com sucesso!!!',
  };
}
