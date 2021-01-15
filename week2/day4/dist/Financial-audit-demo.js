"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
function writeFileAsync(dir, data) {
    return __awaiter(this, void 0, void 0, function* () {
        const writeData = fs_1.writeFileSync(dir, JSON.stringify(data));
    });
}
function readFileAsync(dir) {
    return __awaiter(this, void 0, void 0, function* () {
        const readData = fs_1.readFileSync(dir, { encoding: 'utf8' });
        const splitLineArray = readData.split('\n');
        const splitCommaArray = [];
        for (var i = 0; i < splitLineArray.length; i++) {
            splitCommaArray[i] = splitLineArray[i].split(',');
        }
        return splitCommaArray;
    });
}
function calculateStatistics() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield Promise.resolve(readFileAsync('./audit-input.csv'));
        const evalArray = [];
        for (let i = 0; i < data.length; i++) {
            evalArray[i] = Number(data[i][2]);
        }
        let min = Math.min.apply(null, evalArray);
        let max = Math.max.apply(null, evalArray);
        let sum = evalArray.reduce((pre, cur) => { return pre + cur; }, 0);
        let avg = sum / evalArray.length;
        const outputObj = {
            'min': min,
            'max': max,
            'sum': sum,
            'average': avg
        };
        const outputWrite = writeFileAsync('./audit-output.json', outputObj);
    });
}
calculateStatistics();
