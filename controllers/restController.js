const express = require('express')
const mongoose = require('mongoose');
const shortid = require('shortid');
const time = require('./../libs/timeLib');
const response = require('./../libs/responseLib')
const logger = require('./../libs/loggerLib');
const check = require('./../libs/checkLib')

//Importing the model here 
const restModel = mongoose.model('rest')

let getAllProd = (req, res) => {
    restModel.find()
        .select('-__v -_id -prodId')
        .lean()
        .exec((err, result) => {
            if (err) {
                console.log(err)
                logger.error(err.message, 'rest Controller: getAllProd', 10)
                let apiResponse = response.generate(true, 'Failed To Find Prod Details', 500, null)
                res.send(apiResponse)
            } else if (result == undefined || result == null || result == '') {
                logger.info('No Prod Found', 'rest Controller: getAllProd')
                let apiResponse = response.generate(true, 'No Prod Found', 404, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, 'All Prod Details Found', 200, result)
                res.send(apiResponse)
            }
        })
}// end get all Prods

/**       
 * function to read single Prod.
 */
let viewByProdId = (req, res) => {

    if (check.isEmpty(req.params.prodId)) {
        console.log('prodId should be passed')
        let apiResponse = response.generate(true, 'prodId is missing', 403, null)
        res.send(apiResponse)
    } else {
    restModel.findOne().select('-__v -_id').exec({ 'prodId': req.params.prodId }, (err, result) => {

        if (err) {
            console.log('Error Occured.')
            logger.error(`Error Occured : ${err}`, 'Database', 10)
            let apiResponse = response.generate(true, 'Error Occured.', 500, null)
            res.send(apiResponse)
        } 
        else if (check.isEmpty(result)) {
            console.log('Product Not Found.')
            let apiResponse = response.generate(true, 'Product Not Found', 404, null)
            res.send(apiResponse)
        } 
        else {
                logger.info("Product found successfully","restController:ViewByProdId",5)
                let apiResponse = response.generate(false, 'Product Found Successfully.', 200, result)
                res.send(apiResponse)

        }
    })
}
}

/**
 * function to read Prods by category.
 */
let viewByCategory = (req, res) => {
  
    if (check.isEmpty(req.params.category)) {

        console.log('category should be passed')
        let apiResponse = response.generate(true, 'Category is missing', 403, null)
        res.send(apiResponse)
    } else {
    restModel.find().select('-__v -_id -prodId').exec({ 'category': req.params.category }, (err, result) => {

        if (err) {
            console.log('Error Occured.')
            logger.error(`Error Occured : ${err}`, 'Database', 10)
            let apiResponse = response.generate(true, 'Error Occured.', 500, null)
            res.send(apiResponse)
        } else if (result == undefined || result == null || result == '') {
            console.log('Products Not Found.')
            let apiResponse = response.generate(true, 'Products Not Found', 404, null)
            res.send(apiResponse)
        } else {
            console.log('Prouducts Found Successfully')
            let apiResponse = response.generate(false, 'Proudcts Found Successfully.', 200, result)
            res.send(apiResponse)
        }
    })
}
}

/***
 * Function to filter prods by price 
 */

let viewByLowPrice = (req, res) => {

    if (check.isEmpty(req.params.price)) {
        console.log('price should be passed')
        let apiResponse = response.generate(true, 'Price is missing', 403, null)
        res.send(apiResponse)
    } else {
        restModel.find().select('-__v -_id -prodId').exec( {'price': { $lte: req.params.price } }, (err, result) => {

        if (err) {
            console.log('Error Occured.')
            logger.error(`Error Occured : ${err}`, 'Database', 10)
            let apiResponse = response.generate(true, 'Error Occured.', 500, null)
            res.send(apiResponse)
        } else if (result == undefined || result == null || result == '') {
            console.log('Price Not Found.')
            let apiResponse = response.generate(true, 'Price Not Found', 404, null)
            res.send(apiResponse)
        } else {
            console.log('Price Found Successfully')
            let apiResponse = response.generate(false, 'Price Found Successfully.', 200, result)
            res.send(apiResponse)
        }
    })
}
}


/**
 * function to read Prods by Seller.
 */
let viewBySeller = (req, res) => {

    if (check.isEmpty(req.params.seller)) {
        console.log('Seller should be passed')
        let apiResponse = response.generate(true, 'Seller is missing', 403, null)
        res.send(apiResponse)
    } else {
        restModel.find().select('-__v -_id -prodId').exec( {'seller': req.params.seller } , (err, result) => {
        if (err) {
            console.log('Error Occured.')
            logger.error(`Error Occured : ${err}`, 'Database', 10)
            let apiResponse = response.generate(true, 'Error Occured.', 500, null)
            res.send(apiResponse)
        } else if (result == undefined || result == null || result == '') {
            console.log('Seller Not Found.')
            let apiResponse = response.generate(true, 'Seller Not Found', 404, null)
            res.send(apiResponse)
        } else {
            console.log('Seller Found Successfully')
            let apiResponse = response.generate(false, 'Seller Found Successfully.', 200, result)
            res.send(apiResponse)
        }
    })
}
}

/**
 * function to edit Prod by admin.
 */
