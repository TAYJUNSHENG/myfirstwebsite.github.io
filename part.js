var current_assets = Number(document.getElementById("current assets").value);
var current_liabilities = Number(document.getElementById("current liabilities").value);
var prepayments = Number(document.getElementById("prepayments").value);
var inventory = Number(document.getElementById("inventory").value);
var CBbalance = Number(document.getElementById("CBbalance").value);
var total_debts = Number(document.getElementById("total debts").value);
var total_assets = Number(document.getElementById("total assets").value);
var total_equities = Number(document.getElementById("total equities").value);
var non_current_liabilities = Number(document.getElementById("non-current liabilities").value);
var EBIT = Number(document.getElementById("EBIT").value);
var finance_costs_or_interests = Number(document.getElementById("finance costs or interests").value);
var revenue = Number(document.getElementById("revenue").value);
var cost_of_goods_sold = Number(document.getElementById("cost of goods sold").value);
var opening_inventory = Number(document.getElementById("opening inventory").value);
var closing_inventory = Number(document.getElementById("closing inventory").value);
var opening_trade_receivables = Number(document.getElementById("opening trade receivables").value);
var closing_trade_receivables = Number(document.getElementById("closing trade receivables").value);
var gross_profit = Number(document.getElementById("gross profit").value);
var net_profit = Number(document.getElementById("net profit").value);
var share_price = Number(document.getElementById("share price").value);
var earnings_per_share = Number(document.getElementById("earnings per share").value);
var net_assets_per_share = Number(document.getElementById("net assets per share").value);
var EPS_growth = Number(document.getElementById("EPS growth").value);
var sales_per_share = Number(document.getElementById("sales per share").value);
var cash_flow_per_share = Number(document.getElementById("cash flow per share").value);
var dividend_per_share = Number(document.getElementById("dividend per share").value);
var opening_share_price =Number( document.getElementById("opening share price").value);

//liquidity
var Li1 = current_assets / current_liabilities;
var Li2 =(current_assets - prepayments - inventory)/current_liabilities;
var Li3 = CBbalance / current_liabilities;

//leveraging
var Le1 = total_debts / total_assets;
var Le2 = total_debts/ total_equities;
var Le3 = non_current_liabilities / total_equities;
var Le4 = EBIT/finance_costs_or_interests;

//efficiency
var Ef1= revenue/total_assets;
var Ef2 = cost_of_goods_sold/((opening_inventory + closing_inventory)/2);
var Ef3 = 365/ Ef2;
var Ef4 = revenue/ ((opening_trade_receivables+ closing_trade_receivables)/2);
var Ef5 = 365/ Ef4;

//profitability
var Pr1 = gross_profit / revenue;
var Pr2 = EBIT / revenue;
var Pr3 = net_profit / revenue;
var Pr4 = net_profit / total_assets;
var Pr5 = net_profit / total_equities;

//market
var Ma1 = share_price /earnings_per_share;
var Ma2 = share_price / net_assets_per_share;
var Ma3 = Ma2 / EPS_growth;
var Ma4 = share_price / sales_per_share;
var Ma5 = share_price/ cash_flow_per_share;
var Ma6 = dividend_per_share/opening_share_price;


