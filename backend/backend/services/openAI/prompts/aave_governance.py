from backend.services.openAI.graph_prompt import GraphPromptBase as Prompt


EXAMPLES = [
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
Prompt(
q="How many votes did proposal 86 have?",
o="""query{
  proposals(where: {id: "86"}) {
    totalWeightedVotes
  }
}"""),

Prompt(
q="Query: What was the voting timeline for Against, For, and Abstain votes for proposal 86?",
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
]
