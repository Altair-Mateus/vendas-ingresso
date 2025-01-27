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
exports.purchaseRoutes = void 0;
const express_1 = require("express");
const purchase_service_1 = require("../services/purchase-service");
const customer_service_1 = require("../services/customer-service");
const payment_service_1 = require("../services/payment-service");
exports.purchaseRoutes = (0, express_1.Router)();
exports.purchaseRoutes.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const customerService = new customer_service_1.CustomerService();
    const customer = yield customerService.findByUserId(req.user.id);
    if (!customer) {
        res.status(400).json({ message: "User needs be a customer" });
        return;
    }
    const { ticket_ids, card_token } = req.body;
    const paymentService = new payment_service_1.PaymentService();
    const purchaseService = new purchase_service_1.PurchaseService(paymentService);
    const newPurchaseId = yield purchaseService.create({
        customerId: customer.id,
        ticketIds: ticket_ids,
        cardToken: card_token,
    });
    const purchase = yield purchaseService.findById(newPurchaseId);
    res.status(201).json(purchase);
}));
