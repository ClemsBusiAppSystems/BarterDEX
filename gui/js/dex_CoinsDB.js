
function BarterDEX_Init_CoinsDB() {
	var barterDEX_app_info = ShepherdIPC({ "command": "app_info" });
	console.log(barterDEX_app_info);

	localStorage.setItem('mm_barterdex_app_info', JSON.stringify(barterDEX_app_info));
}

function CoinsDB_UpdatedCoinsDbFile() {
	var update_coinsdb_file = ShepherdIPC({ "command": "coins_db_dl", "data":{"cmd":"update_coins_file"} });
	console.log(update_coins_file);
}


function CoinsDB_DlIcons(icons_array) {
	console.log(icons_array); //if multiple expected value is ["kmd","btc","oot"]. If single ["kmd"]. MUST be small letters.
	var icons_dl = ShepherdIPC({ "command": "coins_db_dl", "data":{"cmd":"dl_icons","coin_array":icons_array} });
}


function CoinsDB_ReadLocalDB() {
	var local_coinsdb = ShepherdIPC({ "command": "coins_db_read_db" });
	//console.log(local_coinsdb)
	return local_coinsdb;
}


function CoinsDB_ManageCoinsJson(coins_json_action, coins_json_data) {
	//TODO
}

function CoinsDB_ManageCoinsDetails(coins_detail_action, coins_detail_data) {
	//TODO
}


function CoinsDB_GetCoinDetails(coin_code) {
	console.log(coin_code)

	var coins_detail_list = [{"coin": "KMD", "Name": "Komodo","explorer":["https://www.kmd.host/tx/"],"eth":false,"electrum":[{"electrum2.cipig.net":10001},{"electrum1.cipig.net":10001}]},{"coin": "BTC", "Name": "Bitcoin","explorer":["https://www.blocktrail.com/BTC/tx/"],"eth":false,"electrum":[{"electrum2.cipig.net":10000},{"electrum1.cipig.net":10000}]}]

	var coin_details = '';
	$.each(coins_detail_list, function(index, value){
		//console.log(index);
		//console.log(value);
		if (coin_code == value.coin) {
			coin_details = value;
		}
	});

	return coin_details;
}

function CoinDB_coin_select_options() {
	var coinsdbdir = JSON.parse(localStorage.getItem('mm_barterdex_app_info')).CoinsDBDir;
	//console.log(coinsdbdir);

	var coins_detail_list = [{"coin": "KMD", "Name": "Komodo","explorer":["https://www.kmd.host/tx/"],"eth":false,"electrum":[{"electrum2.cipig.net":10001},{"electrum1.cipig.net":10001}]},{"coin": "BTC", "Name": "Bitcoin","explorer":["https://www.blocktrail.com/BTC/tx/"],"eth":false,"electrum":[{"electrum2.cipig.net":10000},{"electrum1.cipig.net":10000}]}]
	
	var options_data = '';
	$.each(coins_detail_list, function(index, value){
		//console.log(index);
		//console.log(value);
		//console.log(value.coin.toLowerCase());
		options_data += `
<option data-content="<img src='${coinsdbdir}/icons/${value.coin.toLowerCase()}.png' width='30px;'/> ${value.Name} (${value.coin})" data-tokens="${value.coin.toLowerCase()} ${value.Name} ">${value.coin}</option>`;
	})
	//console.log(options_data);

	return options_data
}