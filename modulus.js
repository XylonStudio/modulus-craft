
const fs = require('fs');
const args = process.argv;

if (args[2] == 'make:controller') {
    var modelNamecontrollerName;
    args[3].endsWith('Controller') ? controllerName = args[3] : controllerName = args[3] + 'Controller';

    fs.open('app/controllers/' + controllerName + '.php', 'wx', (err, fd) => {
        if (err) {
            if (err.code === 'EEXIST') {
                console.error('Controller already exists');
                return;
            }

            throw err;
        }

        fs.writeFile('app/controllers/' + controllerName + '.php', '<?php\n\nclass ' + controllerName + ' extends Controller\n{\n    /**\n     * This is the default method\n     *\n    */\n    public function index($view = null)\n    {\n        echo "' + controllerName + ' was successfully created!";\n    }\n}', (err) => {
            if (err) throw err;
            console.log(controllerName + ' was successfully created!');
        });
    });
}
else if (args[2] == 'make:model') {
    var modelName = args[3];
    fs.open('app/models/' + modelName + '.php', 'wx', (err, fd) => {
        if (err) {
            if (err.code === 'EEXIST') {
                console.error('Model already exists');
                return;
            }

            throw err;
        }

        fs.writeFile('app/models/' + modelName + '.php', '<?php\n\nuse Illuminate\\Database\\Eloquent\\Model as Eloquent;\n\nclass ' + modelName + ' extends Eloquent\n{\n    \n}', (err) => {
            if (err) throw err;
            console.log(modelName + ' was successfully created!');
        });
    });
}
else if (args[2] == 'make:view') {
    var view = args[3];
    fs.open('resources/views/' + view + '.modulus.php', 'wx', (err, fd) => {
        if (err) {
            if (err.code === 'EEXIST') {
                console.error('View already exists');
                return;
            }

            throw err;
        }

        fs.writeFile('resources/views/' + view + '.modulus.php', '', (err) => {
            if (err) throw err;
            console.log(view + ' was successfully created!');
        });
    });
}
