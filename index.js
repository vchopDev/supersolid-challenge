const express = require("express");
const ScoresService = require("./service");
const bodyParser = require("body-parser");
const app = express();
const util = require("util");

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.get("/", function(req, res) {
  res.render("index.html");
});

app.get("/api/getScores", async (req, res) => {
  try {
    const scores = await ScoresService.GetScores();
    res.status(200).json({ "scores": scores });
  } catch (err) {
    res.status(500).json({ error: "ooops...! Something went wrong." });
  }
});

app.post("/api/submitEntry", async (req, res) => {
  try {
    const { name, word } = req.body;
    const scores = await ScoresService.SubmitEntry(name, word);
    res.status(200).json({ "scores": scores });
  } catch (err) {
    switch (err.message) {
      case "MissingPlayername":
        res.status(400).json({ error: "Player name's missing." });
        break;
      case "MissingScoreValue":
        res.status(400).json({ error: "Score value's missing." });
        break;
      case "NotPalindromeWord":
        res.status(400).json({ error: "The word is not palindrome.." });
        break;
      default:
        res.status(500).json({ error: "ooops...! Something went wrong." });
    }
  }
});

var port = 3000;
app.listen(port, function() {
  console.log("Server", process.pid, "listening on port", port);
});
