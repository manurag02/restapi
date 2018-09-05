const express = require('express')
const restController = require('./../controllers/restController')
const appConfig = require("./../config/appConfig")
const auth = require("./../middlewares/auth")
const router = express.Router();

module.exports.setRouter = function(app){

	let baseUrl = appConfig.apiVersion+'/rest';
	
	
    app.get(baseUrl+'/all',restController.getAllProd);

	/**
	 * @api {get} /api/v1/rest/all Get all products
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "All Product Details Found",
	    "status": 200,
	    "data": [
					{
						prodId: "string",
						title: "string",
						description: "string",
						seller: "string",
						price: number,
						inStock: boolean,
						category: "string",
						currency: "string",
						created: "date",
                        lastReviewed: "date",
                        cart:boolean
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Failed To Find Product Details",
	    "status": 500,
	    "data": null
	   }
	 */

    app.get(baseUrl+'/view/:prodId',restController.viewByProdId);

    /**
	 * @api {get} /api/v1/rest/view/:prodId Get a single product
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} prodId The prodId should be passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Product Found Successfully.",
	    "status": 200,
	    "data": {
	    			_id: "string",
	    			__v: number
					prodId: "string",
						title: "string",
						description: "string",
						seller: "string",
						price: number,
						inStock: boolean,
						category: "string",
						currency: "string",
						created: "date",
                        lastReviewed: "date",
                        cart:boolean
				}
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.",
	    "status": 500,
	    "data": null
	   }
	 */
    app.get(baseUrl+'/view/by/seller/:seller',restController.viewBySeller);

    /**
	 * @api {get} /api/v1/rest/view/by/seller/:seller Get products by seller
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} seller of the product passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Products Found Successfully.",
	    "status": 200,
	    "data": [
					{
					    prodId: "string",
						title: "string",
						description: "string",
						seller: "string",
						price: number,
						inStock: boolean,
						category: "string",
						currency: "string",
						created: "date",
                        lastReviewed: "date",
                        cart:boolean
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	   }
	 */

    app.get(baseUrl+'/view/by/category/:category',restController.viewByCategory);

    /**
	 * @api {get} /api/v1/rest/view/by/category/:category Get products by category
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} category category of the product passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Products Found Successfully.",
	    "status": 200,
	    "data": [
					{
						prodId: "string",
						title: "string",
						description: "string",
						seller: "string",
						price: number,
						inStock: boolean,
						category: "string",
						currency: "string",
						created: "date",
                        lastReviewed: "date",
                        cart:boolean
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	   }
	 */

    app.post(baseUrl+'/:prodId/delete',auth.isAuthenticated,restController.deleteProd);


    /**
	 * @api {post} /api/v1/rest/:prodId/delete Delete Products by prodId
	 * @apiVersion 0.0.1
	 * @apiGroup delete
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} prodId of the products passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Product Deleted Successfully",
	    "status": 200,
	    "data": []
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	   }
	 */
 
    app.put(baseUrl+'/:prodId/edit',auth.isAuthenticated,restController.editProd);

    /**
	 * @api {put} /api/v1/rest/:prodId/edit Edit Product by prodId
	 * @apiVersion 0.0.1
	 * @apiGroup edit
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} prodId of the product passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Product Edited Successfully.",
	    "status": 200,
	    "data": [
					{
				prodId: "string",
						title: "string",
						description: "string",
						seller: "string",
						price: number,
						inStock: boolean,
						category: "string",
						currency: "string",
						created: "date",
                        lastReviewed: "date",
                        cart:boolean
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	   }
	 */

    app.post(baseUrl+'/create',auth.isAuthenticated,restController.createProd);

    /**
	 * @api {post} /api/v1/rest/create Create product
	 * @apiVersion 0.0.1
	 * @apiGroup create
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} title Title of the product passed as a body parameter
	 * @apiParam {String} description Description of the product passed as a body parameter
	 * @apiParam {String} seller  seller of the product passed as a body parameter
	 * @apiParam {String} category category of the product passed as a body parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	   "error": false,
	    "message": "Product Edited Successfully.",
	    "status": 200,
	    "data": [
					{
				prodId: "string",
						title: "string",
						description: "string",
						seller: "string",
						price: number,
						inStock: boolean,
						category: "string",
						currency: "string",
						created: "date",
                        lastReviewed: "date",
                        cart:boolean
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	   }
	 */

    app.get(baseUrl+'/view/by/lowprice/:price',restController.viewByLowPrice);

    /**
	 * @api {get} /api/v1/rest/view/by/lowprice/:price Get products by price
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} price of the product passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Products Found Successfully.",
	    "status": 200,
	    "data": [
					{
						prodId: "string",
						title: "string",
						description: "string",
						seller: "string",
						price: number,
						inStock: boolean,
						category: "string",
						currency: "string",
						created: "date",
                        lastReviewed: "date",
                        cart:boolean
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	   }
	 */

    app.get(baseUrl+'/:prodId/addProdInCart',restController.addProdInCart);

    /**
	 * @api {get} /api/v1/rest/:prodId/addProdInCart Add products in cart
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} prodId of the product passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Products Found Successfully.",
	    "status": 200,
	    "data": [
					{
						prodId: "string",
						title: "string",
						description: "string",
						seller: "string",
						price: number,
						inStock: boolean,
						category: "string",
						currency: "string",
						created: "date",
                        lastReviewed: "date",
                        cart:boolean
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	   }
	 */

    app.get(baseUrl+'/:prodId/delProdInCart',restController.delProdInCart);

    /**
	 * @api {get} /api/v1/rest/:prodId/delProdInCart Delete products from cart
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} prodId The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Products Found Successfully.",
	    "status": 200,
	    "data": [
					{
						prodId: "string",
						title: "string",
						description: "string",
						seller: "string",
						price: number,
						inStock: boolean,
						category: "string",
						currency: "string",
						created: "date",
                        lastReviewed: "date",
                        cart:boolean
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	   }
	 */

}


