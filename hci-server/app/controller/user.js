/**
 * app/controller/user.js
 */

const Controller = require('egg').Controller;

//
const createRule = {}

class UserController extends Controller {
    async index() {
        const ctx = this.ctx;

        // ctx.validate(createRule, ctx.request.body);

        const user = await ctx.service.user.find()
        ctx.body = user;

        ctx.status = 200
    }
}

module.exports = UserController;

