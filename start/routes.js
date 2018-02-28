'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')

Route.get('/', ({
  request
}) => {
  return {
    greeting: 'Ba2k ETH Mining APP'
  }
})
// index, hashPower, hashingUnit, powerConsumption, costPerKW, poolFree
Route.get('/api/:index?/:hashPower?/:hashingUnit?/:powerConsumption?/:costPerKW?/:poolFree?', 'ApiController.index')
