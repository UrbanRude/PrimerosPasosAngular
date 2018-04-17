// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase:{
      apiKey: "AIzaSyC26UwHrywd3R9wV8g5v3s0YlW8C3Cfkjk",
      authDomain: "primerospasosangular.firebaseapp.com",
      databaseURL: "https://primerospasosangular.firebaseio.com",
      projectId: "primerospasosangular",
      storageBucket: "primerospasosangular.appspot.com",
      messagingSenderId: "1034877906745"
  }
};
