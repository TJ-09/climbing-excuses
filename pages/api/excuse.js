// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const excuses = [
  { id: 1, excuse: "I went out last" },
  { id: 2, excuse: "I have only eaten doughnuts " },
  { id: 3, excuse: "It is a high gravity day" },
  { id: 4, excuse: "I have a niggle" },
  { id: 5, excuse: "the holds are greasy" },
  { id: 6, excuse: "I went out last night" },
  { id: 7, excuse: "I only try outside" },
  { id: 8, excuse: "I am too tall" },
  { id: 9, excuse: "I am too short" },
  { id: 10, excuse: "my shoes are old" },
  { id: 11, excuse: "I ran out of chalk last week" },
  { id: 12, excuse: "the position of Saturn is impacting my flow" },
  { id: 13, excuse: "I worked out yesterday" },
  { id: 14, excuse: "I didn't workout yesterday" },
  { id: 15, excuse: "it's just not my style" },
  { id: 16, excuse: "it's poorly set" },
  { id: 17, excuse: "the holds are too hot" },
  { id: 18, excuse: "the holds are too cold" },
  { id: 19, excuse: "I don't do pockets" },
  { id: 20, excuse: "I don't do slopers" },
  { id: 21, excuse: "I don't do crimps" },
  { id: 22, excuse: "I don't do jugs" },
  { id: 23, excuse: "I only try on camera" },
  { id: 24, excuse: "I only had pizza yesterday" },
  { id: 25, excuse: "I get too bunched" },
  { id: 26, excuse: "I have that things with my dodar" },
  { id: 27, excuse: "my gear is too heavy" },
  { id: 28, excuse: "my foot slipped" },
  { id: 29, excuse: "my hand slipped" },
  { id: 30, excuse: "my ego slipped" },
  { id: 31, excuse: "I'm not strong enough" },
  { id: 32, excuse: "I'm not flexible enough" },
  { id: 33, excuse: "it's mis-graded" },
  { id: 34, excuse: "it's a low psych day" },
  { id: 35, excuse: "I forgot my headphones" },
  { id: 36, excuse: "I've not trained for a week" },
  { id: 37, excuse: "I ran out of excuses" },
  { id: 38, excuse: "just, my fingers really..." },
  { id: 39, excuse: "I forget my send shoes" },
  { id: 40, excuse: "have you seen the conditions?" },
  { id: 41, excuse: "that move is just unnatural" },
  { id: 42, excuse: "I didn't try hard enough" },
  { id: 43, excuse: "I only try on V8/8b and above" },
  { id: 44, excuse: "It's not a send day" },
]

export default function handler(req, res) {

  let item;

  if (req.query.q) {  //if we have an ID process it
    const queryNum = parseInt(req.query.q); //convert to Int
    if (Number.isInteger(queryNum)) { // is it real?
      item = excuses.find(item => item.id === (queryNum / 215)); // can we find it?
    }
  }

  if (item) { //do we have a specific from above?
    // send the requested back
    res.status(200).json(item)

  } else {
    // send a random one back
    const rngSingle = excuses[Math.floor(Math.random() * excuses.length)];
    res.status(200).json(rngSingle)
  }

}
