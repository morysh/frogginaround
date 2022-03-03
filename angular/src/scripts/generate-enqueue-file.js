const fs = require("fs");

fs.readdir(
  "../wordpress/data/wp-content/themes/frogginaround/angular",
  (err, files) => {
    if (err) {
      return console.error(err);
    }

    const styles = files.find((name) => name.startsWith("styles"));
    const runtime = files.find((name) => name.startsWith("runtime"));
    const polyfills = files.find((name) => name.startsWith("polyfills"));
    const main = files.find((name) => name.startsWith("main"));

    fs.readFile(
      "../wordpress/data/wp-content/themes/frogginaround/angular-enqueue.template.php",
      "utf8",
      (err, template) => {
        if (err) {
          return console.log(err);
        }

        let result = template
          .replace(/\$\{styles\}/g, styles)
          .replace(/\$\{runtime\}/g, runtime)
          .replace(/\$\{polyfills\}/g, polyfills)
          .replace(/\$\{main\}/g, main);

        fs.writeFile(
          "../wordpress/data/wp-content/themes/frogginaround/angular-enqueue.php",
          result,
          "utf8",
          (err) => (err ? console.log(err) : "")
        );
      }
    );
  }
);
