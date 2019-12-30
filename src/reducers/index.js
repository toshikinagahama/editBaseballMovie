import * as actionTypes from '../utils/actionTypes';
import { combineReducers } from 'redux';
import { act } from 'react-dom/test-utils';

const initialVideoState = {
    player: {},
    src: "",
    currentTime: 0,
};

const videoChange = (state = initialVideoState, action) => {
    console.log(action.src);
    switch (action.type) {
        case actionTypes.VIDEO_OPERATION:
            return {
                ...state,
                player: action.player
            };
        case actionTypes.VIDEO_SRC_CHANGE:
            console.log(action.src);
            return {
                ...state,
                src: action.src
            };
        case actionTypes.VIDEO_CURRENTTIME_CHANGE:
            return {
                ...state,
                currentTime: action.currentTime
            };

        default:
            return state;
    }
};

const initialTableState = {
    data: [{ UserID: "永濱敏樹", Event1: "offence", Event2: "左前安打", "RBI": 0, Time: 100 },
    { UserID: "角野陽昴", Event1: "offence", Event2: "左前安打", "RBI": 0, Time: 200 }],
    currentTime: 0,
}

const resultTableChange = (state = initialTableState, action) => {

    console.log(action);
    let newState = [];

    switch (action.type) {
        case actionTypes.RESULT_TIMETABLE_ADD:
            if (action.data === undefined)
                return { ...state };
            return {
                ...state,
                data: state.data.concat(action.data)
            }
        case actionTypes.RESULT_TIMETABLE_UPDATE:
            //パフォーマンス悪いかも
            for (let i = 0; i < state.data.length; i++) {
                if (i === action.index) {
                    newState.push(action.data);
                    continue;
                }
                newState.push(state.data[i])
            }
            return {
                ...state,
                data: newState
            }
        case actionTypes.RESULT_TIMETABLE_DELETE:
            //パフォーマンス悪いかも
            for (let i = 0; i < state.data.length; i++) {
                if (i === action.index)
                    continue;
                newState.push(state.data[i]);
            }
            return {
                ...state,
                data: newState
            }
        case actionTypes.RESULT_TIMETABLE_SELECT:
            return {
                ...state,
                currentTime: action.data["Time"]
            }
        default:
            return state;
            break;
    }
};


const initialScoreState = {
    nextInning: 0,
};

const scoreChange = (state = initialScoreState, action) => {
    console.log(action.nextInning);
    switch (action.type) {
        case actionTypes.SCORE_INNING_CHANGE:
            return {
                ...state,
                nextInning: action.nextInning
            };
        default:
            return state;
    }
};

const reducer = combineReducers({
    videoChange,
    resultTableChange,
    scoreChange,
});

export default reducer;