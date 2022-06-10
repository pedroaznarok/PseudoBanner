import Banner from "../models/banner";

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

export async function getBannerXId(idBanner: number) {
    let bannersJson = await getBanners();
	var banner: Banner = new Banner();

	bannersJson.map((ban: Banner) => {
		if(idBanner==ban.id){
			banner=ban;
		}
	})
	
	return banner;
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

	export async function saveBanner(banner?: Banner) {
		let urlServer = 'http://168.194.207.98:8081/api_banner/post_banner.php';
		let method:string = "POST";
		// let idNum: Number = new Number(0);
		// let ban2: Banner = new Banner();

		console.log("este"+typeof(banner?.id))
		if(banner?.id){
			// idNum = banner.id;
			// ban2 = banner;
			console.log("ok")
		}
		console.log("banner id "+typeof(banner?.id))
		console.log(banner?.id)
		if(banner && banner.id > 0){
			urlServer = 'http://168.194.207.98:8081/api_banner/put_banner.php';
			method = "PUT";
		}
		await fetch(urlServer, {
		  "method": method,
		  "body": JSON.stringify(banner),
		  "headers": {
			"Content-Type": 'application/json'
		  }
		});
	  }



