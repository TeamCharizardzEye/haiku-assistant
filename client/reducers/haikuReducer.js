// import * as types from '../constants/actionTypes';

//  const initialState = {
//    totalMarkets: 0,
//    totalCards: 0,
//    marketList: [],
//    lastMarketId: 10000,
//    newLocation: '',
//  };
 
//  const marketsReducer = (state = initialState, action) => {
//    let marketList;
   
//    switch (action.type) {
//      case types.ADD_MARKET: {
//        //increment lastMarketId and totalMarkets counters
//        const totalMarkets = state.totalMarkets + 1;
//        const lastMarketId = state.lastMarketId + 1;
 
//        // create the new market object from provided data
//        const newMarket = {
//          marketId : lastMarketId,
//          location: state.newLocation,
//          cards: 0,
//          percentOfTotal: 0,
//        };
       
//        // push the new market onto a copy of the market list
//        marketList = state.marketList.slice();
//        marketList.push(newMarket);
 
//        // return updated state
//        return {
//          ...state,
//          marketList,
//          lastMarketId,
//          totalMarkets,
//          newLocation: '',
//        }; 
//      }
       
//      case types.SET_NEW_LOCATION: 
//        const newLocation = action.payload;
 
//        return {
//          ...state,
//          newLocation,
//        };
      
       
//      case types.ADD_CARD:
//        break;
//      case types.DELETE_CARD: 
//        break;
//      default: {
//        return state;
//      }
//    }
//  };
 
//  export default marketsReducer;
 