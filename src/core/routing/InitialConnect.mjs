import express from 'express';
import Routes from './../../../Approutes.json' assert {type: "json"};
import swaggerUi from 'swagger-ui-express';
import SwaggerDocument from '../../../swagger.json' assert {type: "json"};

const app = express(); 

const port = 3000;

export class App
{
    constructor(port)
    {
        this.port = port;
    }

    connect()
    {   
        app.use(
            '/api-docs',
            swaggerUi.serve, 
            swaggerUi.setup(SwaggerDocument)
        );
        app.listen(port, ()=>console.log("Listening on Port: " + port));
        this.registerAppRoutes();
        this.registerApiRoutes();
    }

    registerAppRoutes()
    {
        for (const route of Routes.routes) {
            app.get(`${route.route}`, (req, res) => res.sendFile(`${route.pathToHtml}`, {root: "./"}));
        }

        app.get('*', function(req, res){
            res.sendFile("/app/main.html", {root: "./"});
        });
    }

    registerApiRoutes()
    {

    }

}


// TODO:
// - adding generator for API routes
// - adding generator for Swagger UI json in Services maybe
// - Create Changelog or something similar to keep track of changes to the API
// - rewrite the API to be more like a minimal API that can be called in the Component

