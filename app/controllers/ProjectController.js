const AppController = require('./AppController.js');
const fs = require('fs');
const nomnoml = require('nomnoml');
const path = require('path');

class ProjectController extends AppController {
    constructor() {
        super();
    }

    async listing(req, res) {
        let project_schema_path = fs.readdirSync(path.resolve('app', 'schemas'));
        let schema_list = [];
        project_schema_path.forEach(function (schema) {
            schema_list.push({'name' : schema.replace('.js', '')});
        });

        res.render('listing.html', {items : schema_list, title: 'Listagem de Aplicações/Projetos'});
    }

    async read(req, res) {        
        let project_name = req.params.project_name;
        if (! this.isNotEmpty(project_name)) {
            res.redirect('/');
            return;
        }

        try {
            let schema = require(path.resolve('app', 'schemas', project_name));            
            let content = {
                title: 'Aplicação - ' + project_name.toUpperCase(),
                uml_schema: nomnoml.renderSvg(schema)
            };
            res.render('read.html', content);
        }
        catch(err) {
            this.renderErrorPage(res, 'Nenhum projeto passado por parâmetro.' + err);
        }      
    }
}

module.exports = new ProjectController();