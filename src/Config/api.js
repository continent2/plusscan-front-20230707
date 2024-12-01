
// const URL=`https://plus8.co:37847`
// const URL=`https://pluscan.online:37847`
const URL=`https://scan.pluscan.online:37847`
const API={
	API_STATS: 		`${URL}/stats`,
	API_SEARCH:		`${URL}/queries/search/`,

	API_LATEST_BLOCKS: 		`${URL}/queries/rows/blocks/_/_/0/10/timestamp/DESC`,
	API_BLOCKS: 			`${URL}/queries/rows/blocks/_/_/`,
	API_BLOCK_INFO_NUMBER:	`${URL}/queries/singlerow/blocks/number/`,
	API_BLOCK_INFO_HASH:    `${URL}/queries/singlerow/blocks/hash/`,

	API_LATEST_TXS: 	`${URL}/queries/rows/transactions/_/_/0/10/timestamp/DESC`,
	API_TXS: 			`${URL}/queries/rows/transactions/_/_/`,
	API_TXS_BLOCK: 		`${URL}/queries/rows/transactions/blockNumber/`,
	API_TX_INFO:    	`${URL}/queries/singlerow/transactions/hash/`,


	API_TOKENS: 			`${URL}/queries/rows/tokens/_/_/`,
	API_TOKEN_INFO_ADDRESS: `${URL}/queries/singlerow/tokens/address/`,
	API_TOKEN_TXS_ADDRESS: `${URL}/queries/rows/transactions/contaddress/`,
	API_TOKEN_HOLDERS_ADDRESS: `${URL}/queries/rows/holders/token/`,

	API_TXS_ADDRESS: `${URL}/queries/rows/transactions/from_/`,
	API_HOLDER_ADDRESS: `${URL}/queries/rows/holders/holder/`,

	API_ADDRESS_INFO: `${URL}/web3/address-activity/`


/** 	API_USERNAME_DUP : `${URL}/users/username`,
	API_PROFILEIMAGE: `${URL}/users/update`,
	API_PROFILEIMAGE_ONLY: `${URL}/users/user/profileimage`, // /:username
	API_MYINFO: `${URL}/users/user/myinfo/mongo`,
	API_LOGOUT: `${URL}/users/logout`,
	API_USERINFO: `${URL}/users/user/userinfo`, // /:username/mongo
	API_JOIN: `${URL}/users/join`,
	API_LOGINBATCH: `${URL}/users/login/batch`,
	API_LOGIN: `${URL}/users/login`,
	API_ITEMLIST: `${URL}/items/list/maria`, // "https://collector.place:26425/items/list/maria/0/10"
	API_STOREFILE: `${URL}/items/store/file/test`,
	API_MINT: `${URL}/items/mint`,
	API_ITEM: `${URL}/items/item`,
	API_ITEMHISTORY: `${URL}/items/item/history`, // /:itemkey/:value
	API_ITEMSBYKEYVALUE: `${URL}/items/bykeyvalue`, // /:fieldname/:value
	API_ITEM_POST_COMMENT: `${URL}/contents/comment`, // /:itemid
	API_ITEM_GET_COMMENT: `${URL}/contents/comments`, // /:itemid
	API_BUY: `${URL}/pays/buy`, // https://collector.place:26425/pays/buy
	API_TOGGLE_FAVOR: `${URL}/favorites/toggle`, // /:objectid
	API_DOILIKETHISITEM: `${URL}/favorites/me`, // /:objectid
	API_FAVORCOUNT: `${URL}/favorites/totalcount`, // /:objectid/totalcount
	API_REFERERCODE: `${URL}/referers/referer`,
	API_COLLECTIONS: `${URL}/collections`,
	API_UPDATE_ITEM: `${URL}/items/item`,
	API_PAYMENTCARD: `${URL}/pays/card`,
	API_PAYMEANS: `${URL}/pays/paymeans`,
*/	
}
const URL_ETH_NODE =  'http://pluscan.online:30413'
export {
	API, 
	URL_ETH_NODE
}
