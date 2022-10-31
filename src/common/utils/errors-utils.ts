import {Dispatch} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {setAppError} from "../../app/app-reducer";

export const errorHandlerUtil = (e: any, dispatch: Dispatch) => {
    const err = e as AxiosError<RootError>
    if (err.response) {
        dispatch(setAppError({error: err.response.data.message}))
    } else {
        dispatch(setAppError({error: `Native error ${err.message}`}))
    }
}

// Types
export type RootError = {
    cod: string;
    message: string;
}