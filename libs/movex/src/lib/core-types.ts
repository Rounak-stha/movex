// export type MovexState = Record<string, any>;
// export type MovexState = { [k: string]: any };

import { MovexReducer } from './tools';

// This probably can be removed if its any
export type MovexState = any;

export type ValAndChecksum<T> = [T, string];

export type Checksum = string;

export type CheckedState<T> = [state: T, checksum: Checksum];

export type UnsubscribeFn = () => void;
