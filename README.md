
# Cryptocurrency Mining Calculator

> There are several factors to consider when determining the profitability of Ethereum mining. To get a rough estimate of energy costs and profitability,  this calculator will give you a good ballpark number. 
The network hash rate
Electricity prices in mining location
Mining pools


# Adonis API application

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Setup

Clone the roject 

```bash
$ git clone git@github.com:JeffShomali/Mining-Calculator.git
```

Install Dependencies by `$ npm ci`.


### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```

### Usage
Endpoint: 
```javascript
https://ba2k.herokuapp.com/api/eth/305/MH/1600/0.25/1
                              |1 |2  | 3 |  4 | 5  |6
1: index //  -> btc, eth, etc ...
2: Hashing Power //  -> integer, ex: 306
3: hashingUnit // -> string, ex GH, MH , don’t need /s
4: Power consumption // -> integer, ex: 1600
5: Cost per KWh // -> decimal, ex: 0.25
5: Power consumption // -> integer, ex: 1                              
```
### Cal
```javascript
output=`curl -X GET https://ba2k.herokuapp.com/api/etc/305/MH/1600/0.25/1` 
echo $output // $20
```
