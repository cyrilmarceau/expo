"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashString = hashString;
const crypto_1 = __importDefault(require("crypto"));
function hashString(str) {
    return crypto_1.default.createHash('md5').update(str).digest('hex');
}
//# sourceMappingURL=hash.js.map