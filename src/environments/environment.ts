// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    apiKey: process.env.ANGULAR_APP_API_KEY,
    authDomain: process.env.ANGULAR_APP_AUTH_DOMAIN,
    projectId: process.env.ANGULAR_APP_PROJECT_ID,
    storageBucket: process.env.ANGULAR_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.ANGULAR_APP_MESSAGING_SENDER_ID,
    appId: process.env.ANGULAR_APP_APP_ID,
  },
  production: false,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
