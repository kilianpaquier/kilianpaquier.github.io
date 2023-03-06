module.exports = {
    extends: [
        "plugin:vue/base",
        "plugin:vuetify/base",
        "eslint:recommended",
        "plugin:vue/vue3-recommended"
    ],
    parserOptions: {
        parser: "@typescript-eslint/parser"
    },
    rules: {
        "vue/max-attributes-per-line": "off",
        "vue/html-indent": [ "warn", 4 ]
    }
}
