export type Captcha =
  | {
      success: true;
      challenge_ts: string;
      hostname: string;
      score: number;
      action: string;
    }
  | {
      success: false;
      'error-codes': ErrorCode[];
    };

type ErrorCode =
  | 'missing-input-secret'
  | 'invalid-input-secret'
  | 'missing-input-response'
  | 'invalid-input-response'
  | 'bad-request'
  | 'timeout-or-duplicate';

export async function getCaptchaToken() {
  return new Promise<string | null>((resolve) => {
    grecaptcha.ready(async () => {
      const siteKey = process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY;
      if (!siteKey) {
        resolve(null);
        return;
      }
      const token = await grecaptcha.execute(siteKey, { action: 'submit' });
      resolve(token);
    });
  });
}

export async function verifyCaptchaToken(token: string) {
  const secretKey = process.env.CAPTCHA_SECRET_KEY;

  if (!secretKey) {
    throw new Error('Chave secreta não encontrada!');
  }

  const url = new URL('https://www.google.com/recaptcha/api/siteverify');
  url.searchParams.append('secret', secretKey);
  url.searchParams.append('response', token);

  const response = await fetch(url, {
    method: 'POST',
  });
  const dataCaptcha: Captcha = await response.json();

  if (!response.ok) return null;
  return dataCaptcha;
}
