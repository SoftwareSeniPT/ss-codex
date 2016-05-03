var context = require.context('./app', true, /\.spec\.ts?$/);
context.keys().forEach(context);
