require("babel-core/register")({
    // This will override `node_modules` ignoring.
    // If any filenames **do** match this regex then they
    // aren't compiled.
    ignore: /node_modules\/(?!QED-it-asset-transfers)/
});
require("babel-polyfill");
