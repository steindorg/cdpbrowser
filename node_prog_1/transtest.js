
var fs = require('fs');
var child_process = require('child_process');
var exec = require('/programming/prog_1/node_prog_1/cdp_express/node_modules/exec/exec.js');
var async = require('async');


function transform(infile, infile2, user_input, process_object) {
	// VARIABLES AND FUNCTIONS
		console.log('function transform');
		var data = ' ';
		data = '#!/bin/sh\n';
		var analysis_values;
		var formant_values;
		var ifana = process_object['ifana'];
		var command = process_object['command'];
		var process_name = process_object['name']
		var NoInputFile = process_object['ifNoInputFile'];
		var mono_or_stereo = process_object['mono_stereo'];
		var analysis_points;
		var return_arr = [];
		var return_arr_count= 0;
		
		function get_iterations(){
			var	a = user_input[0];
			var	b = a.split(' ');
			return	b.length;
		}

		function split_infiles(infile, data){
			for(var i = 0; i < infile.length; i++){
				// Split stereo infile to mono .c1 and .c2
				data = data + 'echo ' + 'CDP Process begins -> Split stereo infile to mono .c1 and .c2' + '\n';
				data = data + 'echo ' + 'housekeep chans 2 ' + infile[i] +'.wav' + '\n';
				data = data + 'housekeep chans 2 ' + infile[i] +'.wav' + '\n';

			};
			return data
		};
		
		function analise_infiles(infile, data, analysis_values){
			var iterations = get_iterations();
			console.log(iterations);
			for(var i = 0; i < infile.length; i++){
				for(var j = 0; j < analysis_values.length; j++){
					if(analysis_values.length > 1){
						analysis_points = analysis_values[j];
					}
					else{
						analysis_points = analysis_values[0];
					}
						data = data + 'echo ' + 'pvoc anal 1 ' + infile[i] + '_c1' + '.wav' + ' ' + infile[i] + '_c1.ana' + ' ' + '-c' + analysis_points + ' ' + '-o3' + '\n'
						data = data + 'pvoc anal 1 ' + infile[i] + '_c1.wav' + ' ' + infile[i] + '_c1.ana' + ' ' + '-c' + analysis_points + ' ' + '-o3' + '\n';
						data = data + 'pvoc anal 1 ' + infile[i] + '_c2.wav' + ' ' + infile[i] + '_c2.ana' + ' ' + '-c' + analysis_points + ' ' + '-o3' + '\n';
				};
			};
			return data;
		};
		
		function extract_formants(infile, data, formant_resolution){
			for(var i = 0; i < infile.length; i++){
				data = data + 'echo ' + 'formants get ' + infile[i] + '_c1.ana' + ' ' + infile[i] + '_c1.for '  + '-p' + formant_resolution + '\n'
				data = data + 'formants get ' + infile[i] + '_c1.ana' + ' ' + infile[i] + '_c1.for ' + '-p' + formant_resolution + '\n';
				data = data + 'formants get ' + infile[i] + '_c2.ana' + ' ' + infile[i] + '_c2.for ' + '-p' + formant_resolution + '\n';
				//data = data + 'rm ' + infile[i] + '_c1.ana' + '\n';
				//data = data + 'rm ' + infile[i] + '_c2.ana' + '\n';
			};
			return data;
		};
		
		function process_soundfiles(infile, infile2, data, input_parameters){
			var cdp_process = command[0] + ' ' + command[1] + ' ' + command[2] + ' ';
			var extention;
			var file_type_l, file_type_r;
			var	iterations = get_iterations();
			if(ifana === true){
				file_type_l = '_c1.ana';
				file_type_r = '_c2.ana';
			}else{
				file_type_l = '_c1.wav';
				file_type_r = '_c2.wav';				
			};
			if(process_object['infile'] > 1){
				extention_l = '_c1' + process_object['extention'];
				extention_r = '_c2' + process_object['extention'];
			
			}else{
				extention_l = '';
				extention_r = '';
				
				infile2 = [''];
			};
			for(var i = 0; i < infile.length; i++){
				var outfile = infile[i] + '_' + process_name;				
				for(var k = 0; k < infile2.length; k++){					
					for(var j = 0; j < iterations; j++){	
						nr = j + 1
						//							infiles.................................................		 outfile result...............................   parameter values						
						data = data + cdp_process + infile[i] + file_type_l + ' ' + infile2[k] + extention_l + ' ' + outfile + infile2[k] + '_' + nr + file_type_l + input_parameters[j] + '\n';
						data = data + cdp_process + infile[i] + file_type_r + ' ' + infile2[k] + extention_r + ' ' + outfile + infile2[k] + '_'+ nr + file_type_r + input_parameters[j] + '\n';
						if(ifana === true){
							data = data + 'pvoc synth ' + outfile + infile2[k] + '_' + nr + file_type_l + ' ' + outfile + infile2[k] + '_' + nr + '_c1.wav' + '\n';
							data = data + 'pvoc synth ' + outfile + infile2[k] + '_' + nr + file_type_r + ' ' + outfile + infile2[k] + '_' + nr + '_c2.wav' + '\n';
						}
						data = data + 'submix interleave ' + outfile + infile2[k] + '_'+ nr + '_c1.wav' + ' ' + outfile + infile2[k] + '_'+ nr + '_c2.wav' + ' '+  outfile + infile2[k] + '_'+ nr + '.wav' + '\n';
						// Fetch names of resulting soundfiles			
						return_arr[return_arr_count] = outfile + infile2[k] + '_'+ nr + '.wav';
						console.log(return_arr[return_arr_count]);
						return_arr_count++;
					};
				
				};
			};
			return data;
		};
		function process_stereoInput(infile, data, input_parameters){
			var cdp_process = command[0] + ' ' + command[1] + ' ' + command[2] + ' ';
			var file_type = '.wav ';;
			var	iterations = get_iterations();
				
			for(var i = 0; i < infile.length; i++){
				var outfile = infile[i] + '_' + process_name;									
					for(var j = 0; j < iterations; j++){	
						nr = j + 1;						
						data = data + cdp_process + infile[i] + file_type + ' ' + outfile + '_' + nr + file_type + input_parameters[j] + '\n';
						// Fetch names of resulting soundfiles			
						return_arr[return_arr_count] = outfile + '_'+ nr + '.wav';
						console.log(return_arr[return_arr_count]);
						return_arr_count++;
					};	
			};
			return data;
		};
		
		function generate_waveform(user_input, data){
			var mode_names = ['sine', 'squere', 'saw', 'rampsaw' ];
			var parameter_values = [];
			var userinp_temp;
			var temp_iterations;
			var temp_iteration_arr  = [];
			var temp_max = 0;
			var out = []
			for(var i = 0; i < user_input.length; i++){
				userinp_temp = user_input[i];
				console.log('so we are in the function userinp_temp' + userinp_temp);
				temp_iterations	= userinp_temp.split(' ');
				console.log('temp_iterations' + temp_iterations);
				temp_iteration_arr[i] = temp_iterations.length;
				if(temp_iteration_arr[i] > temp_max){
					temp_max = temp_iteration_arr[i]
				};
			};
			console.log('temp_max' + temp_max);
			var	a;
			var	b;
			var	iterations = temp_max;
			var c = ' ';
			var input_parameter_count;

			input_parameter_count = user_input.length;
			
			for(var i = 0; i < iterations; i++){
					
				for(var j = 0; j < user_input.length; j++){					
					a = user_input[j];										
					b = a.split(' ');					
					
					if(j === 0){
						if(b.length > 1){


						};

						var _iftemp;
						_iftempt = user_input[2];
						var freq = _iftempt.split(' ');
						var mode = b[i];
						console.log(mode);
						out[i] = mode_names[mode - 1]+ '_' + freq[i]+ '.wav';
						c = c + mode + ' ' + mode_names[mode - 1]+ '_' + freq[i] + ' 44100 ' + '2' + ' ' ;
					}
					if(j === 1){ 
						c = c + b[i] + ' '
					};

					if(j === 2){
						c = c + b[i] + ' ';
					}
					if(j === 3){
						c = c + '-a' + b[i] + ' ' + '-t4096 ' + '-f16';
					}
				};		
				parameter_values[i] = c ;
				c = ' ';
			};
			
			for(var i = 0; i < iterations; i++){
				data = data + 'synth ' + 'wave ' + parameter_values[i] + '\n';
				// Fetch names of resulting soundfiles			
				return_arr[return_arr_count] = out[i];
				console.log(return_arr[return_arr_count]);
				return_arr_count++;
			};
			console.log(data);
		
			return data;
		};
		
		
		function remove_leftovers(infile, data){
			data = data + 'rm ' + '*.ana' + '\n';
			data = data + 'rm ' + '*c1.wav' + '\n';
			data = data + 'rm ' + '*c2.wav' + '\n';		
			data = data + 'rm ' + '*c1.for' + '\n';
			data = data + 'rm ' + '*c2.for' + '\n';
			return data;
		};
		
		function order_param_values(user_input){
			var parameter_values = [];
			var	a = user_input[0];
			var	b = a.split(' ');
			var	iterations = b.length;
			var c = ' ';
			var input_parameter_count;
			if(ifana === true){				
				input_parameter_count = user_input.length - 1;
				if(process_object['extention'] === '.for'){
					input_parameter_count = user_input.length - 2;
				};				
			}else{
				input_parameter_count = user_input.length;
			};			
			for(var i = 0; i < iterations; i++){

				for(var j = 0; j < input_parameter_count; j++){					
					a = user_input[j];										
					b = a.split(' ');					
					c = c + command[j + 4] + b[i] + ' ';			
				};		
				if(process_name === 'reverb'){
					c = c + ' ' + 'reverb.txt';
				};
				parameter_values[i] = c;
				c = ' ';
			};
			return parameter_values;
		};
		function order_form_values(user_input, formant_values){
			var a;
			a = user_input[user_input.length - 2];
			formant_values = a.split(' ');
			console.log('formant values ' + formant_values);
	
			return formant_values;
		};
		

		function order_ana_values(user_input, analysis_values){
			var a;
			a = user_input[user_input.length - 1];
			analysis_values = a.split(' ');
			console.log('analysis_values' + analysis_values);
	
			return analysis_values;
		};
		
		//  MAIN  ------------------------------------------------------------------------------
		// Get user input
		var input_parameters = order_param_values(user_input);
		
		if(NoInputFile === true){
			data = generate_waveform(user_input, data);
		};
		
		if(NoInputFile === false && mono_or_stereo === 'mono'){			
			// Split soundfiles to mono for processing
			data = split_infiles(infile, data);			
			// Analize .wav		
			if(process_object['ifana'] === true){
				analysis_points = order_ana_values(user_input, analysis_values);
				data = analise_infiles(infile, data, analysis_points);
				if(process_object['extention'] === '.for'){
					console.log('process_object[extention] === .for) we are in the if sentence of formants and we will extract')
					formant_values = order_form_values(user_input, formant_values);
					console.log('formant values are ' + formant_values);
					data = extract_formants(infile, data, formant_values);
				};
			};									
			// Analize infile2
			if(process_object['infile'] > 1){				
				data = split_infiles(infile2, data);
				if(process_object['ifana'] === true){
					analysis_points = order_ana_values(user_input, analysis_values);
					data = analise_infiles(infile2, data, analysis_points);
				};
				if(process_object['extention'] === '.for'){
					formant_values = order_form_values(user_input, formant_values)
					data = extract_formants(infile2, data,formant_values);
				};
			};
			// Proceess soundfiles 
			data = process_soundfiles(infile, infile2, data, input_parameters);
			
			// Delete mono files and leftovers 
			data = remove_leftovers(infile, data);
		};

		if(mono_or_stereo === 'stereo'){
				data = process_stereoInput(infile, data, input_parameters)
				data = remove_leftovers(infile, data);
			};

		console.log(data);

		// save data and create a bash script 
		console.log('save script');
		fs.writeFile('transform_script.sh', data, function (err) {
	  		if (err) return console.log(err);
	  
		});

		// Make file executable
	  	console.log('make script executable');
	  	fs.chmod('transform_script.sh', 0700, function(err){
	 		if(err) throw err;
		});

	  	console.log('file has been written');

	  	return return_arr
};

exports.transform = transform;



