var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import router from './routes';
import cors from 'cors';
import morgan from 'morgan';
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
app.get('/', (_, res) => {
    res.send('Express + TypeScript Server');
});
app.use(express.json());
app.use(cors());
app.use(router);
app.use(morgan('dev'));
app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const MONGO_URI = (_a = process.env.MONGO_URI) !== null && _a !== void 0 ? _a : '';
    if (!MONGO_URI) {
        throw new Error('No mongo URI found!');
    }
    yield mongoose
        .connect(MONGO_URI)
        .then(() => console.log('DB Connected'))
        .catch(err => console.log(err));
    console.log(`⚡️[server]: Server is running ON PORT ${port}`);
}));
