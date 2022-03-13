const fs = require("fs");

fs.readFile(
  "../wordpress/data/wp-content/themes/frogginaround/angular-enqueue.dev.template.php",
  "utf8",
  (err, template) => {
    if (err) {
      return console.log(err);
    }

    let result = template
      .replace(/\$\{styles\}/g, "styles.css")
      .replace(/\$\{runtime\}/g, "runtime.js")
      .replace(/\$\{polyfills\}/g, "polyfills.js")
      .replace(/\$\{main\}/g, "main.js");

    fs.writeFile(
      "../wordpress/data/wp-content/themes/frogginaround/angular-enqueue.php",
      result,
      "utf8",
      (err) => (err ? console.log(err) : "")
    );
  }
);
