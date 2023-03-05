from backend.services.openAI.graph_prompt import GraphPromptBase as Prompt


EXAMPLES = [

Prompt(
q="How much trading volume was there on June 1, 2022?",
o="""query {
  uniswapDayDatas(where: { date: 1654041600 }) {
    volumeUSD
   }
  }"""),
Prompt(
q="Show trading volume by day for the last month",
o="""query {
  uniswapDayDatas(where: { date_gt: 1677987290 }) {
    volumeUSD
   }
  }"""),


]
