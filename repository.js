const db = [];
const GetTopFive = async db => {
  if (db.length >= 5) {
    let result = db.sort((a,b) => a.points-b.points).slice(-5);
    return result;
  } else return db.sort((a,b) => a.points-b.points);
};
const GetScores = async () => GetTopFive(db);

const SubmitEntry = async score => {
  db.push(score);
  return db;
};

module.exports = {
  GetScores,
  SubmitEntry
};
