/**
 * app/service/user.js
 *
 */

const Service = require('egg').Service;

class UserService extends Service {

    constructor(ctx) {
        super(ctx);
        this.root = 'http://127.0.0.1'
    }

    async create(params) {

        const user = await this.ctx.db.get('student')
        // this.checkSuccess(result);
        // return result.data.user_id;
    }

    async find(uid) {
        const user = await this.app.mysql.query('select * from student;', '');
        return {user};
    }


    checkSuccess(result) {
        if (result.status !== 200) {
            const errorMsg = result.data && result.data.error_msg ? result.data.error_msg : 'unknown error';
            this.ctx.throw(result.status, errorMsg)
        }
        if (!result.date.success) {
            this.ctx.throw(500, 'remote response error', {data: result.data})
        }
    }

}

module.exports = UserService;