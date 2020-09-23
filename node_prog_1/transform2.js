// TRANSFORM MODULE

var fs = require('fs');
var child_process = require('child_process');
var exec = require('/Users/steindorkristinsson/programming/prog_1/node_prog_1/cdp_express/node_modules/exec/exec.js');
var wstream = fs.createWriteStream('helloworld.sh');




wstream.write('#!/bin/sh\n');
//wstream.write('      \n');
//wstream.write('ls');


//wstream.end();




function transform(command, user_input, infile) {	
	
	//infile = 'yo';
	var parameter_values = [];
	var parameter_count = user_input.length;
	//console.log(parameter_count);
	var iterations;
	var return_arr = []; 
	
	// GET PARAMETER VALUES. RETURNS AN ARRAY
	var a, b, c = ' ';
		
		a = user_input[0];
		b = a.split(' ');
		iterations = b.length;
		console.log('iterations' + iterations);
	for(var i = 0; i <= iterations; i++){
		
		for(var j = 0; j < parameter_count; j++){
			a = user_input[j];
			//console.log('a' + a);
			b = a.split(' ');
			//console.log('b is' +b);
			iterations = b.length;
			c = c +command[j + 4]+ +b[i]+   ' ';
		}
		
		parameter_values[i] = c;
		c = ' ';
	};

	//GET INFILE AND CREATE OUTFILE
	//var infile = user_input[0];	-> command[1] is process
	var outfile = infile + '_' + command[1];	
	
	// Get CDP 1)Type 2)Process  3)MODE  
	var command_to_str = command.splice(0, 3);
	var cdp_process = command_to_str.join(" ");

	console.log('SPLIT ' + infile + 'INTO L/R MONO FILES');
	// SPLIT INFILE(STEREO) INTO L/R MONO FILES
	wstream.write('housekeep chans 2 ' + infile +'.wav'+'\n');
	child_process.exec('housekeep chans 2 ' + infile +'.wav', 
					function(error, stdout, stderr) { 
						console.log(stdout);
                });
	
	console.log('infile is: ' + infile)
	// TRANSFORM SOUNDS
	for(var i = 0; i < iterations; i++){
		nr = i + 1;
		
		console.log('transformation loop ' + i)
		
		console.log(cdp_process +' '+ infile + '_c1.wav ' + outfile +'_'+ nr  +'_c1.wav ' + parameter_values[i]);
		wstream.write(cdp_process +' '+ infile + '_c1.wav ' + outfile +'_'+ nr  +'_c1.wav ' + parameter_values[i]+'\n');
		child_process.exec(cdp_process +' '+ infile + '_c1.wav ' + outfile +'_'+ nr  +'_c1.wav ' + parameter_values[i], 
					function(error, stdout, stderr) { 
						console.log(stdout);
                });
		
		wstream.write(cdp_process +' '+ infile + '_c2.wav ' + outfile +'_'+ nr  +'_c2.wav ' + parameter_values[i]+'\n');
		console.log(cdp_process +' '+ infile + '_c2.wav ' + outfile +'_'+ nr  +'_c2.wav ' + parameter_values[i]);
		child_process.exec(cdp_process +' '+ infile + '_c2.wav ' + outfile +'_'+ nr  +'_c2.wav ' + parameter_values[i], 
					function(error, stdout, stderr) { 
						console.log(stdout);
                });
				
		};

	for(var i = 0; i < iterations; i++){
		nr = i + 1;
		console.log('submix loop ' + i);
		wstream.write('submix interleave ' + outfile +'_'+ nr  +'_c1.wav ' + outfile +'_'+ nr  +'_c2.wav ' +  outfile +'_'+ nr  +'.wav'+'\n');
		console.log('submix interleave ' + outfile +'_'+ nr  +'_c1.wav ' + outfile +'_'+ nr  +'_c2.wav ' +  outfile +'_'+ nr  +'.wav');
		child_process.exec('submix interleave ' + outfile +'_'+ nr  +'_c1.wav ' + outfile +'_'+ nr  +'_c2.wav ' +  outfile +'_'+ nr  +'.wav', 
					function(error, stdout, stderr) { 
						console.log(stdout);

				});
					// Fetch names of resulting soundfiles
					return_arr[i] = outfile +'_'+ nr  +'.wav';
				};

	
	// DELETE MONO FILES
	for(var i = 0; i <= iterations; i++){
		nr = i + 1;
		console.log('rm ' + outfile +'_'+ nr  +'_c1.wav ' );
		wstream.write('rm ' + outfile +'_'+ nr  +'_c1.wav '+'\n');
		child_process.exec('rm ' + outfile +'_'+ nr  +'_c1.wav ' , 
					function(error, stdout, stderr){
					console.log(stdout);
				});
		console.log('rm ' + outfile +'_'+ nr  +'_c2.wav ' );
		wstream.write('rm ' + outfile +'_'+ nr  +'_c2.wav '+'\n');
		child_process.exec('rm ' + outfile +'_'+ nr  +'_c2.wav ' , 
					function(error, stdout, stderr){
					console.log(stdout);
				});
		//exec('rm ' + outfile +'_'+ nr  +'_c2.wav ' , function(err, out, code) {});
	}
	console.log('rm ' + infile + '_c1.wav ');
	wstream.write('rm ' + infile + '_c1.wav '+'\n');
	child_process.exec('rm ' + infile + '_c1.wav ',
					function(error, stdout, stderr){
					console.log(stdout);
				});
	console.log('rm ' + infile + '_c2.wav ');
	wstream.write('rm ' + infile + '_c2.wav '+'\n');
	child_process.exec('rm ' + infile + '_c2.wav ',
					function(error, stdout, stderr){
					console.log(stdout);
				});
	// Node.js 0.10+ emits finish when complete
	wstream.on('finish', function () {
  		console.log('file has been written');
  		fs.chmod('helloworld.sh', 0700, function(err){
 			if(err) throw err;
		});
  		child_process.exec('./helloworld.sh',
						function(error, stdout, stderr){
						console.log(stdout);
					});
		wstream.end();
		return return_arr;
	});
	

};

exports.transform = transform;
