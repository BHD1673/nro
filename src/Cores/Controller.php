<?php 

namespace Admin\Backend\Cores;

use eftec\bladeone\BladeOne;

class Controller
{   
    public function renderViewClient($view, $data = []) {
        $templatePath = __DIR__ . '/../Views/Client';
        $compiledPath = __DIR__ . '/../../dump';

        try {
            $blade = new BladeOne($templatePath, $compiledPath, BladeONe::MODE_SLOW);
            echo $blade->run($view, $data);
        } catch (\Exception $e) {
            // Handle rendering errors
            echo "Error rendering view: " . $e->getMessage();
        }
    }

    public function renderViewAdmin($view, $data = []) {
        $templatePath = __DIR__ . '/../Views/Admin';
        $compiledPath = __DIR__ . '/../../dump';

        try {
            $blade = new BladeOne($templatePath, $compiledPath);
            echo $blade->run($view, $data);
        } catch (\Exception $e) {
            // Handle rendering errors
            echo "Error rendering view: " . $e->getMessage();
        }
    }
}
