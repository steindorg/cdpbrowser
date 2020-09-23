var express = require('express');
var router = express.Router();
var transform = require('/Users/steindorkristinsson/programming/prog_1/node_prog_1/transform.js');
var exec = require('/Users/steindorkristinsson/programming/prog_1/node_prog_1/cdp_express/node_modules/exec/exec.js');

var str_process_type,
    str_process_operation,
    process_object,
    operation_object,
    sound_results,
    infile = '';

router.use(function (req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
/* CDP Express Home page */



router.get('/session', function(req, res, next) {
    res.render('sel-sounds', { message:'Type in a soundfile'} );
    if(infile === ''){
        
    }
    else{
        res.render('process', { message:'Select Transformation Type', infile : infile }	);
    };
});

router.get('/sel-sounds/', function(req, res, next) {
  res.render('sel-sounds', { message:'Type in a soundfile'} );
});

router.post('/sel-sounds/', function(req, res, next) {
    infile = req.params.name;

    res.render('process', { message:'Select Transformation Type'} );
});


/* Process Methods  */
router.get('/session/:process', function(req, res) {
    str_process_type = req.params.process;
    console.log(str_process_type);
    var db = req.db;
    process_object = db.get(str_process_type);
    process_object.find({},function(e,docs){
        var x = docs.info;
        console.log(x);
        //res.send(docs.info);
        res.render('processlist', { process : docs }
        	);
    });
});


/* process info and form */
router.get('/session/:type/:proinfo', function(req, res) {
    str_process_operation = req.params.proinfo;
    
    console.log(str_process_operation);
    
    process_object.findOne({name: str_process_operation},function(e,docs){
        operation_object = docs;
        res.render('processform', { process : docs }
            );
    });
});

router.get('/session//:type/:proinfo/list-del-res/:sound_results', function(req, res) {
    play_result = req.params.sound_results;
    exec('paplay ' + play_result ,function(){});
    //res.render('list-del-res', { sound_results : sound_results, message : 'Sound Results'} );
});

router.post('/session/:type/:proinfo/list-del-res', function(req, res) {
    var url1 = req.params.type;
    var url2 = req.params.proinfo;
    var path = url1 + '/' + url2;
    var parameters = req.body;
    var user_input = [];
    sound_results = [];
    var i = 0;
    
    for (var key in parameters) {
        user_input[0+i] = parameters[key];
        i++;
    }
    var command_string = '';

    sound_results = transform.transform(operation_object.command, user_input);
    console.log(sound_results);


    res.render('list-del-res', { sound_results : sound_results, message : 'Sound Results', path : path } );
});





module.exports = router;


