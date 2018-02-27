const puppeteer = require('puppeteer');
'use strict'
// index, hashPower, hashingUnit, powerConsumption, costPerKW, poolFree
class ApiController {
  async index({
    params,
    response
  }) {
    let index = await params.index
    let hashPower = await params.hashPower;
    let hashingUnit = await params.hashingUnit;
    let powerConsumption = await params.powerConsumption;
    let costPerKW = await params.costPerKW;
    let poolFree = await params.poolFree;

    // let result = {
    //   index,
    //   hashPower,
    //   hashingUnit,
    //   powerConsumption,
    //   costPerKW,
    //   poolFree,
    // }
    // http://127.0.0.1:3333/api/etc/305/MH/1600/0.25/1
    let result = await getProfit(index, hashPower, hashingUnit, powerConsumption, costPerKW, poolFree);
    console.log(typeof result);
    return result;
    return response.json(result);
  }
}




let getProfit = async (index, hashPower, HashingUnit, PowerConsumption, costPerKW, poolFree) => {
  //console.log(index, hashPower, HashingUnit, PowerConsumption, costPerKW, poolFree);

  // let URL = `https://www.cryptocompare.com/mining/calculator/eth?HashingPower=40&HashingUnit=MH%2Fs&PowerConsumption=140&CostPerkWh=0.12&MiningPoolFee=1`;
  let URL = `https://www.cryptocompare.com/mining/calculator/${index}?HashingPower=${hashPower}&HashingUnit=${HashingUnit}%2Fs&PowerConsumption=${PowerConsumption}&CostPerkWh=${costPerKW}&MiningPoolFee=${poolFree}`;
  //console.log(URL);
  // initiate puppeteer
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();
  await page.goto(URL);
  await page.waitFor(1000);

  const result = await page.evaluate(() => {
    let PRICE_SELECTOR = 'body > div.normal-browser > div.main-wrapper > div > div > mining-calculator > div > div.clearfix > div.col-md-8 > div > div.results-header > div > div.circle-value.circle-first > div.circle-content.ng-binding';
    let element = document.querySelector(PRICE_SELECTOR).innerText;
    return element;
  });

  browser.close();
  return result;

}

// getProfit("etc", 305, 'MH', 1600, 0.25, 1).then((value) => {
//   console.log(value); // Success!
// });



module.exports = ApiController