let editProd = (req, res) => {

    if (check.isEmpty(req.params.prodId)) {
        console.log('prodId should be passed')
        let apiResponse = response.generate(true, 'prodId is missing', 403, null)
        res.send(apiResponse)
    } else {
        let options = req.body;
        console.log(options);
        restModel.update({ 'prodId': req.params.prodId }, options, { multi: true }).exec((err, result) => {
            if (err) {
                console.log('Error Occured.')
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                console.log('prodId Not Found.')
                let apiResponse = response.generate(true, 'prodId Not Found', 404, null)
                res.send(apiResponse)
            } else {
                console.log('product Edited Successfully')
                let apiResponse = response.generate(false, 'Product Edited Successfully.', 200, result)
                res.send(apiResponse)
            }
        })
    }
}



/**
 * function to delete the assignment collection.
 */
let deleteProd = (req, res) => {
    if (check.isEmpty(req.params.prodId)) {
        console.log('prodId should be passed')
        let apiResponse = response.generate(true, 'prodId is missing', 403, null)
        res.send(apiResponse)
    } else {
        restModel.remove({ 'prodId': req.params.prodId },(err, result) => {
            if (err) {
                console.log('Error Occured.')
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                console.log('prodId Not Found.')
                let apiResponse = response.generate(true, 'prodId Not Found', 404, null)
                res.send(apiResponse)
            } else {
                console.log('product delete Successfully')
                let apiResponse = response.generate(false, 'Product deleted Successfully.', 200, result)
                res.send(apiResponse)
            }
        })
    }
}

/**
 * function to create the Prod.
 */
let createProd = (req, res) => {
    let prodCreationFunction = () => {
        return new Promise((resolve, reject) => {
            console.log(req.body)
            if (check.isEmpty(req.body.title) || check.isEmpty(req.body.description) || check.isEmpty(req.body.price) || check.isEmpty(req.body.category) || check.isEmpty(req.body.seller) || check.isEmpty(req.body.inStock)) {

                console.log("403, forbidden request");
                let apiResponse = response.generate(true, 'required parameters are missing', 403, null)
                reject(apiResponse)
            } else {
    var today = Date.now()
    let prodId = shortid.generate()
    console.log(prodId)

    let newProd = new restModel({

        prodId: prodId,
        title: req.body.title,
        description: req.body.description,
        currency:req.body.currency,
        isPublished: true,
        category: req.body.category,
        seller: req.body.seller,
        created: today,
        lastReviewed: today
    }) // end new Prod model

    newProd.save((err, result) => {
        if (err) {
            console.log('Error Occured.')
            logger.error(`Error Occured : ${err}`, 'Database', 10)
            let apiResponse = response.generate(true, 'Error Occured.', 500, null)
            reject(apiResponse)
        } else {
            console.log('Success in product creation')
            resolve(result)
        }
    }) // end new prod save
}
}) // end new prod promise
} // end create prod function

// making promise call.
prodCreationFunction()
.then((result) => {
let apiResponse = response.generate(false, 'product Created successfully', 200, result)
res.send(apiResponse)
})
.catch((error) => {
console.log(error)
res.send(error)
})
}
/**
 * function to increase views of a Prod.
 */
let addProdInCart = (req, res) => {

    if (check.isEmpty(req.params.prodId)) {
        console.log('prodId should be passed')
        let apiResponse = response.generate(true, 'prodId is missing', 403, null)
        res.send(apiResponse)
    } else {
        restModel.findOne().select('-__v -_id -prodId').exec({ 'prodId': req.params.prodId }, (err, result) => {

        if (err) {
            console.log('Error Occured.')
            logger.error(`Error Occured : ${err}`, 'Database', 10)
            let apiResponse = response.generate(true, 'Error Occured.', 500, null)
            res.send(apiResponse)
        } 
        else if (check.isEmpty(result)) {
            console.log('Product Not Found.')
            let apiResponse = response.generate(true, 'Product Not Found', 404, null)
            res.send(apiResponse)
        } 
        else { 
                result.cart = true;
                logger.info("Product added to cart successfully","restController:ViewByProdId",5)
                let apiResponse = response.generate(false, 'Product added to cart Successfully.', 200, result)
                res.send(apiResponse)
        }
    })
}
}

   

let delProdInCart = (req, res) => {

    if (check.isEmpty(req.params.prodId)) {
        console.log('prodId should be passed')
        let apiResponse = response.generate(true, 'prodId is missing', 403, null)
        res.send(apiResponse)
    } else {
        restModel.findOne().select('-__v -_id -prodId').exec({ 'prodId': req.params.prodId }, (err, result) => {

        if (err) {
            console.log('Error Occured.')
            logger.error(`Error Occured : ${err}`, 'Database', 10)
            let apiResponse = response.generate(true, 'Error Occured.', 500, null)
            res.send(apiResponse)
        } 
        else if (check.isEmpty(result)) {
            console.log('Product Not Found.')
            let apiResponse = response.generate(true, 'Product Not Found', 404, null)
            res.send(apiResponse)
        } 
        else { 
                result.cart = false;
                logger.info("Product deleted from cart successfully","restController:ViewByProdId",5)
                let apiResponse = response.generate(false, 'Product deleted from cart successfully.', 200, result)
                res.send(apiResponse)
        }
    })
}
}

module.exports = {
    getAllProd: getAllProd,
    createProd: createProd,
    viewByProdId: viewByProdId,
    viewByCategory: viewByCategory,
    viewBySeller: viewBySeller,
    viewByLowPrice: viewByLowPrice,
    editProd: editProd,
    deleteProd: deleteProd,
    addProdInCart: addProdInCart,
    delProdInCart: delProdInCart
}