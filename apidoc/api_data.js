define({ "api": [
  {
    "type": "post",
    "url": "/api/v1/rest/create",
    "title": "Create product",
    "version": "0.0.1",
    "group": "create",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "seller",
            "description": "<p>seller of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>category of the product passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t   \"error\": false,\n\t    \"message\": \"Product Edited Successfully.\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\tprodId: \"string\",\n\t\t\t\t\t\ttitle: \"string\",\n\t\t\t\t\t\tdescription: \"string\",\n\t\t\t\t\t\tseller: \"string\",\n\t\t\t\t\t\tprice: number,\n\t\t\t\t\t\tinStock: boolean,\n\t\t\t\t\t\tcategory: \"string\",\n\t\t\t\t\t\tcurrency: \"string\",\n\t\t\t\t\t\tcreated: \"date\",\n                        lastReviewed: \"date\",\n                        cart:boolean\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/restroute.js",
    "groupTitle": "create",
    "name": "PostApiV1RestCreate"
  },
  {
    "type": "post",
    "url": "/api/v1/rest/:prodId/delete",
    "title": "Delete Products by prodId",
    "version": "0.0.1",
    "group": "delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "prodId",
            "description": "<p>of the products passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Product Deleted Successfully\",\n\t    \"status\": 200,\n\t    \"data\": []\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/restroute.js",
    "groupTitle": "delete",
    "name": "PostApiV1RestProdidDelete"
  },
  {
    "type": "put",
    "url": "/api/v1/rest/:prodId/edit",
    "title": "Edit Product by prodId",
    "version": "0.0.1",
    "group": "edit",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "prodId",
            "description": "<p>of the product passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Product Edited Successfully.\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\tprodId: \"string\",\n\t\t\t\t\t\ttitle: \"string\",\n\t\t\t\t\t\tdescription: \"string\",\n\t\t\t\t\t\tseller: \"string\",\n\t\t\t\t\t\tprice: number,\n\t\t\t\t\t\tinStock: boolean,\n\t\t\t\t\t\tcategory: \"string\",\n\t\t\t\t\t\tcurrency: \"string\",\n\t\t\t\t\t\tcreated: \"date\",\n                        lastReviewed: \"date\",\n                        cart:boolean\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/restroute.js",
    "groupTitle": "edit",
    "name": "PutApiV1RestProdidEdit"
  },
  {
    "type": "get",
    "url": "/api/v1/rest/all",
    "title": "Get all products",
    "version": "0.0.1",
    "group": "read",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"All Product Details Found\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\tprodId: \"string\",\n\t\t\t\t\t\ttitle: \"string\",\n\t\t\t\t\t\tdescription: \"string\",\n\t\t\t\t\t\tseller: \"string\",\n\t\t\t\t\t\tprice: number,\n\t\t\t\t\t\tinStock: boolean,\n\t\t\t\t\t\tcategory: \"string\",\n\t\t\t\t\t\tcurrency: \"string\",\n\t\t\t\t\t\tcreated: \"date\",\n                        lastReviewed: \"date\",\n                        cart:boolean\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed To Find Product Details\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/restroute.js",
    "groupTitle": "read",
    "name": "GetApiV1RestAll"
  },
  {
    "type": "get",
    "url": "/api/v1/rest/:prodId/addProdInCart",
    "title": "Add products in cart",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "prodId",
            "description": "<p>of the product passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Products Found Successfully.\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\tprodId: \"string\",\n\t\t\t\t\t\ttitle: \"string\",\n\t\t\t\t\t\tdescription: \"string\",\n\t\t\t\t\t\tseller: \"string\",\n\t\t\t\t\t\tprice: number,\n\t\t\t\t\t\tinStock: boolean,\n\t\t\t\t\t\tcategory: \"string\",\n\t\t\t\t\t\tcurrency: \"string\",\n\t\t\t\t\t\tcreated: \"date\",\n                        lastReviewed: \"date\",\n                        cart:boolean\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/restroute.js",
    "groupTitle": "read",
    "name": "GetApiV1RestProdidAddprodincart"
  },
  {
    "type": "get",
    "url": "/api/v1/rest/:prodId/delProdInCart",
    "title": "Delete products from cart",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "prodId",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Products Found Successfully.\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\tprodId: \"string\",\n\t\t\t\t\t\ttitle: \"string\",\n\t\t\t\t\t\tdescription: \"string\",\n\t\t\t\t\t\tseller: \"string\",\n\t\t\t\t\t\tprice: number,\n\t\t\t\t\t\tinStock: boolean,\n\t\t\t\t\t\tcategory: \"string\",\n\t\t\t\t\t\tcurrency: \"string\",\n\t\t\t\t\t\tcreated: \"date\",\n                        lastReviewed: \"date\",\n                        cart:boolean\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/restroute.js",
    "groupTitle": "read",
    "name": "GetApiV1RestProdidDelprodincart"
  },
  {
    "type": "get",
    "url": "/api/v1/rest/view/by/category/:category",
    "title": "Get products by category",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>category of the product passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Products Found Successfully.\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\tprodId: \"string\",\n\t\t\t\t\t\ttitle: \"string\",\n\t\t\t\t\t\tdescription: \"string\",\n\t\t\t\t\t\tseller: \"string\",\n\t\t\t\t\t\tprice: number,\n\t\t\t\t\t\tinStock: boolean,\n\t\t\t\t\t\tcategory: \"string\",\n\t\t\t\t\t\tcurrency: \"string\",\n\t\t\t\t\t\tcreated: \"date\",\n                        lastReviewed: \"date\",\n                        cart:boolean\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/restroute.js",
    "groupTitle": "read",
    "name": "GetApiV1RestViewByCategoryCategory"
  },
  {
    "type": "get",
    "url": "/api/v1/rest/view/by/lowprice/:price",
    "title": "Get products by price",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<p>of the product passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Products Found Successfully.\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\tprodId: \"string\",\n\t\t\t\t\t\ttitle: \"string\",\n\t\t\t\t\t\tdescription: \"string\",\n\t\t\t\t\t\tseller: \"string\",\n\t\t\t\t\t\tprice: number,\n\t\t\t\t\t\tinStock: boolean,\n\t\t\t\t\t\tcategory: \"string\",\n\t\t\t\t\t\tcurrency: \"string\",\n\t\t\t\t\t\tcreated: \"date\",\n                        lastReviewed: \"date\",\n                        cart:boolean\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/restroute.js",
    "groupTitle": "read",
    "name": "GetApiV1RestViewByLowpricePrice"
  },
  {
    "type": "get",
    "url": "/api/v1/rest/view/by/seller/:seller",
    "title": "Get products by seller",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "seller",
            "description": "<p>of the product passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Products Found Successfully.\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t    prodId: \"string\",\n\t\t\t\t\t\ttitle: \"string\",\n\t\t\t\t\t\tdescription: \"string\",\n\t\t\t\t\t\tseller: \"string\",\n\t\t\t\t\t\tprice: number,\n\t\t\t\t\t\tinStock: boolean,\n\t\t\t\t\t\tcategory: \"string\",\n\t\t\t\t\t\tcurrency: \"string\",\n\t\t\t\t\t\tcreated: \"date\",\n                        lastReviewed: \"date\",\n                        cart:boolean\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/restroute.js",
    "groupTitle": "read",
    "name": "GetApiV1RestViewBySellerSeller"
  },
  {
    "type": "get",
    "url": "/api/v1/rest/view/:prodId",
    "title": "Get a single product",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "prodId",
            "description": "<p>The prodId should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Product Found Successfully.\",\n\t    \"status\": 200,\n\t    \"data\": {\n\t    \t\t\t_id: \"string\",\n\t    \t\t\t__v: number\n\t\t\t\t\tprodId: \"string\",\n\t\t\t\t\t\ttitle: \"string\",\n\t\t\t\t\t\tdescription: \"string\",\n\t\t\t\t\t\tseller: \"string\",\n\t\t\t\t\t\tprice: number,\n\t\t\t\t\t\tinStock: boolean,\n\t\t\t\t\t\tcategory: \"string\",\n\t\t\t\t\t\tcurrency: \"string\",\n\t\t\t\t\t\tcreated: \"date\",\n                        lastReviewed: \"date\",\n                        cart:boolean\n\t\t\t\t}\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/restroute.js",
    "groupTitle": "read",
    "name": "GetApiV1RestViewProdid"
  }
] });
