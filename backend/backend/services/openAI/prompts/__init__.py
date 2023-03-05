from .aave_governance import EXAMPLES as aave_governance_examples
from .opensea import EXAMPLES as opensea_examples
from .sporkdao_token import EXAMPLES as sporkdao_token_examples
from .uniswap_v3 import EXAMPLES as uniswap_v3_examples

PROTOCOL_TO_PROMPTS = {
    "aave-governance": aave_governance_examples,
    "opensea-v2": opensea_examples,
    "uniswap-v3": uniswap_v3_examples,
    "sporkdao-token": sporkdao_token_examples,
}
