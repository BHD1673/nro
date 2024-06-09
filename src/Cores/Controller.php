<?php 

namespace Admin\Backend\Cores;

use eftec\bladeone\BladeOne;

class Controllers
{   
    public function renderView($view, $data = []) {
        $templatePath = __DIR__ . '/../Views';
        $compiledPath = __DIR__ . '/../Views/cache';

        try {
            $blade = new BladeOne($templatePath, $compiledPath);
            echo $blade->run($view, $data);
        } catch (\Exception $e) {
            // Handle rendering errors
            echo "Error rendering view: " . $e->getMessage();
        }
    }
}