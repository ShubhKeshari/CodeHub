/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAction } from '@reduxjs/toolkit';

export const fetchDataRequest = createAction('FETCH_DATA_REQUEST');
export const fetchDataSuccess = createAction<any[]>('FETCH_DATA_SUCCESS');
export const fetchDataFailure = createAction<string>('FETCH_DATA_FAILURE');
