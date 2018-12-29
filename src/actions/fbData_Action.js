import {
    SAVE_FB,
    CLEAR_FB,
    ALBUM_ID
} from '../actions/types';

import axios from 'axios'


export const saveFB = (fbData) => {
    return dispatch => {
                    dispatch({ type: SAVE_FB, payload: fbData });
                }
            }

            

            export const clearFB = (fbData) => {
                return dispatch => {
                                dispatch({ type: CLEAR_FB, payload: {
                                    albums : { data : [],

                                    },
                                    name : undefined
                                } });
                            }
}

export const getpics = (album_id) => {


    return dispatch => {
                    axios.get('album_id/photos?fields=source')
                    dispatch({ type: ALBUM_ID, payload: album_id });
                }
            }