function update(){

 current_assets = Number(document.getElementById("current assets").value);
 current_liabilities = Number(document.getElementById("current liabilities").value);
 prepayments = Number(document.getElementById("prepayments").value);
 inventory = Number(document.getElementById("inventory").value);
 CBbalance = Number(document.getElementById("CBbalance").value);
 total_debts = Number(document.getElementById("total debts").value);
 total_assets = Number(document.getElementById("total assets").value);
 total_equities = Number(document.getElementById("total equities").value);
 non_current_liabilities = Number(document.getElementById("non-current liabilities").value);
 EBIT = Number(document.getElementById("EBIT").value);
 finance_costs_or_interests = Number(document.getElementById("finance costs or interests").value);
 revenue = Number(document.getElementById("revenue").value);
 cost_of_goods_sold = Number(document.getElementById("cost of goods sold").value);
 opening_inventory = Number(document.getElementById("opening inventory").value);
 closing_inventory = Number(document.getElementById("closing inventory").value);
 opening_trade_receivables = Number(document.getElementById("opening trade receivables").value);
 closing_trade_receivables = Number(document.getElementById("closing trade receivables").value);
 gross_profit = Number(document.getElementById("gross profit").value);
 net_profit = Number(document.getElementById("net profit").value);
 share_price = Number(document.getElementById("share price").value);
 earnings_per_share = Number(document.getElementById("earnings per share").value);
 net_assets_per_share = Number(document.getElementById("net assets per share").value);
 EPS_growth = Number(document.getElementById("EPS growth").value);
 sales_per_share = Number(document.getElementById("sales per share").value);
 cash_flow_per_share = Number(document.getElementById("cash flow per share").value);
 dividend_per_share = Number(document.getElementById("dividend per share").value);
 opening_share_price =Number( document.getElementById("opening share price").value);
};


    var Current_ratio = document.getElementById("Current ratio");
    var Quick_ratio = document.getElementById("Quick ratio");
    var Cash_ratio = document.getElementById("Cash ratio");
    var Debt_ratio = document.getElementById("Debt ratio");
    var Debt_to_equity_ratio = document.getElementById("Debt to equity ratio");
    var Long_term_debt_equity = document.getElementById("Long-term debt-equity");
    var Interest_coverage_ratio = document.getElementById("Interest coverage ratio");
    var Asset_turnover = document.getElementById("Asset turnover");
    var Inventory_turnover = document.getElementById("Inventory turnover");
    var Days_sales_in_inventory = document.getElementById("Days sales in inventory");
    var Receivables_turnover = document.getElementById("Receivables turnover");
    var Days_receivables_outstanding = document.getElementById("Days receivables outstanding");
    var Gross_margin = document.getElementById("Gross margin");
    var Operating_margin = document.getElementById("Operating margin");
    var Profit_margin = document.getElementById("Profit margin");
    var Return_on_assets = document.getElementById("Return on assets");
    var Return_on_equity = document.getElementById("Return on equity");
    var Price_to_earnings_ratio = document.getElementById("Price-to-earnings ratio");
    var Price_to_book_ratio = document.getElementById("Price-to-book ratio");
    var Price_earnings_growth = document.getElementById("Price earnings growth");
    var Price_to_sales_ratio = document.getElementById("Price-to-sales ratio");
    var Price_to_cash_flow_ratio = document.getElementById("Price-to-cash flow ratio");
    var Dividend_yield = document.getElementById("Dividend yield");


function count(){
    update();
    //liquidity
     Li1 = current_assets / current_liabilities;
     Li2 =(current_assets - prepayments - inventory)/current_liabilities;
     Li3 = CBbalance / current_liabilities;

    //leveraging
     Le1 = total_debts / total_assets;
     Le2 = total_debts/ total_equities;
     Le3 = non_current_liabilities / total_equities;
     Le4 = EBIT/finance_costs_or_interests;

    //efficiency
     Ef1= revenue/total_assets;
     Ef2 = cost_of_goods_sold/((opening_inventory + closing_inventory)/2);
     Ef3 = 365/ Ef2;
     Ef4 = revenue/ ((opening_trade_receivables+ closing_trade_receivables)/2);
     Ef5 = 365/ Ef4;

    //profitability
     Pr1 = gross_profit / revenue;
     Pr2 = EBIT / revenue;
     Pr3 = net_profit / revenue;
     Pr4 = net_profit / total_assets;
     Pr5 = net_profit / total_equities;

    //market
     Ma1 = share_price /earnings_per_share;
     Ma2 = share_price / net_assets_per_share;
     Ma3 = Ma2 / EPS_growth;
     Ma4 = share_price / sales_per_share;
     Ma5 = share_price/ cash_flow_per_share;
     Ma6 = dividend_per_share/opening_share_price;
};

function bind(){
    Current_ratio.innerHTML= Li1.toFixed(4);
    Quick_ratio.innerHTML=Li2.toFixed(4);
    Cash_ratio.innerHTML=Li3.toFixed(4);
    Debt_ratio.innerHTML=Le1.toFixed(4);
    Debt_to_equity_ratio.innerHTML=Le2.toFixed(4);
    Long_term_debt_equity.innerHTML=Le3.toFixed(4);
    Interest_coverage_ratio.innerHTML=Le4.toFixed(4);
    Asset_turnover.innerHTML=Ef1.toFixed(4);
    Inventory_turnover.innerHTML=Ef2.toFixed(4);
    Days_sales_in_inventory.innerHTML=Ef3.toFixed(4);
    Receivables_turnover.innerHTML=Ef4.toFixed(4);
    Days_receivables_outstanding.innerHTML=Ef5.toFixed(4);
    Gross_margin.innerHTML= Pr1.toFixed(4);
    Operating_margin.innerHTML=Pr2.toFixed(4);
    Profit_margin.innerHTML=Pr3.toFixed(4);
    Return_on_assets.innerHTML=Pr4.toFixed(4);
    Return_on_equity.innerHTML=Pr5.toFixed(4);
    Price_to_earnings_ratio.innerHTML=Ma1.toFixed(4);
    Price_to_book_ratio.innerHTML=Ma2.toFixed(4);
    Price_earnings_growth.innerHTML=Ma3.toFixed(4);
    Price_to_sales_ratio.innerHTML=Ma4.toFixed(4);
    Price_to_cash_flow_ratio.innerHTML=Ma5.toFixed(4);
    Dividend_yield.innerHTML=Ma6.toFixed(4);
};

