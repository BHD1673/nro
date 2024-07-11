<?php 

namespace Admin\Backend\Cores;

class Helper
{
    public static function debug($data) {
        echo '<pre>';

        print_r($data);

        die;
    }

    public static function slugify(string $string): string
    {
        // Convert characters with diacritics to their ASCII equivalents
        $string = transliterator_transliterate('Any-Latin; Latin-ASCII;', $string);
        // Replace non-alphanumeric characters with hyphens
        $string = preg_replace('/[^A-Za-z0-9-]+/', '-', $string);
        // Convert to lowercase and trim hyphens from the ends
        return strtolower(trim($string, '-'));
    }
    
}