import {request} from './request'
export function getBeverages(){
    return request({
        url:'/api/beverages.json'
    })
}

export function getCoffee(){
    return request({
        url:'/api/coffee.json'
    })
}

export function getCity(){
    return request({
        url:'/api/city.json'
    })
}

export function getFood(){
    return request({
        url:'/api/food.json'
    })
}

export function getMerchangdise(){
    return request({
        url:'/api/merchandise.json'
    })
}

export function getSelection(){
    return request({
        url:'/api/selection.json'
    })
}

export function getStores(){
    return request({
        url:'/api/stores.json'
    })
}

export function getUsers(){
    return request({
        url:'/api/users.json'
    })
}