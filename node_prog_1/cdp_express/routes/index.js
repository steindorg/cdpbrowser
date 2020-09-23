var express = require('express');
var router = express.Router();
var transform = require('/programming/prog_1/node_prog_1/transform.js');
var transtest = require('/programming/prog_1/node_prog_1/transtest.js');
var exec = require('/programming/prog_1/node_prog_1/cdp_express/node_modules/exec/exec.js');
var child_process = require('child_process');
var finder = require('findit')(process.argv[2] || '.');


var operation_object,
    sound_results,
    infile = '',
    infile_multy = [];
    second_infile = '',
    second_infile_Arr = [];
    second_infile_multy = []; 
/* CDP Express Home page */

//Home
router.get('/', function(req, res, next) {
       
                child_process.exec('rm transform_script.sh',
                        function(error, stdout, stderr){
                        console.log(stdout);
                });
       
        res.render('index', { message:'Select Transformation Type'}   );    
});
// Transform URL
router.get('/transform', function(req, res) {
    if(infile === ''){
        console.log('here we go with an empty infile');
        res.render('sel-sounds', { message: 'Choose files in the navigation bar menu', infile:infile});
    }
    else{
        res.render('process_list', { message: 'Select Transformation Type', infile: infile} );
    }
});

// Input List 
router.get('/sel-sounds', function(req, res) {
        if(infile === ''){
            console.log('here we go with an empty infile');
            res.render('sel-sounds', { message: 'Choose files in the navigation bar menu', infile:infile});
        }
        else{
            res.render('sel-sounds', { infile: infile, message: 'Sounds for transformation'});
        }
});

//remove elementfrominputlist
router.get('/sel-sounds/:sounds/delete', function(req, res){
        var sound = req.params.sounds;  
        infile.splice(infile.indexOf(sound), 1);
        infile_multy.splice(infile_multy.indexOf(sound.substring(0, sound.length - 4)), 1);
        res.redirect('/sel-sounds');
});

// Select sounds
router.post('/sel-sounds', function(req, res) {
    console.log('we are in sel-sounds and infiles are: ' + infile);
    infile = req.body.infile;
    infile_multy = [];
    var i = 0;
    //Sort userinput
    if(typeof infile === 'object'){
        for (var key in infile) {
            infile_multy[i] = infile[i].substring(0, infile[i].length - 4);
            i++;
        } 
    }else{
        infile_multy[0] = infile[0];
        temp = infile;
        infile = [];
        infile[0] = temp;
        infile_multy[0] = infile[0].substring(0, infile[i].length - 4);       
    }
    console.log('what is infile ' + infile);
    res.render('sel-sounds', { message:'Select Transformation Type', infile : infile} );
});

// Second Infile Input List
router.get('/second_infile', function(req, res) {
        if(second_infile === ''){
            console.log('here we go with an empty infile');
            res.render('second_infile', { message: 'Choose files in the navigation bar menu', second_infile: second_infile});
        }
        else{
            res.render('second_infile', { second_infile: second_infile, message: 'Sounds for transformation'});
        }
});

// Second Infile Input List
router.post('/second_infile', function(req, res) {
    console.log('we are in second_infile and second_infile are: ' + second_infile);
    second_infile = req.body.second_infile;
    second_infile_multy = [];
    var i = 0;
    //Sort userinput
    if(typeof second_infile === 'object'){
        for (var key in second_infile) {
            second_infile_multy[i] = second_infile[i].substring(0, second_infile[i].length - 4);
            i++;
        } 

    }else{
        second_infile_multy[0] = second_infile[0];
        temp = second_infile;
        second_infile = [];
        second_infile[0] = temp;
        second_infile_multy[0] = second_infile[0].substring(0, second_infile[i].length - 4);       
    }

    console.log('what is second_infile ' + second_infile);
    res.render('second_infile', { message:'Select Transformation Type', second_infile: second_infile} );
});

//remove elementfrominfile2 list
router.get('/second_infile/:sounds/delete', function(req, res){
        var sound = req.params.sounds;
        second_infile.splice(second_infile.indexOf(sound), 1);
        second_infile_multy.splice(second_infile_multy.indexOf(sound), 1);
        res.redirect('/second_infile');
});


/* process form */
router.get('/transform/:type/:proinfo', function(req, res) {
    console.log('we are in process form and infile_multy is: ' + infile_multy);
    var db = req.db;
    collection = db.get(req.params.type);
    console.log('collection is ' + collection)
    collection_process = req.params.proinfo;
    collection.findOne({name: req.params.proinfo},function(e,docs){
        //Global var that captures instance of collection process
        operation_object = docs;
        
        res.render('processform', { process : docs, name: collection_process, infile: infile }
            );
    });
});

router.post('/transform/:type/:proinfo/execute_script', function(req, res) {
    console.log('we have pressed the submitt button and now we grap the form data');
    
    var url1 = req.params.type;
    var url2 = req.params.proinfo;
    var path = url1 + '/' + url2;
    
    //Get inputs
    var parameters = req.body;
    var user_input = [];
    sound_results = [];
    var i = 0;    
    for (var key in parameters) {
        user_input[0+i] = parameters[key];
        i++;
    }

    if(operation_object.infile > 1 && second_infile_multy.length === 0){
        res.render('second_infile', { second_infile: second_infile, message: 'You need a second infile for this process so choose one fuckface'});
    }
    else{
        sound_results = transtest.transform(infile_multy, second_infile_multy, user_input, operation_object);
        console.log('return from module transform is ' + sound_results);
     /*  
    sound_results = transform.transform(operation_object.command, user_input, infile_multy, second_infile_multy, operation_object.ifana, operation_object.extention);
    */  
        child_process.exec('./transform_script.sh', function(){
            console.log('executing script.sh');
            child_process.exec('./transform_script.sh', function(error, stdout, stderr) {
                console.log(stdout);
            });
        });
            res.redirect('/results');
    };

});

router.get('/transform/:type/:proinfo/execute_script', function(req, res) {
    var url1 = req.params.type;
    var url2 = req.params.proinfo;
    var path = url1 + '/' + url2;
    console.log('get execute script sound results' + sound_results);
    res.render('results', { sound_results : sound_results, message : 'Sound Results', path : path } );
});


router.get('/results', function(req, res) {
    var url1 = req.params.type;
    var url2 = req.params.proinfo;
    var path = url1 + '/' + url2;
    res.render('results', { sound_results : sound_results, message : 'Sound Results', path : path } );

});

router.get('/results/:sound', function(req, res) {
    var remove = req.params.sound;
    sound_results.splice(sound_results.indexOf(remove), 1)
    child_process.exec(' ', function(){
            console.log('rm ' + remove);
            child_process.exec('rm ' + remove, function(error, stdout, stderr) {
                console.log(stdout);
            });
        });

    res.redirect('/results');

});

router.get('/results/:sound/toinfile', function(req, res) {
    
    console.log('test inside results toinfile what infile is = ' + infile_multy)
    var sound = req.params.sound;
        infile_multy.push(sound.substring(0, sound.length - 4));
        infile.push(sound);
    console.log('test what is infile after push = ')
    res.redirect('/results');

});

router.get('/results/:sound/toinfile2', function(req, res) {
    var sound = req.params.sound;
        second_infile_multy.push(sound.substring(0, sound.length - 4));
        second_infile.push(sound);
    res.redirect('/results');

});










module.exports = router;


