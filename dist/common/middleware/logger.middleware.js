"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleMiddleware = void 0;
const common_1 = require("@nestjs/common");
let SimpleMiddleware = class SimpleMiddleware {
    use(req, res, next) {
        const apiKey = process.env.API_KEY;
        if (!apiKey) {
            throw new Error('API_KEY is not defined in environment variables');
        }
        if (req.headers.secret !== apiKey) {
            return res.status(403).json({ message: 'Forbidden' });
        }
        const secretHeader = req.headers['secret'];
        if (!secretHeader || secretHeader !== apiKey) {
            return res.status(403).json({ message: 'Forbidden' });
        }
        next();
    }
};
exports.SimpleMiddleware = SimpleMiddleware;
exports.SimpleMiddleware = SimpleMiddleware = __decorate([
    (0, common_1.Injectable)()
], SimpleMiddleware);
//# sourceMappingURL=logger.middleware.js.map