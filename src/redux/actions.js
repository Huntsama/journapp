export const Add_Item = "Add_Item"
export const Delete_Item = "Delete_Item"

export const addItem = (item) => ({
    type:Add_Item,
    payload:item

})
export const deleteItem = (item) => ({
    type: Delete_Item,
    payload:item

})
