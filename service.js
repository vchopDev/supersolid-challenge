const respository = require("./repository");

const GetScores = async () => {
  try {
    return await respository.GetScores();
  } catch (err) {
    return err;
  }
};

const SubmitEntry = async (name, word) => {
  try {
    if (!IsPalimdrome(word)) throw new Error("NotPalindromeWord");

    const data = GetUserInfo(name, word);

    const result = await respository.SubmitEntry(data);
    return result;
  } catch (err) {
    throw err;
  }
};

const GetUserInfo = (name, word) => {
  if (!name) throw new Error("MissingPlayername");
  return { name: name, points: word.length };
};

const IsPalimdrome = word => {
  var desiredWord = word.replace(/\W/g, '')
  for (let i = 0; i < desiredWord.length / 2; i++) {
    if (desiredWord[i].toLowerCase() !== desiredWord[desiredWord.length - i - 1].toLowerCase()) {
      return false
    };
  }
  return true;
};

module.exports = {
  GetScores,
  SubmitEntry,
  IsPalimdrome
};
