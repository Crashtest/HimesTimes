const { defineConfig } = require('cypress')

module.exports = defineConfig({
    projectId: "kiu5th",
    e2e: {
        experimentalStudio: true,
    },
})