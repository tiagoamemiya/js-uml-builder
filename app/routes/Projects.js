const path = require('path');

module.exports = function(app) {
    const express = require('express');
    const router = express.Router();
    const controller = require(path.resolve('app', 'controllers', 'ProjectController'));

    router.route('/').get(controller.listing);
    router.route('/:project_name').get(controller.read);

    app.use('/projects', router);
};