var data = require('./data.js')

data.then(function(entries) {
  entries.items.forEach(function(entry) {
    console.log(entry);
    riot.mount("hello-world", { title: entry.fields.name});
  })
});
