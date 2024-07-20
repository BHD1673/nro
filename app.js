const fs = require('fs');
const path = require('path');

// Define the directories for JS and CSS files
const jsDir = 'assets/client/js';
const cssDir = 'assets/client/css';

// Function to generate HTML tags for files in a directory
function generateHtmlTags(dir, ext, tagTemplate) {
    let tags = '';
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        if (path.extname(file).toLowerCase() === ext) {
            tags += tagTemplate.replace('FILENAME', file) + '\n';
        }
    });
    return tags;
}

// Generate the <script> tags for JS files
const jsTags = generateHtmlTags(jsDir, '.js', '<script src="js/FILENAME"></script>');

// Generate the <link> tags for CSS files
const cssTags = generateHtmlTags(cssDir, '.css', '<link rel="stylesheet" href="css/FILENAME">');

// Print the generated tags to the console
console.log('CSS Tags:\n', cssTags);
console.log('JS Tags:\n', jsTags);
