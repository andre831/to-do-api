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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const express_1 = __importDefault(require("express"));
const prisma = new client_1.PrismaClient();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/tasks', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tasks = yield prisma.task.findMany();
    res.json({
        success: true,
        payload: tasks,
        message: 'Loaded'
    });
}));
app.get(`/tasks/:id`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const onlyTask = yield prisma.task.findFirst({
        where: { id: Number(id) }
    });
    res.json({
        success: true,
        payload: onlyTask,
        message: 'Loaded'
    });
}));
app.post('/tasks', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description } = req.body;
    const newTask = yield prisma.task.create({
        data: {
            name: name,
            description: description,
            userId: 2
        }
    });
    res.json({
        success: true,
        payload: newTask,
        message: 'Created'
    });
}));
app.put('/tasks/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    const updatedTask = yield prisma.task.update({
        where: { id: Number(id) },
        data: Object.assign({}, req.body)
    });
    res.json({
        success: true,
        payload: updatedTask
    });
}));
app.delete('/tasks/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const deletedTask = yield prisma.task.delete({
        where: { id: Number(id) }
    });
    res.json({
        success: true,
        payload: deletedTask,
        status: 'ok',
        message: 'Deleted'
    });
}));
app.use((req, res, next) => {
    res.status(404);
    return res.json({
        success: false,
        payload: null,
        message: 'No Loaded'
    });
});
app.listen(3000, () => console.log('REST API server ready at: http://localhost:3000'));
