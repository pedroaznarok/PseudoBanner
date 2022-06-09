export async function getBanners() {
    let urlServer = 'http://168.194.207.98:8081/api_banner/get_banners.php';
	let response = await fetch(urlServer, {
		method: 'GET',
        headers: {
			'Content-type': 'application/json',
			'Access-Control-Allow-Origin':'*'
		},
        mode: 'cors'
	});
	return await response.json();
}


