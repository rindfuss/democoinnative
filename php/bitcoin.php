<?php
	sleep(5); // to simulate delay in API response in order to test the MorphBall loading image in the app
	$coinNames = [
		'Bitcoin',
		'Ethereum',
		'XRP',
		'EOS',
		'Bitcoin Cash',
		'Litecoin',
		'Unknown'
	];
	$response = array();

	for ($i=0; $i<15; $i++) {
		$coin = array(
			"rank" => $i+1,
			"name" => $coinNames[rand(0, 6)],
			"price_usd" => rand(100, 10000) / 100,
			"market_cap_usd" => rand(500, 12000),
		);
		$response[] = $coin;
	}
	$responseJSON = json_encode($response);
	echo $responseJSON;
?>
