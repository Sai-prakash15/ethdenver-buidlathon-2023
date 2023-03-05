from backend.services.openAI.graph_prompt import GraphPromptBase as Prompt


EXAMPLES = [
<<<<<<< HEAD
<<<<<<< Updated upstream

Prompt(
q="What is the aave proposal with the most votes?",
o="""query MostVotedProposal {
  proposals(orderBy: totalWeightedVotes, orderDirection: desc, first: 1 ) {
    id
    totalWeightedVotes
  }
}"""),
Prompt(
q="Count the votes for and against the last 10 aave proposals",
o="""query {
  proposals(orderBy: creationTime, orderDirection: desc, first: 10) {
    forWeightedVotes
    againstWeightedVotes
  }
}"""),


=======
=======
>>>>>>> 37d48116677ba55d9adcd4e23064a1069d15944a
    Prompt(
        q="What is the aave proposal with the most votes?",
        o="""{
          proposals(orderBy: totalWeightedVotes, orderDirection: desc, first: 1) {
            id
            totalWeightedVotes
          }
<<<<<<< HEAD
        }"""
=======
        }""",
>>>>>>> 37d48116677ba55d9adcd4e23064a1069d15944a
    ),
    Prompt(
        q="Count the votes for and against the last 10 aave proposals",
        o="""{
          proposals(orderBy: creationTime, orderDirection: desc, first: 10) {
            forWeightedVotes
            againstWeightedVotes
          }
        }""",
    ),
<<<<<<< HEAD
Prompt(
q="How many votes did proposal 86 have?",
o="""query{
  proposals(where: {id: "86"}) {
    totalWeightedVotes
  }
}"""),

Prompt(
q="Query: What was the voting timeline for for, against, and abstain votes for proposal 86?",
o="""query {
  voteDailySnapshots(
    where: {proposal_: {id: "86"}
    }
    orderBy: timestamp
    orderDirection: desc
  ) {
    blockNumber
    abstainWeightedVotes
    againstWeightedVotes
    forWeightedVotes
    timestamp
    proposal {
      id
    }
  }
}""")
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> 37d48116677ba55d9adcd4e23064a1069d15944a
]
