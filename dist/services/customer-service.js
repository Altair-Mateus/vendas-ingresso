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
exports.CustomerService = void 0;
const user_model_1 = require("../models/user-model");
const database_1 = require("../database");
const customer_model_1 = require("../models/customer-model");
class CustomerService {
    register(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, password, address, phone } = data;
            const connection = yield database_1.Database.getInstance().getConnection();
            try {
                yield connection.beginTransaction();
                const user = yield user_model_1.UserModel.create({
                    name,
                    email,
                    password,
                }, { connection });
                const customer = yield customer_model_1.CustomerModel.create({ user_id: user.id, address, phone }, { connection });
                yield connection.commit();
                return {
                    id: customer.id,
                    name,
                    userId: user.id,
                    address,
                    phone,
                    created_at: customer.created_at
                };
            }
            catch (error) {
                yield connection.rollback();
                throw error;
            }
            finally {
                yield connection.release();
            }
        });
    }
    findByUserId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return customer_model_1.CustomerModel.findByUserId(id, { user: true });
        });
    }
}
exports.CustomerService = CustomerService;
