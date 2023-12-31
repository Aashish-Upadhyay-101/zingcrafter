declare namespace NodeJS {
  export interface ProcessEnv {
    NEXTAUTH_URL?: string;
    NEXTAUTH_SECRET?: string;

    GOOGLE_CLIENT_ID?: string;
    GOOGLE_CLIENT_SECRET?: string;

    DATABASE_URL?: string;

    RESEND_API_KEY?: string;

    EMAIL_SERVER_USER?: string;
    EMAIL_SERVER_PASSWORD?: string;
    EMAIL_SERVER_HOST?: string;
    EMAIL_SERVER_PORT?: string;
    EMAIL_FROM?: string;
  }
}
