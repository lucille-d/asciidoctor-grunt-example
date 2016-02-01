module.exports = function (grunt) {
    grunt.initConfig({
        copy: {
            doc: {
                files: [{
                    expand: true,
                    cwd: 'doc',
                    src: ['images/**', '*.css'],
                    dest:'build/doc'
                }]
            }
        },
        asciidoctor: {
            default_options: {
                options: {
                    header_footer: true,
                    safeMode: 'safe',
                    attributes: 'linkcss'
                },
                files: {
                    'build/doc/index.html': ['doc/index.adoc']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-asciidoctor');

    grunt.registerTask('default', ['asciidoctor', 'copy:doc']);
};
