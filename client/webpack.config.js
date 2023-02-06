module.exports = {
    resolve: {
        fallback: { "zlib": require.resolve("browserify-zlib") },
        fallback: { "path": require.resolve("path-browserify") },

    }
}