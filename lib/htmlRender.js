// this compiles all the data and shows the html
const path = require("path");
const fs = require("fs");

const srcCards = path.resolve(__dirname, "../src");

const render = teams => {
  const renderHtml = [];

  renderHtml.push(teams
      .filter(team => team.grabJob() === "Engineer")
      .map(engineer => displayEngineer(engineer))
  );

  renderHtml.push(teams
      .filter(team => team.grabJob() === "Manager")
      .map(manager => displayManager(manager))
  );

  renderHtml.push(teams
      .filter(team => team.grabJob() === "Intern")
      .map(intern => displayIntern(intern))
  );

  return displayAll(renderHtml.join(""));
};





const displayEngineer = engineer => {
  let cardHtml = fs.readFileSync(path.resolve(srcCards, "engineer.html"),"utf8");
  cardHtml = addHtmlData(cardHtml, "name", engineer.grabName());
  cardHtml = addHtmlData(cardHtml, "job", engineer.grabJob());
  cardHtml = addHtmlData(cardHtml, "email", engineer.grabEmail());
  cardHtml = addHtmlData(cardHtml, "id", engineer.grabId());
  cardHtml = addHtmlData(cardHtml, "github", engineer.grabGithub());
  return cardHtml;
};

const displayManager = manager => {
  let cardHtml = fs.readFileSync(path.resolve(srcCards, "manager.html"),"utf8");
  cardHtml = addHtmlData(cardHtml, "name", manager.grabName());
  cardHtml = addHtmlData(cardHtml, "job", manager.grabJob());
  cardHtml = addHtmlData(cardHtml, "email", manager.grabEmail());
  cardHtml = addHtmlData(cardHtml, "id", manager.grabId());
  cardHtml = addHtmlData(cardHtml, "officeNumber", manager.grabOfficeNumber());
  return cardHtml;
};

const displayIntern = intern => {
  let cardHtml = fs.readFileSync(path.resolve(srcCards, "intern.html"),"utf8");
  cardHtml = addHtmlData(cardHtml, "name", intern.grabName());
  cardHtml = addHtmlData(cardHtml, "job", intern.grabJob());
  cardHtml = addHtmlData(cardHtml, "email", intern.grabEmail());
  cardHtml = addHtmlData(cardHtml, "id", intern.grabId());
  cardHtml = addHtmlData(cardHtml, "school", intern.grabSchool());
  return cardHtml;
};

const displayAll = html => {
    const cardHtml = fs.readFileSync(path.resolve(srcCards, "main.html"), "utf8");
    return addHtmlData(cardHtml, "team", html);
  };

const addHtmlData = (cardHtml, placeholder, value) => {
  const regPat = new RegExp("{{ " + placeholder + " }}", "gm");
  return cardHtml.replace(regPat, value);
};
module.exports = render;
