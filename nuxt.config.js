import { resolve } from "path";

export default {
  server: {
    host: "0.0.0.0", // default: localhost
    port: 3000, // optional: explicitly set the port
  },
  // Global page headers: http://go.nuxtjs.dev/config-head
  hooks: {
    render: {
      errorMiddleware(app) {
        app.use((error, _req, _res, next) => {
          if (error) {
            console.log("Logged in errorMiddleware", error);
          }
          next(error);
        });
      },
    },
  },
  head: {
    title: "burdujasergiu",
    htmlAttrs: {
      lang: "ru",
    },
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      { hid: "description", name: "description", content: "" },
      {
        name: "format-detection",
        content: "telephone=no",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  env: {
    siteUrl: process.env.BASE_URL || "http://localhost:8080",
    apiUrl: process.env.API_URL || "http://localhost:8080/api",
  },
  alias: {
    "@": resolve(__dirname, "./components/"),
  },

  // Global CSS: http://go.nuxtjs.dev/config-css
  css: ["~assets/scss/my.scss"],

  // Plugins to run before rendering page: http://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "@/plugins/mavon-editor", mode: "client" },
    { src: "@/plugins/vue-markdown", mode: "client" },
    {
      src: "@/plugins/vue-paginate.client.js",
      mode: "client",
    },
  ],

  // Auto import components: http://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): http://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: http://go.nuxtjs.dev/config-modules
  modules: [
    // http://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/auth-next",
  ],

  // Axios module configuration: http://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: http://github.com/nuxt-community/axios-module/issues/308
    // baseURL: "http://localhost:8080/api",
    baseURL: process.env.API_URL || "http://localhost:8080/api",
  },

  // Build Configuration: http://go.nuxtjs.dev/config-build
  build: {
    transpile: ["jiti", "@nuxt/utils"],
  },
  auth: {
    strategies: {
      laravelJWT: {
        provider: "laravel/jwt",
        url: "/",
        endpoints: {
          login: { url: "/login", method: "post" },
          logout: { url: "/auth/logout", method: "post" },
          user: { url: "/auth/me", method: "get" },
        },
        token: {
          property: "access_token",
          maxAge: 60 * 60,
        },
        refreshToken: {
          maxAge: 20160 * 60,
        },
      },
    },
  },
};
