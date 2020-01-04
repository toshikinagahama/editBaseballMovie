import * as actionTypes from '../utils/actionTypes';
import { combineReducers } from 'redux';
import { act } from 'react-dom/test-utils';

const initialState = {
    player: {},
    src: "",
    data: [{ UserID: "永濱敏樹", Event1: "offence", Event2: "左前安打", "RBI": 0, Time: 100 },
    { UserID: "角野陽昴", Event1: "offence", Event2: "左前安打", "RBI": 0, Time: 200 }],
    currentTime: 0,
    nextInning: 0,
    selectedInning: 1,
    selectedOmote: "表",
};

const reducer = (state = initialState, action) => {
    let newData = []
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
                    newData.push(action.data);
                    continue;
                }
                newData.push(state.data[i])
            }
            return {
                ...state,
                data: newData
            }
        case actionTypes.RESULT_TIMETABLE_DELETE:
            //パフォーマンス悪いかも
            for (let i = 0; i < state.data.length; i++) {
                if (i === action.index)
                    continue;
                newData.push(state.data[i]);
            }
            return {
                ...state,
                data: newData
            }
        case actionTypes.RESULT_TIMETABLE_SELECT:
            return {
                ...state,
                currentTime: action.data["Time"]
            }
        case actionTypes.SCORE_INNING_START:
            newData.push({ UserID: "-", Event1: action.nextInning, Event2: "開始", "RBI": "-", Time: state.currentTime });
            for (let i = 0; i < state.data.length; i++) {
                newData.push(state.data[i]);
            }
            return {
                ...state,
                nextInning: action.nextInning,
                data: newData
            };
        case actionTypes.SCORE_INNING_END:
            newData.push({ UserID: "-", Event1: action.nextInning, Event2: "終了", "RBI": "-", Time: state.currentTime });
            for (let i = 0; i < state.data.length; i++) {
                newData.push(state.data[i]);
            }
            return {
                ...state,
                nextInning: action.nextInning,
                data: newData
            };
        case actionTypes.INNING_SELECT_CHANGE:
            return {
                ...state,
                selectedInning: action.selectedInning
            };
        case actionTypes.OMOTE_SELECT_CHANGE:
            return {
                ...state,
                selectedOmote: action.selectedOmote
            };
        default:
            return state;
    }
};

export default reducer;