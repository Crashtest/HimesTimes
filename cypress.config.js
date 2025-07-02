const { defineConfig } = require('cypress')

module.exports = defineConfig({
    projectId: "mmpsw8",
    e2e: {
        experimentalStudio: true,
    },
})