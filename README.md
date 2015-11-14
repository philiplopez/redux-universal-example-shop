# Feature steps

1. basic UI (react)
1. basic setup (directory structure, npm scripts, babel, webpack)
1. developer productivity: hot loading of UI, redux developer tools
1. retrieve data from server (simple REST API)
1. lightweight, redux-friendly routing / place-management
    * link generation (placeManager; react-router vs...)
1. adding behaviour (redux)
    * e.g. addToBasket, changeBasketQuantity
1. dependency injection...
    * [ES7 decorators](http://jaysoo.ca/2015/06/09/react-contexts-and-dependency-injection/)
1. passport.js w/Facebook, Google & Local
1. site analytics
    * https://developers.google.com/analytics/devguides/collection/analyticsjs/single-page-applications
1. site monetizing


## Future?

* Introduce Flow


## Motivating example: basic e-commerce site

* Places and URL routes (basic shopping cart)
    ```
    /shop (incl. search) [optional login: cookie vs account]
        /searchResults?...
        /catalog/category/{categoryId}/{category-name*}
        /catalog/product/{productId}/{product-slug}
        /basket
        /checkout       [mandatory login]
        /account        [mandatory login]
        /account/orders [mandatory login]
        /login          [required?]
    ```


# Resources

* https://medium.com/@bananaoomarang/handcrafting-an-isomorphic-redux-application-with-love-40ada4468af4
* http://redux.js.org/docs/recipes/ServerRendering.html