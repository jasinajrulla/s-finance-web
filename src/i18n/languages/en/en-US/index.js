/**
 *  NOTE:
 */

export default {
  global: {
    sFinance: 'S.Finance',
    home: 'Home',
    swap: 'Swap',
    liquidity: 'Liquidity',
    stats: 'Stats',
    operating: 'Actions',
    deposits: 'Deposits',
    totalBalances: 'Total balances',
    dailyVol: 'Daily volume',
    apr: 'APY',
    poolName: 'Pool name',
    assests: 'Assests',
    addLiquidity: 'Add liquidity',
    advancedOptions: 'Advanced options',
    packUp: 'Pack up',
    maxSlippage: 'Max slippage',
    gasPrice: 'Gas price',
    customize: 'Customize',
    standard: 'Standard',
    fast: 'Fast',
    instant: 'Instant',
    slow: 'Slow',
    low: 'Low',
    notAvailable: 'Not available',
    fee: 'Fee',
    norm: 'Norm',
    risks: 'Risks',
    dao: 'DAO',
    deposit: 'Deposit',
    withdraw: 'Withdraw',
    all: 'All',
    poolProfit: 'Pool profit',
  },
  beta: {
    slogan: 'The project is still in testing stage, please pay attention to the risks and stay tuned for more functions~',
    followMe: 'Follow me'
  },
  statement: {
    slogan: 'Statement: S.finance have not issued any tokens currently',
    cont: 'Token of S.finance will follow the method of 100% contribution based distribution, with neither private placement, no pre-dig, nor team distribution. The official name of the token is still being collected. Information about S.finance on Trx-chain is totally fraud, please log on official website to get the latest news about S.finance!',
    more: 'more',
    ok: 'Ok',
    coming: 'S.Finance liquidity pool is coming ！',
    comingCont1: 'S.Finance liquidity pool is going to start at 22:22:22 (SGT) 22th September, 2020. Staking susdv2 LP tokens could get 3 kinds of token for reward，including SFG (governance token of S.finance) 、CRV （governance token of Curve) and SNX (governance token of Synthetix). ',
    comingCont2: 'Total amount of SFG is 21 million, with 100% contribution-based distribution, no private placement, no pre-dig. Minted SFG per day is 0.2% of the remaining, and the output rate of SFG is 10% in the first 24 hours (0.02% minted SFG on the first day, while the rate of minted CRV and SNX is unaffected), and the mining rate will return to normal 24 hours later. SFG liquidity pool will start on the third day after the opening of S.Finance, and the rewarding weight of SFG liquidity pool will be three times that of the stable coin pool.',
    comingCont3: 'The S.finance smart contract has been scrutinized by KNOWNSEC. However, it cannot completely eliminate the risk, the price of SFG possibly get 0. Please invest within your capacity.'
  },
  wallet: {
    notConnected: "You haven't connected wallet",
    connect: 'Connect wallet'
  },
  total: {
    deposits: 'Deposits'
  },
  stablePools: {
    name: 'Stable pools'
  },
  instantSwap: {
    name: 'Instant swap ',
    tip: 'Swap using all Stable pools',
    from: 'From',
    to: 'To',
    valuePlaceholder: 'Value',
    sizePlaceholder: 'Size',
    gasPlaceholder: 'Enter gasoline cost',
    max: 'Max',
    exchangeRate: 'Exchange rate (including fees)',
    confirm: 'Confirm',
    txCost: 'Estimated tx cost',
    routedThrough: 'Trade routed through',
    warnLowGasPrice: 'Too low gas price. Your transaction may be dropped.',
    noBalanceWarning: 'Not enough balance for {0}. Swap is not available.',
    selldisabled: 'Swapping between {0} and {1} is not available currently.',
    exchangeEateLowWarning: 'Warning! Exchange rate is too low!',
    maxSynthBalance: 'Max balance you can use is {0}',
    susdWaitingPeriod: 'Cannot transfer {0} during waiting period {1} secs left',
    warningNoPool: 'Swap not available. Please select {0} in pool select'
  },
  balancesInfo: {
    name: 'Currency reserves',
    assetDistribution: 'Asset distribution',
    swapFeeRate: 'Swap fee',
    depositFeeRate: 'Deposit fee',
    withdrawalFeeRate: 'Withdrawal fee',
    adminFeeRate: 'Admin fee',
    avgAssetPrice: 'Average asset price',
    amplificationCoefficient: 'AmplificationCoefficient',
    fundingFeeRate: 'FundingFeeRate'
  },
  risk: {
    title: 'Risks Warning',
    auditTitle: 'Audits',
    auditContHtml: 'S.Finance smart contracts were Audited by KNOWNSEC.<a href="https://etherscan.io/token/0x9f843d9ba2a386bda2845507450fd47934fb3d03" target="_blank">Swap Address<a><br/>However, security audits don\'t eliminate risks completely. Please don’t supply your life savings, or assets you can’t afford to lose, to S.Finance, especially as a liquidity provider.<br/>Using S.Finance as an exchange user should be significantly less risky, but this is not advice.',
    adminKeyTitle: 'Admin keys',
    adminKeyContHtml: 'Admin key allows to pause the contract in an emergency, but only during first 2 months in existence. Also it allows to change amplification coefficient (S.Finance parameter), admin fee (not more than half of fee which LPs take) and the fee. All the changes are timelocked for 3 days before being applied for enough notice.<br/>S.Finance will be transitioning to a DAO to be fully decentralized.',
    lossTitle: 'Permanent loss of a peg',
    lossContHtml: 'If one of the stablecoins in the pool goes significantly down below the peg of 1.0 and never returns to the peg, it\'ll effectively mean that pool liquidity providers hold almost all their liquidity in that currency.',
    stakingTitle: 'Staking risks',
    stakingContHtml: 'When staking you use multiple smart contract products each of which has its own risks',
  },
  liquidity: {
    name: 'Liquidity gauge',
    reservesTitle: 'Currency Reserves',
    depositTip: 'You can deposit one or more kind of the stable coins below, and the smart contract will automatically balance the deposited assets proportionally',
    depositBalancedProportion: 'Add all coins in a balanced proportion',
    depositUseMaximumAvailable: 'Use maximum amount of coins available',
    depositWrapped: 'Deposit wrapped',
    depositWrappedPlaceholder: 'Deposit wrapped',
    willLeastReceive: 'You will receive at least',
    willReceive: 'You will receive',
    bonus: 'Bonus(plus pricing)',
    slippage: 'Slippage(plus pricing)',
    highSlippage: 'Warning! High slippage(plus pricing)',
    depositStakeGauge: 'Deposit & stake in gauge',
    withdrawAvailableAmount: 'available amount',
    withdrawAmountPlaceholder: 'amount',
    withdrawRedemptionTip: 'LP token redemption',
    dailyProfit: 'Daily profit'
  },
  dao: {
    title: '{0} Liquidity gauge',
    describe: 'Staking {0} LP tokens Reward {1}',
    staking: 'Deposit',
    redemption: 'Withdraw',
    miningReward: 'Minted',
    stakingAmountPlaceholder: 'Amount',
    stakingBalance: 'Available',
    infiniteApproval: 'Infinite approval',
    stakingConfirmTip: 'Deposit to get LP tokens',
    stakingConfirm: 'Deposit',
    redemptionBalance: 'Available',
    redemptionAmountPlaceholder: 'Amount',
    redemptionConfirm: 'Withdraw',
    miningPendingReward: 'Pending rewards',
    miningPaidReward: 'Paid rewards',
    miningTotalReward: 'Total rewards',
    miningClaimConfirm: 'Claim',
    totalStaking: 'Total staking',
    myStaking: 'My staking',
    virtualPrice: 'Virtual price',
  },
  notice: {
    approveSpending: 'Please approve spending your coins',
    confirmDepositTransaction: 'Pleaes confirm deposit transaction'
  },
  social: {
    twitter: 'Twitter',
    telegram: 'Telegram',
    discord: 'Discord',
    medium: 'Medium',
    github: 'Github',
    wechat: 'WeChat',
    tutorial: 'Tutorial',
    communitySupport: 'Community support',
  }
}