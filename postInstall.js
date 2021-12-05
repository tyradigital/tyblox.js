const figlet = require("figlet");
const chalk = require("chalk");

{
  console.log(
    chalk.cyan.bold(figlet.textSync("Tyblox.js", { horizontalLayout: "full" }))
  );

  console.log(
    "\n " +
      chalk.bold.underline.greenBright(
        `Thanks for installing Tyblox.js - The most powerful ${chalk.bold.red(
          "ROBLOX"
        )} API Wrapper`
      )
  );

  console.log(
    `\n${chalk.cyanBright(
      chalk.bold("> ") +
        "Tyblox.js - " +
        chalk.bold(require("./package.json").description)
    )}`
  );
  console.log(
    `${chalk.cyanBright(
      chalk.bold("> ") +
        "Running Version " +
        chalk.bold(require("./package.json").version)
    )}`
  );
  console.log(
    `${chalk.cyanBright(
      chalk.bold("> ") +
        "Find Documentation @ " +
        chalk.bold("https://docs.tyra.digital")
    )}`
  );
  console.log(
    `${chalk.cyanBright(
      chalk.bold("> ") +
        "Helpdesk - " +
        chalk.bold("https://tyra.digital/support")
    )}`
  );
}
