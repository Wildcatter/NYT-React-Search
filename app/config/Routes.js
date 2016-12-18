var React = require("react");

var router = require("react-router");

var Route = router.Route;

var Router = router.Router;

var hashHistory = router.hashHistory;

var IndexRoute = router.indexRoute;

var Main = require("../components/Main");
var Saved = require("../components/children/Saved");
var Search = require("../components/children/Search");
var Query = require("../components/children/grandchildren/Query");
var Results = require("../components/children/grandchildren/Results");

module.exports = (
	<Router history = {hashHistory}>

		<Route path = "/" component={Main}>

			{
				<
			}

	)