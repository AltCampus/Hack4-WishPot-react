// action for add wish board

export function addWishBoard(value){
    console.log(value)
    return{
        type: 'ADD_WISHBOARD',
        value
    }
}

export function addWishItem(value,id){
    console.log(value, id)
    return{
        type: 'ADD_WISHITEM',
        value,
        id
    }
}