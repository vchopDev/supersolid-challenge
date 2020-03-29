const db = [];

const GetScores = async () => db;

const SubmitEntry = async score => {
  db.push(score);
  return db;
};


module.exports = {
  GetScores,
  SubmitEntry
}