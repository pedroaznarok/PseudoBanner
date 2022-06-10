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
	export async function deleteBanner(id: number) {
		let urlServer = 'http://168.194.207.98:8081/api_banner/delete_banner.php?id=' + id;
		let response = await fetch(urlServer, {
			method: 'DELETE',
			headers: {
				'Content-type': 'application/json',
				'Access-Control-Allow-Origin':'*'
			},
			mode: 'cors'
		});
		return await response.json();
	}




