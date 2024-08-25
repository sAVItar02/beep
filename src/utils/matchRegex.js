import { cssRegex } from "./CONSTANTS";

export const matchRegex = (value) => {
    let mismatch = [];
    Object.keys(value).forEach(key => {
        if(!cssRegex.test(value[key])) mismatch.push(key);
    });

    return mismatch.length === 0 ? true : mismatch;
}