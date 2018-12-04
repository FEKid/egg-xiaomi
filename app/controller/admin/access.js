'use strict';

var BaseController = require('./base.js')

class AccessController extends BaseController {
  async index() {
    // this.ctx.body = '用户管理';
    await this.ctx.render('admin/access/index');
  }
  async add() {
    // this.ctx.body = '用户增加';
    await this.ctx.render('admin/access/add');
  }
  async edit() {
    // this.ctx.body = '用户编辑';
    await this.ctx.render('admin/access/edit');
  }
}

module.exports = AccessController;
