import { resolve } from "path";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
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
    siteUrl: process.env.BASE_URL || "https://localhost:8088",
    apiUrl: process.env.API_URL || "https://localhost:8088/api",
  },
  alias: {
    "@": resolve(__dirname, "./components/"),
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~assets/scss/my.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "@/plugins/mavon-editor", mode: "client" },
    { src: "@/plugins/vue-markdown", mode: "client" },
    {
      src: "@/plugins/vue-paginate.client.js",
      mode: "client",
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/auth-next",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    // baseURL: "https://localhost:8088/api",
    baseURL: process.env.API_URL || "https://localhost:8088/api",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
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
