cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-sqlite-ext/www/SQLitePlugin.js",
        "id": "cordova-sqlite-ext.SQLitePlugin",
        "pluginId": "cordova-sqlite-ext",
        "clobbers": [
            "SQLitePlugin"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.3",
    "cordova-sqlite-ext": "2.2.0"
}
// BOTTOM OF METADATA
});