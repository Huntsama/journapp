import { Add_Item, Delete_Item } from './actions';

const intialState = {
  journalItems: [],
};

const journalReducer = (state = intialState, action) => {
  switch (action.type) {
    case Add_Item:
      let id = 1;
      if (state.journalItems.length > 0) {
        id = state.journalItems[0].id + 1;
      }
      let item = {
        id: id,
        title: action.payload.title,
        date: action.payload.date,
        journal: action.payload.journal,
      };
      return {
        ...state,
        journalItems: [item, ...state.journalItems],
      };
      case Delete_Item :{
        return{
          ...state,
          journalItems:state.journalItems.filter((item)=>item.id !== action.payload)
        }
      }
    default:
      return state;
  }
};

export default journalReducer;
