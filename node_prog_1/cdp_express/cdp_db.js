//use cdp_express;
db.dropDatabase();
//filter lohi mode infile outfile attenuation pass-band stop-band [-sprescale]

db.grain.insert({
	name			: 'reorder',
	type			: 'grain',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 6,
	parameter_file	: '.brk',
	command 		: ['grain','reorder',' ','infile',' ','-b','-l','-h','-t','-x'],
	range			: [0,1, 0,1, 0,1, 0,1, 0,1, 0,1],
	infile 			: 1,
	ifana			: false,
	extention 		: '.wav',
	time_vary		: [true, true, true, true, true, false],
	info 			: ['Grain Reorder: This is so much fun. Comparable with DISTORT SHUFFLE, GRAIN REORDER provides another way for controlled fragmentation. The illustration code used in the Usage causes a fair amount of fragmentation. But a code such as abcdefg:b steps through 7 grains in their normal sequence, then goes back to the 2nd grain and proceeds to the 8th etc., moving gradually through the whole infile in this way. The code gfedcba:b does the same thing, but places the grains in reverse order. ', 
					'Code: such as adb:c indicating how grains are to be reordered',						 
					'Length: maximum time between grains (Range: 1 to duration of infile)',
					'Gate: Required signal level for grain to be seen (Range: 0 to 1; the Default is 0.3)',
					'Minhole: minimum duration of holes between grains (Minimum allowed value is 0.032 – the Default)',	
					'Winsize: gate level tracks the signal level, as found with a window size of winsize milliseconds (Range: 0.0 to duration of infile)',
					'Ignore the last grain in the source']
	});
//grain reorder infile outfile code [-blen] [-lgate] [-hminhole] [-twinsize] [-x]
db.filter.insert({
	name			: 'lohi',
	type			: 'filter',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 4,
	parameter_file	: '.brk',
	command 		:['filter','lohi','2','infile',' ',' ',' ','-s'],
	range			:[0.1,10000, 0.1,10000.0, 10,1000, 10 ,10000, 0, 0],
	infile 			: 1,
	ifana			: false,
	extention 		: '.wav',
	time_vary		: [true, true, true, true, true, false],
	info 			: ['Filter Cutt off Lo/Hi ', 
					'Attenuation - gain reduction of the filter, in dB (Range: 0 to -96)',						 
					'Pass-band -(Midi) last pitch to be passed by the filter',
					'Stop-band -(Midi) first pitch to be stopped by the filter',
					'prescale - apply gain on the input to the filtering process – avoid overflows (Range: 0.005 to 200.0)']
	});

db.filter.insert({
	name			: 'lohi',
	type			: 'filter',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 4,
	parameter_file	: '.brk',
	command 		:['filter','lohi','2','infile',' ',' ',' ','-s'],
	range			:[0.1,10000, 0.1,10000.0, 10,1000, 10 ,10000, 0, 0],
	infile 			: 1,
	ifana			: false,
	extention 		: '.wav',
	time_vary		: [true, true, true, true, true, false],
	info 			: ['Filter Cutt off Lo/Hi ', 
					'Attenuation - gain reduction of the filter, in dB (Range: 0 to -96)',						 
					'Pass-band -(Midi) last pitch to be passed by the filter',
					'Stop-band -(Midi) first pitch to be stopped by the filter',
					'prescale - apply gain on the input to the filtering process – avoid overflows (Range: 0.005 to 200.0)']
	});

db.filter.insert({
	name			: 'bank_m1',
	type			: 'filter',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 5,
	parameter_file	: '.brk',
	command 		:['filter','bank','1','infile',' ',' ',' ',' ','-s'],
	range			:[0.1,10000, 0.1,10000.0, 10,1000, 10 ,10000, 0, 0],
	infile 			: 1,
	ifana			: false,
	extention 		: '.wav',
	time_vary		: [true, true, true, true, false, false],
	info 			: ['Bank of filters, with time-varying Q. Harmonic_series ', 
					'Tightness of filters (Range: 0.00100 <= Q < 10000) – the higher the value the more tightly the filter is focused on the centre frequency of that filter.',						 
					'Overall gain (Range: 0.00100 to 10000.0)',
					'Low frequency limit of filters (Range: 10 to sample_rate/3)',
					'High frequency limit of filters (Range: lofrq+ to sample_rate/3)param',
					'Random scatter of filter frequencies (Range: 0 to 1; the Default is 0)']
	});

db.filter.insert({
	name			: 'bank_m2',
	type			: 'filter',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 5,
	parameter_file	: '.brk',
	command 		:['filter','bank','2','infile',' ',' ',' ',' ','-s'],
	range			:[0.1,10000, 0.1,10000.0, 10,1000, 10 ,10000, 0, 0],
	infile 			: 1,
	ifana			: false,
	extention 		: '.wav',
	time_vary		: [true, true, true, true, false, false],
	info 			: ['Alternate harmonics: Every other harmonic is omitted: the odd numbered partials are retained. The resulting sound will probably sound more hollow. ', 
					'Tightness of filters (Range: 0.00100 <= Q < 10000) – the higher the value the more tightly the filter is focused on the centre frequency of that filter.',						 
					'Overall gain (Range: 0.00100 to 10000.0)',
					'Low frequency limit of filters (Range: 10 to sample_rate/3)',
					'High frequency limit of filters (Range: lofrq+ to sample_rate/3)param',
					'Random scatter of filter frequencies (Range: 0 to 1; the Default is 0)']
	});

db.filter.insert({
	name			: 'bank_m3',
	type			: 'filter',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 5,
	parameter_file	: '.brk',
	command 		:['filter','bank','3','infile',' ',' ',' ',' ','-s'],
	range			:[0.1,10000, 0.1,10000.0, 10,1000, 10 ,10000, 0, 0],
	infile 			: 1,
	ifana			: false,
	extention 		: '.wav',
	time_vary		: [true, true, true, true, false, false],
	info 			: ['The subharmonic series is the intervallic inverse of the harmonic series. Thus the departure from triadic-type intervals increases as the series descends. The resulting sound has a deeper tone and is somewhat hollow and somewhat inharmonic ', 
					'Tightness of filters (Range: 0.00100 <= Q < 10000) – the higher the value the more tightly the filter is focused on the centre frequency of that filter.',						 
					'Overall gain (Range: 0.00100 to 10000.0)',
					'Low frequency limit of filters (Range: 10 to sample_rate/3)',
					'High frequency limit of filters (Range: lofrq+ to sample_rate/3)param',
					'Random scatter of filter frequencies (Range: 0 to 1; the Default is 0)']
	});

db.filter.insert({
	name			: 'bank_m4',
	type			: 'filter',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 6,
	parameter_file	: '.brk',
	command 		:['filter','bank','4','infile',' ',' ',' ',' ',' ','-s'],
	range			:[0.1,10000, 0.1,10000.0, 10,1000, 10 ,10000, 0, 0, 0, 0],
	infile 			: 1,
	ifana			: false,
	extention 		: '.wav',
	time_vary		: [true, true, true, true, false, false, false],
	info 			: ['Offset in Hz is added to each harmonic. This will displace them so that they will no longer be exact multiples of the fundamental. This means that the cycles of the waveforms no longer line up at nodes, which introduces an inharmonic dimension into the sound, heard as an increase in timbral components. ', 
					'Tightness of filters (Range: 0.00100 <= Q < 10000) – the higher the value the more tightly the filter is focused on the centre frequency of that filter.',						 
					'Overall gain (Range: 0.00100 to 10000.0)',
					'Low frequency limit of filters (Range: 10 to sample_rate/3)',
					'High frequency limit of filters (Range: lofrq+ to sample_rate/3)param',
					'Offset in Hz',
					'Random scatter of filter frequencies (Range: 0 to 1; the Default is 0)']
	});

db.filter.insert({
	name			: 'bank_m5',
	type			: 'filter',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 6,
	parameter_file	: '.brk',
	command 		:['filter','bank','5','infile',' ',' ',' ',' ',' ','-s'],
	range			:[0.1,10000, 0.1,10000.0, 10,1000, 10 ,10000, 0, 0, 0, 0],
	infile 			: 1,
	ifana			: false,
	extention 		: '.wav',
	time_vary		: [true, true, true, true, false, false, false],
	info 			: ['Here we depart from the harmonic series and simply divide up the specified frequency range into an equal number filters: how many is specified by the user with param. The first effect this equal spacing will have is to create inharmonic (rather than integer multiple) relationships between the partials. A low number of filters will produce an open sound, and a high number of filters will produce a denser, richer sound. These might be very interesting sounds to timestretch ', 
					'Tightness of filters (Range: 0.00100 <= Q < 10000) – the higher the value the more tightly the filter is focused on the centre frequency of that filter.',						 
					'Overall gain (Range: 0.00100 to 10000.0)',
					'Low frequency limit of filters (Range: 10 to sample_rate/3)',
					'High frequency limit of filters (Range: lofrq+ to sample_rate/3)param',
					'Number of filters',
					'Random scatter of filter frequencies (Range: 0 to 1; the Default is 0)']
	});

db.filter.insert({
	name			: 'bank_m6',
	type			: 'filter',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 6,
	parameter_file	: '.brk',
	command 		:['filter','bank','6','infile',' ',' ',' ',' ',' ','-s'],
	range			:[0.1,10000, 0.1,10000.0, 10,1000, 10 ,10000, 0, 0, 0, 0],
	infile 			: 1,
	ifana			: false,
	extention 		: '.wav',
	time_vary		: [true, true, true, true, false, false, false],
	info 			: ['Bank of filters, with time-varying Q. Semitones interval ', 
					'Tightness of filters (Range: 0.00100 <= Q < 10000) – the higher the value the more tightly the filter is focused on the centre frequency of that filter.',						 
					'Overall gain (Range: 0.00100 to 10000.0)',
					'Low frequency limit of filters (Range: 10 to sample_rate/3)',
					'High frequency limit of filters (Range: lofrq+ to sample_rate/3)param',
					'Number of semitones in the interval',
					'Random scatter of filter frequencies (Range: 0 to 1; the Default is 0)']
	});

db.filter.insert({
	name			: 'phasing',
	type			: 'filter',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 3,
	parameter_file	: '.brk',
	command 		:['filter','phasing','1','infile',' ',' ','-s'],
	range			:[0.1,10000, 0.1,10000.0, 10,1000],
	infile 			: 1,
	ifana			: false,
	extention 		: '.wav',
	time_vary		: [true, true, false],
	info 			: ['Phase shift sound: The phasing effect is a kind of sweeping band passing through the sound, such as is sometimes heard when aeroplanes fly overhead, and is much used in popular music. ', 
					'gain: Amplitude adjustment (Range: -1.0 to 1.0)',						 
					'Delay: Time in milliseconds between return of delayed material (Range: 0.045 to 1644.35 ms)',
					'prescale: scale gain on the input to the filtering process (Range: 0.0 to 1.0; the Default is 1.0)']
	});

db.filter.insert({
	name			: 'sweeping_Band',
	type			: 'filter',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 6,
	parameter_file	: '.brk',
	command 		:['filter','sweeping','3','infile',' ',' ',' ',' ',' ','-p'],
	range			:[0.1,10000, 0.1,1000, 10,1000, 10,1000, 10,1000, 10,1000],
	infile 			: 1,
	ifana			: false,
	extention 		: '.wav',
	time_vary		: [false, false, true, false, true, false],
	info 			: ['Filter whose focus-frequency sweeps over a range of frequencies. With acuity less than 0.1 (tight) and a sweepfrq less than 0.5 (slow), one can produce wah-wah effects. Sometimes it may be useful to cut only a segment of these timbrally modulating glissandi for use as a separate soundfile. With sweep frequencies of, for example, 20 or 100, and perhaps a wider acuity, one can produce fluttering effects, the wider the acuity, the looser the flutter/flapping effect. ', 
					'Acuity – tightness of the filter (Range: 0.000100 to 1.0) Smaller values give a tighter filter.',						 
					'Gain – overall gain on output (Range: 0.001000 to 10000.0). Rule of thumb: If acuity = (1/3)-to-power-n, gain = (2/3)-to-power-n.',
					'Lofrq – lowest frequency to sweep to (Range: 10.0 to sample_rate/2)',
					'Hifrq – highest frequency to sweep to (Range: 10.0 to sample_rate/2)',
					'Sweepfrq – frequency of the sweep itself (Range: 0.0 to 200; the Default is infile_duration/2): For example, to sweep once over the time of the soundfile, set sweepfrq to infile_duration/2 and set phase to 0 (upsweep) or 0.5 (downsweep), ',
					'Phase – start position of the sweep (Range: 0 to 1; the Default is 0.25 – midway along the rising curve) Imagine a series of points along a rising and falling curve. The curve begins at 0 (= lofrq) rises to 0.5 (= hifrq), and moves on to 1, falling back to lofrq. The phase value identifies where along this curve the sweep shape begins.']
	});

db.filter.insert({
	name			: 'sweeping_Lo',
	type			: 'filter',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 6,
	parameter_file	: '.brk',
	command 		:['filter','sweeping','2','infile',' ',' ',' ',' ',' ','-p'],
	range			:[0.1,10000, 0.1,1000, 10,1000, 10,1000, 10,1000, 10,1000],
	infile 			: 1,
	ifana			: false,
	extention 		: '.wav',
	time_vary		: [false, false, true, false, true, false],
	info 			: ['Filter whose focus-frequency sweeps over a range of frequencies. With acuity less than 0.1 (tight) and a sweepfrq less than 0.5 (slow), one can produce wah-wah effects. Sometimes it may be useful to cut only a segment of these timbrally modulating glissandi for use as a separate soundfile. With sweep frequencies of, for example, 20 or 100, and perhaps a wider acuity, one can produce fluttering effects, the wider the acuity, the looser the flutter/flapping effect. ', 
					'Acuity – tightness of the filter (Range: 0.000100 to 1.0) Smaller values give a tighter filter.',						 
					'Gain – overall gain on output (Range: 0.001000 to 10000.0). Rule of thumb: If acuity = (1/3)-to-power-n, gain = (2/3)-to-power-n.',
					'Lofrq – lowest frequency to sweep to (Range: 10.0 to sample_rate/2)',
					'Hifrq – highest frequency to sweep to (Range: 10.0 to sample_rate/2)',
					'Sweepfrq – frequency of the sweep itself (Range: 0.0 to 200; the Default is infile_duration/2): For example, to sweep once over the time of the soundfile, set sweepfrq to infile_duration/2 and set phase to 0 (upsweep) or 0.5 (downsweep), ',
					'Phase – start position of the sweep (Range: 0 to 1; the Default is 0.25 – midway along the rising curve) Imagine a series of points along a rising and falling curve. The curve begins at 0 (= lofrq) rises to 0.5 (= hifrq), and moves on to 1, falling back to lofrq. The phase value identifies where along this curve the sweep shape begins.']
	});


// infile outfile Q gain lofrq hifrq [-sscat] [-d]
db.distort.insert({
	name			: 'average',
	type			: 'distort',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 3,
	parameter_file	: '.brk',
	command 		:['distort','average','','infile','','-m','-s'],
	range			:[1,100,0.1,100,0,100],
	infile 			: 1,
	ifana			: false,
	extention 		: '.wav',
	time_vary		: [false, false, false],
	info 			: ['AVERAGE THE WAVESHAPE OVER N WAVECYCLES', 
					'CYCLECNT is number of cycles to average over ( > 1)',						 
					'MAXWAVELEN is max permissible wavelength in seconds. (default 0.50)',
					'SKIPCYCLES: (integer) is no. of wavecycles to skip at start of file']
	});
//distort interpolate infile outfile multiplier [-sskipcycles]
db.distort.insert({
	name			: 'interpolate',
	type			: 'distort',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 2,
	parameter_file	: '.brk',
	command 		:['distort','interpolate',' ','infile',' ','-s'],
	range			:[1,1000, 0,32],
	infile 			: 1,
	ifana			: false,
	extention 		: '.wav',
	time_vary		: [false, false],
	info 			: ['DISTORT INTERPOLATE: With this process, the shape of a wavecycle is transformed into that of the next over multiplier repetitions. Note that this is waveshape-based interpolation, not a spectral interpolation, and that the length of the wavecycle is also transformed by the process. The effect of the transformation is drastic, leading to a strongly granular outfile. The length of the outfile increases in step with the value of multiplier, as does the apparent pitchiness. The interpolation process adds a modulatory quality to the output, so that the successive wavecycles gliss and bend as they flow into one another. Even so, as multiplier increases, the perception of separate grains, i.e., wavecycles increases. A value of 32, for example, changes the sound to a strange stream of modulating tones.', 
					'Multiplier',						 
					'SKIPCYCLES: (integer) is no. of wavecycles to skip at start of file']
	});
//distort omit infile outfile A B
db.distort.insert({
	name			: 'omit',
	type			: 'distort',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 2,
	parameter_file	: '.brk',
	command 		:['distort','omit',' ','infile',' ',' '],
	range			:[1,1024, 0,512],
	infile 			: 1,
	ifana			: false,
	extention 		: '.wav',
	time_vary		: [false, false],
	info 			: ['DISTORT INTERPOLATE: With this process, the shape of a wavecycle is transformed into that of the next over multiplier repetitions. Note that this is waveshape-based interpolation, not a spectral interpolation, and that the length of the wavecycle is also transformed by the process. The effect of the transformation is drastic, leading to a strongly granular outfile. The length of the outfile increases in step with the value of multiplier, as does the apparent pitchiness. The interpolation process adds a modulatory quality to the output, so that the successive wavecycles gliss and bend as they flow into one another. Even so, as multiplier increases, the perception of separate grains, i.e., wavecycles increases. A value of 32, for example, changes the sound to a strange stream of modulating tones.', 
					'A – number of wavecycles to omit',						 
					'B – size of group of wavecycles out of which to omit A wavecycles ']
	});
//distort pitch infile outfile octvary [-ccyclelen] [-sskipcycles] 
db.distort.insert({
	name			: 'pitch',
	type			: 'distort',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 3,
	parameter_file	: '.brk',
	command 		:['distort','pitch',' ','infile',' ', '-c','-s'],
	range			:[0.0,8.0, 1,512, 0,256],
	infile 			: 1,
	ifana			: false,
	extention 		: '.wav',
	time_vary		: [false, false],
	info 			: ['Pitchwarp wavecycles of sound. The random up/down movement of the wavecycles within the total octvary range produces a great deal of bending of the sound, especially if the original alters its pitch a good deal. It is better, therefore, to start with relatively small values for octvary – e.g., less than 1 – so that you start to use this function with some degree of control over the results. The full power of DISTORT PITCH doesnt really come into its own until time-varying parameters are used, especially for cyclecnt. Large values for the latter will serve to slow down the rate of change.', 
					'Octvary: maximum possible transposition up or down in (fractions of) octaves (Range > 0.0 to 8.0). Note that the pitch of each wavecycle is varied by a random amount within the range of octvary octaves up to octvary octaves down: i.e., the value for octvary covers a total up/down range of 2 * octvary.',						 
					'Cyclelen: Max no. cycles possible between generation of transpos vals (>1) (Default : 64) ',
					'SKIPCYCLES: (integer) is no. of wavecycles to skip at start of file']
	});
//distort pulsed 1 infile outfile stime dur frq frand trand arand transp tranrand [-s -e]
db.distort.insert({
	name			: 'pulsed_m1',
	type			: 'distort',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 10,
	parameter_file	: '.brk',
	command 		:['distort','pulsed','1','infile',' ',' ',' ',' ',' ',' ',' ',' ','-s','-e'],
	range			:[0.0,8.0, 1,512, 0,256],
	infile 			: 1,
	ifana			: false,
	extention 		: '.wav',
	time_vary		: [false, false, false, false, false, false, false, false, false],
	info 			: ['Imposed regular pulsations on a sound. Distort a sound by imposing a series of impulses on the source, or on a specific waveset segment of the source. An impulse is like a brief event created by a sharp envelope on the sound. The sound inside the impulse might glissando slightly, as if whatever is causing the impulsion has warped the sound by its impact.', 
					'Start time – time in the source sound where the impulses begin',						 
					'Length of time that the impulses continue ',
					'Freq: Number of impulses per second in Hz: range 0.1 to 50',
					'Number of semitones by which to randomise the frequency of the impulses (range 0-12)',
					'Amount of time in seconds by which to randomise the relative time positions of amplitude peaks and troughs from impulse to impulse (range 0 - 1)',
					'Randomisation of the amplitude shape created by the peaks and troughs from impulse to impulse (range 0 - 1)',
					'Transposition contour of sound inside each impulse',
					'Randomisation of transposition contour from impulse to impulse (Range 0-1)',
					'Keep start of source sound, before impulses begin',
					'Keep end of source sound, after impulses end']
	});
db.distort.insert({
	name			: 'reform_square_fix',
	type			: 'distort',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 1,
	parameter_file	: '.brk',
	command 		:['distort','reform','1','infile',' '],
	range			:['','', ],
	infile 			: 1,
	ifana			: false,
	extention 		: '.wav',
	time_vary		: [false],
	info 			: ['Convert to fixed level square wave: This process reads each wavecycle (sound inbetween zero crossings) and replaces it with a different waveform of the same length. Several waveform options are provided. Those which do not fix the amplitude level respond to the varying amplitude levels of each successive wavecycle, thus producing an additional (and arbitrary) distortion feature.', 
					'Empty parameter']
	});

db.distort.insert({
	name			: 'reform_square',
	type			: 'distort',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 1,
	parameter_file	: '.brk',
	command 		:['distort','reform','2','infile',' '],
	range			:['','', ],
	infile 			: 1,
	ifana			: false,
	extention 		: '.wav',
	time_vary		: [false],
	info 			: ['Convert to square wave: This process reads each wavecycle (sound inbetween zero crossings) and replaces it with a different waveform of the same length. Several waveform options are provided. Those which do not fix the amplitude level respond to the varying amplitude levels of each successive wavecycle, thus producing an additional (and arbitrary) distortion feature.', 
					'Empty parameter']
	});

db.distort.insert({
	name			: 'reform_tri',
	type			: 'distort',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 1,
	parameter_file	: '.brk',
	command 		:['distort','reform','4','infile',' '],
	range			:['','', ],
	infile 			: 1,
	ifana			: false,
	extention 		: '.wav',
	time_vary		: [false],
	info 			: ['Convert to triangular wave: This process reads each wavecycle (sound inbetween zero crossings) and replaces it with a different waveform of the same length. Several waveform options are provided. Those which do not fix the amplitude level respond to the varying amplitude levels of each successive wavecycle, thus producing an additional (and arbitrary) distortion feature.', 
					'Empty parameter']
	});

db.distort.insert({
	name			: 'reform_inve_cycl',
	type			: 'distort',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 1,
	parameter_file	: '.brk',
	command 		:['distort','reform','5','infile',' '],
	range			:['','', ],
	infile 			: 1,
	ifana			: false,
	extention 		: '.wav',
	time_vary		: [false],
	info 			: ['Convert to inverted half-cycles: This process reads each wavecycle (sound inbetween zero crossings) and replaces it with a different waveform of the same length. Several waveform options are provided. Those which do not fix the amplitude level respond to the varying amplitude levels of each successive wavecycle, thus producing an additional (and arbitrary) distortion feature.', 
					'Empty parameter']
	});

db.distort.insert({
	name			: 'reform_click',
	type			: 'distort',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 1,
	parameter_file	: '.brk',
	command 		:['distort','reform','6','infile',' '],
	range			:['','', ],
	infile 			: 1,
	ifana			: false,
	extention 		: '.wav',
	time_vary		: [false],
	info 			: ['Convert to click stream: replaces each wavecycle with a mishmash of square pulses several samples long (random sizes), which sounds a bit like a rattle. This process reads each wavecycle (sound inbetween zero crossings) and replaces it with a different waveform of the same length. Several waveform options are provided. Those which do not fix the amplitude level respond to the varying amplitude levels of each successive wavecycle, thus producing an additional (and arbitrary) distortion feature.', 
					'Empty parameter']
	});

db.distort.insert({
	name			: 'reform_sin',
	type			: 'distort',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 1,
	parameter_file	: '.brk',
	command 		:['distort','reform','7','infile',' '],
	range			:['','', ],
	infile 			: 1,
	ifana			: false,
	extention 		: '.wav',
	time_vary		: [false],
	info 			: ['Convert to sinusoid: The sinusoid option, as might be expected, is relatively smooth. It is actually a subtle form of filtering. The sine waves vary in length and amplitude because they are based on wavecycles and because only some of the wavecycles are replaced. This process reads each wavecycle (sound inbetween zero crossings) and replaces it with a different waveform of the same length. Several waveform options are provided. Those which do not fix the amplitude level respond to the varying amplitude levels of each successive wavecycle, thus producing an additional (and arbitrary) distortion feature.', 
					'Empty parameter']
	});

db.distort.insert({
	name			: 'reform_exag',
	type			: 'distort',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 1,
	parameter_file	: '.brk',
	command 		:['distort','reform','8','infile',' '],
	range			:['','', ],
	infile 			: 1,
	ifana			: false,
	extention 		: '.wav',
	time_vary		: [false],
	info 			: ['Exaggerate waveform contour: The exaggeration option just seems to add a surface buzz.', 
					'Exaggeration factor (Range: 0.000002 to 40.0)']
	});
//distort replace infile outfile cyclecnt [-sskipcycles] 
db.distort.insert({
	name			: 'replace',
	type			: 'distort',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 2,
	parameter_file	: '.brk',
	command 		:['distort','replace',' ','infile',' ', '-s'],
	range			:['','', ],
	infile 			: 1,
	ifana			: false,
	extention 		: '.wav',
	time_vary		: [false],
	info 			: ['The replacing action serves to simplify the sound. Note that the single strong wavecycle in the group will take the place of several others, which will be deleted. This simplification becomes extreme when the cyclecnt is high, leading to a sample-hold kind of stepped effect. Time-varying cyclecnt makes it possible to introduce gradual change', 
					'(integer) size of group of wavecycles',
					'Number of wavecyles: (integer) to skip at start of file']
	});
//distort reverse infile outfile cyclecnt
db.distort.insert({
	name			: 'reverse',
	type			: 'distort',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 1,
	parameter_file	: '.brk',
	command 		:['distort','reverse',' ','infile',' '],
	range			:['',''],
	infile 			: 1,
	ifana			: false,
	extention 		: '.wav',
	time_vary		: [false],
	info 			: ['Reverse: A small value for cyclecnt will produce a grainy result, mid-values a broken up result, and large values swathes of reversed sound. If the value for cyclecnt exceeds the number of wavecycles in the infile, you will be told that the "sound source is too shor', 
					'Cyclecnt: Number of wavecycles in a reversed group (Range: > 0)']
	});
//domain-image [-ccyclecnt] [-sskipcycles] 
db.distort.insert({
	name			: 'shuffle',
	type			: 'distort',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 1,
	parameter_file	: '.brk',
	command 		:['distort','shuffle',' ','infile',' ', '-c', '-s'],
	range			:['','', ],
	infile 			: 1,
	ifana			: false,
	extention 		: '.wav',
	time_vary		: [false],
	info 			: ['Reverse: A small value for cyclecnt will produce a grainy result, mid-values a broken up result, and large values swathes of reversed sound. If the value for cyclecnt exceeds the number of wavecycles in the infile, you will be told that the "sound source is too shor', 
					'Pattern: asd-sssddd',
					'Cyclecnt: the size of wavecycle groups to process: each character in domain-image represents cyclecnt groups of wavecycles (Default: 1)',
					'Skipcycles – number of wavecyles (integer) to skip at start of file',]
	});

db.distort.insert({
	name			: 'repeat',
	type			: 'distort',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 1,
	parameter_file	: '.brk',
	command 		:['distort','repeat',' ','infile',' ','-c','-s'],
	range			:['','', ],
	infile 			: 1,
	ifana			: false,
	extention 		: '.wav',
	time_vary		: [false],
	info 			: ['DISTORT REPEAT produces long, grainy (distorted) sounds. The sense of stretching out the original is very apparent. A significant application of DISTORT REPEAT is that, by increasing the cyclecnt factor, one crosses the pitch-perception boundary: that is, starting with a noisy sound in which all the wavecycles are randomly different, one ends up with, for example, 7 repetitions of the same wavecycle, followed by 7 of another and so on – and each of these comprise sufficient repetitions for us to hear pitch. Thus the noise source becomes a string of pitch beads, each of arbitrary timbre. With a cyclecnt of, for example, 128, one can even get a slowish random melody', 
					'Multiplier: number of times (integer) each wavecycle (group) repeats',
					'Cyclelen: number of wavecycles (integer) in repeated groups ',
					'SKIPCYCLES: (integer) is no. of wavecycles to skip at start of file']
	});

db.distort.insert({
	name			: 'repeat2',
	type			: 'distort',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 1,
	parameter_file	: '.brk',
	command 		:['distort','repeat2',' ','infile',' ','-c','-s'],
	range			:['','', ],
	infile 			: 1,
	ifana			: false,
	extention 		: '.wav',
	time_vary		: [false],
	info 			: ['Repeating the wavecycles without time-stretching (as in DISTORT REPEAT) enables you to increase the strength of the distortion with the multiplier parameter without making the output file any longer than the original. Larger values for cyclecnt increases the length of infile that is affected.', 
					'Multiplier: number of times (integer) each wavecycle (group) repeats',
					'Cyclelen: number of wavecycles (integer) in repeated groups ',
					'SKIPCYCLES: (integer) is no. of wavecycles to skip at start of file']
	});

//distort repeat infile outfile multiplier [-ccyclecnt] [-sskipcycles] 

db.distort.insert({
	name			: 'filter_m1',
	type			: 'distort',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 2,
	parameter_file	: '.brk',
	command 		:['distort','filter','1','infile', ' ', '-s'],
	range			:[1,100],
	infile 			: 1,
	ifana			: false,
	extention 		: '.wav',
	time_vary		: [false],
	info 			: ['Distort Filter Mode 1: Omit cycles below freq. Period and frequency are inverse functions. Therefore it is possible to relate the length of a wavecycle to the frequency it would have were it to recur regularly. This program therefore filters by removing wavecycles shorter or longer than those relating to a specific, user-defined, frequency. The duration of the outfile is affected by this process: because wavecycles are being removed, the outfile will be shorter, by varying degrees', 
					'Frequency in Hz. Omit cycles below freq (Range: 10.0 to 22050.0)',						 
					'SKIPCYCLES: (integer) is no. of wavecycles to skip at start of file']
	});

db.distort.insert({
	name			: 'filter_m2',
	type			: 'distort',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 2,
	parameter_file	: '.brk',
	command 		:['distort','filter','2','infile', ' ', '-s'],
	range			:[1,100, 0,32],
	infile 			: 1,
	ifana			: false,
	extention 		: '.wav',
	time_vary		: [false, false],
	info 			: ['Distort Filter Mode 1: Omit cycles above freq. Period and frequency are inverse functions. Therefore it is possible to relate the length of a wavecycle to the frequency it would have were it to recur regularly. This program therefore filters by removing wavecycles shorter or longer than those relating to a specific, user-defined, frequency. The duration of the outfile is affected by this process: because wavecycles are being removed, the outfile will be shorter, by varying degrees', 
					'Frequency in Hz. Omit cycles above freq (Range: 10.0 to 22050.0)',						 
					'SKIPCYCLES: (integer) is no. of wavecycles to skip at start of file']
	});
db.distort.insert({
	name			: 'filter_m3',
	type			: 'distort',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 3,
	parameter_file	: '.brk',
	command 		:['distort','filter','3','infile', ' ', ' ', '-s'],
	range			:[1,22000, 1,22000, 0,32],
	infile 			: 1,
	ifana			: false,
	extention 		: '.wav',
	time_vary		: [false, false, false],
	info 			: ['Distort Filter Mode 1: Omit cycles below freq1 and above freq2. Period and frequency are inverse functions. Therefore it is possible to relate the length of a wavecycle to the frequency it would have were it to recur regularly. This program therefore filters by removing wavecycles shorter or longer than those relating to a specific, user-defined, frequency. The duration of the outfile is affected by this process: because wavecycles are being removed, the outfile will be shorter, by varying degrees', 
					'Frequency in Hz. Omit cycles below freq1 and above freq2 (Range: 10.0 to 22050.0)',						 
					'SKIPCYCLES: (integer) is no. of wavecycles to skip at start of file']
	});

db.distort.insert({
	name			: 'interact_m1',
	type			: 'distort',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 1,
	parameter_file	: '.brk',
	command 		:['distort','interact','1','infile', ' '],
	range			:['',''],
	infile 			: 2,
	ifana			: false,
	extention 		: '.wav',
	time_vary		: [false],
	info 			: ['Interleave wavecycles from the two infiles. Material from both soundfiles is audibly apparent due to the interleaving process. DISTORT INTERACT can be used to achieve distortion which combines data from two different sounds or distortion which totally alters a sound', 
					'Empty Parameter']
	});

db.distort.insert({
	name			: 'interact_m2',
	type			: 'distort',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 1,
	parameter_file	: '.brk',
	command 		:['distort','interact','2','infile', ' '],
	range			:['',''],
	infile 			: 2,
	ifana			: false,
	extention 		: '.wav',
	time_vary		: [false],
	info 			: ['Impose wavecycle lengths of 1st file on wavecycles of 2nd. the distortion is almost total: the alteration of the wavecycle lengths of the second sound changes it to a burbly, bubbly, seething mass. DISTORT INTERACT can be used to achieve distortion which combines data from two different sounds or distortion which totally alters a sound', 
					'Empty Parameter']
	});

				
db.distort.insert({
	name			:'IMPOSE_ENV_m1',
	type			:'distort',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 4,
	parameter_file	: '.brk',
	command			: ['distort','envel', '1','infile',' ','-t', '-e'],					
	range			:[0,100,0,1,0.02,50],//[ P-1 low, P-2 high, ect ....]
	infile			: 1,
	ifana			: false,
	extention 		: '.wav',
	time_vary		: [false, false, false, false],
	info			:['IMPOSE ENVELOPE OVER EACH GROUP OF cyclecnt WAVECYCLES -> rising envelope', 
					'CYCLECNT (no of wavecycles under a single envelope): 0 - 1000',
					'trough of envelope (0-1: default 0): min-level  0 - 1 (ex = 0.006', 
					'exponent  0.02 - 50 (ex = 1 - 6 ']
		
	});

db.distort.insert({
	name			:'IMPOSE_ENV_m2',
	type			:'distort',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 4,
	parameter_file	: '.brk',
	command			: ['distort','envel', '2','infile',' ','-t', '-e'],					
	range			: [0,100,0,1,0.02,50],
	infile			: 1,
	ifana			: false,
	extention 		: '.wav',
	time_vary		: [false, false, false, false],
	info			:[ 'IMPOSE ENVELOPE OVER EACH GROUP OF cyclecnt WAVECYCLES -> falling envelope', 
					'CYCLECNT (no of wavecycles under a single envelope): 0 - 1000',
					'trough of envelope (0-1: default 0): min-level  0 - 1 (ex = 0.006', 
					'exponent for envelope rise or decay  0.02 - 50 (ex = 1 - 6 ']
	});

db.distort.insert({
	name			:'fractal',
	type			:'distort',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 3,
	parameter_file	: '.brk',
	command			: ['distort','fractal',' ','infile',' ',' ', '-p'],					
	range			: [2, 20000, 0.0, 1.0, 0.1, 32767.0],
	infile			: 1,
	ifana			: false,
	extention 		: '.wav',
	time_vary		: [false, false, false],
	info			:[ 'SUPERIMPOSE MINIATURE COPIES OF SRC WAVECYCLES ONTO THEMSELVES. This is a powerful and somewhat wild tool for producing distortion effects. The higher the value of scaling, the more the superimposed copies appear as a sheen of distortion above the original sound.', 
					'SCALING  = (integer) division of scale of src wave (range: 2 to 0.50*srate): 2-8 work well',
					'LOUDNESS = loudness of scaled component, relative to src (loudness 1.0)', 
					'PRE_ATTENUATION is applied to input sound before processing range 0.1 -  32767.0']
	});



db.distort.insert({
	name			:'multiply',
	type			:'distort',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 2,
	parameter_file	: '.brk',
	command			: ['distort','multiply',' ','infile',' ','-s'],					
	range			: [2,20000,0,1,1],
	infile			: 1,
	ifana			: false,
	extention 		: '.wav',
	time_vary		: [false, false],
	info			:[ 'distortion multiply is relatively mild, in that the original sound remains recognisable. However, the surface is textured and the pitch rises with each increase in the value of N. DISTORT MULTIPLY can be used, for example, to create high, modulating, grainy vocal sounds.', 
					'N – multiplier (Range: 2 to 16, integer only)',
					'– smoothing (try this if glitches appear)']
	});

	
db.modify.insert({
	name			: 'speed',
	type			: 'modify',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 1,
	parameter_file	: '.brk',
	command 		:['modify','speed','2' ,'infile',' '],
	range			:[-96,96],
	infile 			: 1,
	ifana			: false,
	extention 		: '.wav',
	time_vary		: [true],
	info 			: ['Vary speed/pitch of a sound', 'input as semitones: -12, -4, 12 ect...']

});

db.modify.insert({
	name			: 'revecho_m1',
	type			: 'modify',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 6,
	parameter_file	: '.brk',
	command 		:['modify','revecho','1' ,'infile',' ', ' ', ' ', ' ', '-p', '-i'],
	range			:[0.1, 20000, 0, 1, 0, 1,0,1, 0,1 ,0,1, ],
	infile 			: 1,
	ifana			: false,
	extention 		: '.wav',
	time_vary		: [true, false, false,   false, false, false],
	info 			:['STANDARD DELAY: with feedback & mix (0 = dry) of original and delayed signal',
					  'DELAY Delay time, in milliseconds',
					  'MIX amount of delayed signal in final mix: 0 gives dry result: (Range: 0 to 1)',
					  'FEEDBACK produces resonance related to delay time (with short times): (Range: -1.0 to 1.0)',
					  'TAIL the time to allow delayed signal to decay to zero: (Range: -1.0 to 1.0)',
					  'PRESCALE prescales input level, to avoid overload: 0.000031 to 1.000000',
					  '-i inverts the dry signal (for phasing effects)']

	});
db.modify.insert({
	name			: 'revecho_m2',
	type			: 'modify',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 10,
	parameter_file	: '.brk',
	command 		:['modify','revecho','2' ,'infile',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ['-p'], ['-s']],
	range			:[0.1, 20000, 0, 1, 0, 1,0,1, 0,1 ,0,1, ],
	infile 			: 1,
	ifana			: false,
	extention 		: '.wav',
	time_vary		: [true, false, false, false, false, false, false, false, false, false],
	info 			:['VARYING DELAY: with low frequency oscillator varying the delay time',
					  'DELAY Delay time, in milliseconds',
					  'MIX amount of delayed signal in final mix: 0 gives dry result: (Range: 0 to 1)',
					  'FEEDBACK produces resonance related to delay time (with short times): (Range: -1.0 to 1.0)',
					  'depth of the delay-variation sweep (Range: 0 to 1)',
					  'frequency of the delay-variation sweep (negative values give random oscillations). Range (-50.000000 to 50.000000). Lower values for lfofreq produce a more noticeable wave motion, while higher values add to the bounce of reverberation',
					  'start-phase of the delay-variation sweep (Range: 0 to 1)',
					  'time in seconds before the delay-variation sweep begins: reverberationange (0.000000 to 0.128549)',
					  'TAIL the time to allow delayed signal to decay to zero: (Range: -1.0 to 1.0)',
					  'prescales input level, to avoid overload',
					  'seed – non-zero value gives reproducible output (with the same seed) where random oscillations are used (see lfofreq)']
});

db.modify.insert({
	name			: 'reverse',
	type			: 'modify',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 1,
	parameter_file	: '.brk',
	command 		:['modify','radical','1' ,'infile',' '],
	range			:[0,0],
	infile 			: 1,
	ifana			: false,
	extention 		: '.wav',
	time_vary		: [false],
	info 			:['Reverse',
					  'Parameter Empty']

});
//modify radical 2 infile outfile repeats chunklen [-sscatter] [-n]
db.modify.insert({
	name			: 'shredd',
	type			: 'modify',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 3,
	parameter_file	: '.brk',
	command 		:['modify','radical','2' ,'infile',' ', ' ','-s'],
	range			:[0, 1, 0, 1, 0,1],
	infile 			: 1,
	ifana			: false,
	extention 		: '.wav',
	time_vary		: [true, true, true],
	info 			:['Shredd the sound within its existing duration',
					  'Repeats:  Number of repeats of shredding process.',
					  'Chunk length: Average length of chunks to cut and permutate. Range 0.017415 to 13.303739 ',
					  'Scatter: Randomisation of cuts (Range: 0 to K, where K = duration of infile/chunklen Default = 1). If scatter = 0, reorders without shredding.NB:  chunklen * scatter MUST be < programs ']

	});
// modify radical 3 infile outfile dur [-ldown] [-hup] [-sstart] [-eend] [-f]
db.modify.insert({
	name			: 'Scrub',
	type			: 'modify',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 5,
	parameter_file	: '.brk',
	command 		:['modify','radical','3' ,'infile',' ', '-l', '-h', '-s', '-e'],
	range			:[0,1, 0,1, 0,1, 0,1 ,0,1],
	infile 			: 1,
	ifana			: false,
	extention 		: '.wav',
	time_vary		: [true, true, true, true, true, true],
	info 			:['Scrub sound back and forth',
					  'Duration of outfile',
					  'Lowest downward tranposition in semitones',
					  'Highest upward transposition in semitones)',
					  'Scrubs start before time start seconds ',
					  'Scrubs end after time end']
	});

db.modify.insert({
	name			: 'downgrade',
	type			: 'modify',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 2,
	parameter_file	: '.brk',
	command 		:['modify','radical','4' ,'infile',' ', ' '],
	range			:[0,1, 0,1],
	infile 			: 1,
	ifana			: false,
	extention 		: '.wav',
	time_vary		: [false, false],
	info 			:['Downgrade the sample rate',
					  'BIT_RESOLUTION  range(1 - 16): default 16-bit.',
					  'SRATE_DIVISION  range(1-256): default 1 (normal)']
	});

db.modify.insert({
	name			: 'ring_modulation',
	type			: 'modify',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 1,
	parameter_file	: '.brk',
	command 		:['modify','radical','5' ,'infile',' '],
	range			:[30, 20000],
	infile 			: 1,
	ifana			: false,
	extention 		: '.wav',
	time_vary		: [true],
	info 			:['Ring Modulation',
					  'Modulation Frequency']

	});
//modify radical 6 infile1 infile2 outfile
db.modify.insert({
	name			: 'cross_modulation',
	type			: 'modify',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 1,
	parameter_file	: '.brk',
	command 		:['modify','radical','6' ,'infile',' '],
	range			:[0,0],
	infile 			: 2,
	ifana			: false,
	extention 		: '.wav',
	time_vary		: [true, false, false,   false, false, false],
	info 			:['Two input soundfiles are multiplied, creating complex sidebands',
					  'Empty Parameter']

	});

db.modify.insert({
	name			: 'convolve',
	type			: 'modify',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 1,
	parameter_file	: '.brk',
	command 		:['modify','convolve','1' ,'infile',' '],
	range			:[0,0],
	infile 			: 2,
	ifana			: false,
	extention 		: '.wav',
	time_vary		: [true, false, false,   false, false, false],
	info 			:['Convolve the infiles with infile2',
					  'Empty Parameter']

	});

db.modify.insert({
	name			: 'shudder',
	type			: 'modify',
	mono_stereo		: 'stereo',
	ifNoInputFile	: false,
	parameter_count : 8,
	parameter_file	: '.brk',
	command 		:['modify','shudder',' ','infile',' ',' ',' ',' ',' ',' ',' ',' '],
	range			:[0,0],
	infile 			: 1,
	ifana			: false,
	extention 		: '.wav',
	time_vary		: [true, false, false, false, false, false, true, false],
	info 			:['SHUDDER imposes tremulations on a stereo file, randomised both in time and space, so that it appears to shudder.',
					  'Starttime: time when the shuddering will begin',
					  'Frq: the average frequency of the shuddering Range 1 - 13',
					  'Scatter:  randomises the shudder events in time. Range: 0 to 1',
					  'stereo_spread: positions the shudder events in space. (0 - 1)',
					  'Mindepth: amplitude of shudders (each gets randval btwn MIN & MAX) Range 0-1',
					  'Maxdepth: amplitude of shudders (each gets randval btwn MIN & MAX) Range 0-1', 
					  'Minwidth: durations of shudder events (each gets randval btwn MIN & MAX) Range 0.02 to 13.4', 
					  'Maxwidth: durations of shudder events (each gets randval btwn MIN & MAX) Range 0.02 to 13.4']

	});

db.modify.insert({
	name			: 'stack',
	type			: 'modify',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 7,
	parameter_file	: '.brk',
	command 		:['modify','stack',' ','infile',' ',' ',' ',' ',' ',' ',' -s'],
	range			:[0,0],
	infile 			: 1,
	ifana			: false,
	extention 		: '.wav',
	time_vary		: [true, false, false, false, false, false, true, false],
	info 			:['Create a mix that stacks transposed versions of source on top of one another.  MODIFY STACK is a very important program. It enables you to construct larger versions of sounds by superimposing transposed versions on top of one another. Furthermore, it does this in such a way as to maximise the fusion of the layered sound by synchronising the attacks. This relates to a basic technique of orchestral scoring (where it is called doubling). It is a form of automatic mixing involving one soundfile.',
					  'Transpos: Transposition in semitones between successive copies,',
					  'Count: the number of copies in the stack',
					  'Lean: the loudness of the highest component, relative to the lowest (may be > 1)',
					  'Attack-offset: adjusts the time at which the attack of each sound occurs',
					  'Gain: an overall amplifying gain factor on the output sound; some reduction (less than 1) may be needed. (It may also be > 1.) Range: 0.1 to 10',
					  'Dur:  how much of the output to make (a proportion, from 0 to 1)',  
					  'see the relative levels of the layers in the stack']

	});

//modify brassage 6 infile outfile velocity density grainsize pitchshift amp space bsplice esplice [-rrange] [-jjitter] [-loutlength] [-cchannel] [-d] [-x] [-n]
db.modify.insert({
	name			: 'brassage_m6',
	type			: 'modify',
	mono_stereo		: 'stereo',
	ifNoInputFile	: false,
	parameter_count : 12,
	parameter_file	: '.brk',
	command 		:['modify','brassage','6','infile',' ',' ',' ',' ',' ',' ',' ',' ','-r','-j','-l','-c'],
	range			:[0,1, 0,1, 0,1, 0,1, 0,1, 0,1, 0,1, 0,1, 0,1, 0,1, 0,1, 0,1],
	infile 			: 1,
	ifana			: false,
	extention 		: '.wav',
	time_vary		: [true, false, false, false, false, false, true, false, false, false, false, false, false, true, false],
	info 			:['Granular reconstitution of soundfile',
					  'Velocity: timeshrink – speed of advance in infile, relative to outfile (Range: >= 0)',
					  'Density: amount of grain overlap (Range: > 0)',
					  'Grainsize: size of the grains in milliseconds (Range: must be > 2 * the length of the splices; overall range: 2.0ms to 1997.12ms; Default: 50ms)',
					  'Pitchshift: transposition of grains in + or - (fractions of) semitones',
					  'Amp: grain loudness range – gain applied to the grains (Range: 0 to 1; Default: 1.0)',
					  'Space: spatial position – set stereo position in outfile 0 = L, 1 = R (Range: 0 to N) -rrange SL: search range – of search for next grain, before infile now (Default: 0 ms)',  
					  'Startsplice: start splice – length of start-splices on grains in ms (Default: 5)',
					  'EndSplice: end splice – length of end-splices on grains in ms (Default: 5)',
					  'Range: search for nextgrain, before infile now  (Default 0 MS)',
					  'Jitter: Randomisation of grain position (Range 0-1) Default (0.50)',
					  'Outlength: maximum outfile length (if end of data not reached). Set to zero (Default) for this parameter to be ignored.',
					  'Channel: Extract & work on just 1 channel of stereo snd: Range(1-2). Set to zero (Default) for this parameter to be ignored.']

	});

db.reverb.insert({
	name			: 'reverb',
	type			: 'reverb',
	mono_stereo		: 'stereo',
	ifNoInputFile	: false,
	parameter_count : 6,
	parameter_file	: '.brk',
	command 		:['reverb',' ',' ',' ',' ',' ',' ',' ',' '],
	range			:[0,0],
	infile 			: 1,
	ifana			: false,
	extention 		: '.wav',
	time_vary		: [false,false,false,false,false,false],
	info 			:['Reverb',
					  'Set level of early reflections (Range: 0.0 to 1.0)',
					  'Dry/wet: balance (source and reverb): 1.0<-- mix -->= 0.0',
					  'Reverb decay time (to -60dB) in seconds',
					  'Absorb: degree of hf damping to suggest air absorption: 0.0 <= absorb <= 1.0',
					  'Lowpass; filter cutoff freq (Hz) applied at input to reverb',
					  'trailer time added to outfile for reverb tail (secs)']

	});

//hilite arpeg 1-4 infile outfile wave rate [-pU] [-lX] [-hY] [-bZ] [-aA] [-Nk] [-sS] [-T] [-K]
db.hilite.insert({
	name			: 'arpeg_m1',
	type			: 'hilite',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 12, // we need to add window size to parameters in freq domain process
	parameter_file	: '.brk',
	command 		:['hilite','arpeg','1' ,'infile',' ',' ','-p','-l','-h','-b','-a','-N','-s','-T','-K'],
	range			:[0,1, 0,1, 0,1, 0,1, 0,1, 0,1, 0,1, 0,1, 0,1, 0,1, 0,1, ],
	infile 			: 1,
	ifana			: true,
	extention 		: '.ana',
	time_vary		: [true, false, false, false, false, false, false, false, false, false, false, false],
	info 			:['Spectrum arpeggio Inside band ONLY: causes a waveform at a specified frequency to sweep through the spectrum of a sound, selecting or emphasizing the partials it passes through (or which lie below it or above it), thus creating an arpeggiation of the spectrum within the sound.Note the interaction of the -N and -s parameters. The one is controlling the envelope of the decay, and the other is sustaining across windows. When a slow decay envelope (e.g., 0.2) is combined with a large number of windows across which to sustain data (e.g., > 100), amplitude overflow can occur, sometimes massive amplitude overflow if the source is loud. If PVOC comments on amplitude, take care to to read what it says before playing the sound. Values for -a also affect amplitude output, so when near the limit with other factors, a lower value for -a can be helpful. High values for -N can muffle the sound, and very high values can reduce it to silence. You are recommended not to exceed a value of 7.',
					  'Wave: 1 = downramp : 2 = sin : 3 = saw : 4 = upramp',
					  'Rate: number of sweeps per second range (0.000000 to 43.066406))',
					  'Start_phase: range 0-1 (limited range for some cases); may not affect the sound very much',
					  'Lowest frequency arpeg sweeps down to; range 5.000000 to 22050.000000',
					  'Highest frequency arpeg sweeps up to; Default nyquist',
					  'Bandwidth of sweep band (in Hz); Default = nyquist/channel_cnt (i.e., sample rate/2/channel count)',
					  'Amplification of arpegtones; Default = 10.0',
					  'Nonlinear decay arpegtones; > 1 faster, < 1 slower; must be > 0 (range: 0.02 to 50 – take care with values higher than about 5, as can reduce output to silence)',
					  'Number of windows over which arpegtones sustained: Default = 3 (high values, esp. with a long decay time, can cause amplitude overflow)',
					  'In sustains, TRACK changing frquency of source (Default = retain start frquency)',
					  'Let sustains run to zero before new arpegtone attack is accepted (Default: re-attack once sustains fall below current input level)',
					  'Analysis points: range from 128 - 256 - 512 - 1024 - 2048 - 4096 - 8192 - 16384:  More points give better freq resolution but worse time-resolution (e.g. rapidly changing spectrum']
});

db.hilite.insert({
	name			: 'arpeg_m2',
	type			: 'hilite',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 12, // we need to add window size to parameters in freq domain process
	parameter_file	: '.brk',
	command 		:['hilite','arpeg','2' ,'infile',' ',' ','-p','-l','-h','-b','-a','-N','-s','-T','-K'],
	range			:[0,1, 0,1, 0,1, 0,1, 0,1, 0,1, 0,1, 0,1, 0,1, 0,1, 0,1, ],
	infile 			: 1,
	ifana			: true,
	extention 		: '.ana',
	time_vary		: [true, false, false, false, false, false, false, false, false, false, false, false],
	info 			:['Spectrum arpeggio) Boost Amplify snds in band. Others play unamplified: causes a waveform at a specified frequency to sweep through the spectrum of a sound, selecting or emphasizing the partials it passes through (or which lie below it or above it), thus creating an arpeggiation of the spectrum within the sound.Note the interaction of the -N and -s parameters. The one is controlling the envelope of the decay, and the other is sustaining across windows. When a slow decay envelope (e.g., 0.2) is combined with a large number of windows across which to sustain data (e.g., > 100), amplitude overflow can occur, sometimes massive amplitude overflow if the source is loud. If PVOC comments on amplitude, take care to to read what it says before playing the sound. Values for -a also affect amplitude output, so when near the limit with other factors, a lower value for -a can be helpful. High values for -N can muffle the sound, and very high values can reduce it to silence. You are recommended not to exceed a value of 7.',
					  'Wave: 1 = downramp : 2 = sin : 3 = saw : 4 = upramp',
					  'Rate: number of sweeps per second range (0.000000 to 43.066406))',
					  'Start_phase: range 0-1 (limited range for some cases); may not affect the sound very much',
					  'Lowest frequency arpeg sweeps down to; range 5.000000 to 22050.000000',
					  'Highest frequency arpeg sweeps up to; Default nyquist',
					  'Bandwidth of sweep band (in Hz); Default = nyquist/channel_cnt (i.e., sample rate/2/channel count)',
					  'Amplification of arpegtones; Default = 10.0',
					  'Nonlinear decay arpegtones; > 1 faster, < 1 slower; must be > 0 (range: 0.02 to 50 – take care with values higher than about 5, as can reduce output to silence)',
					  'Number of windows over which arpegtones sustained: Default = 3 (high values, esp. with a long decay time, can cause amplitude overflow)',
					  'In sustains, TRACK changing frquency of source (Default = retain start frquency)',
					  'Let sustains run to zero before new arpegtone attack is accepted (Default: re-attack once sustains fall below current input level)',
					  'Analysis points: range from 128 - 256 - 512 - 1024 - 2048 - 4096 - 8192 - 16384:  More points give better freq resolution but worse time-resolution (e.g. rapidly changing spectrum']
});

db.hilite.insert({
	name			: 'arpeg_m3',
	type			: 'hilite',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 12, // we need to add window size to parameters in freq domain process
	parameter_file	: '.brk',
	command 		:['hilite','arpeg','3' ,'infile',' ',' ','-p','-l','-h','-b','-a','-N','-s','-T','-K'],
	range			:[0,1, 0,1, 0,1, 0,1, 0,1, 0,1, 0,1, 0,1, 0,1, 0,1, 0,1, ],
	infile 			: 1,
	ifana			: true,
	extention 		: '.ana',
	time_vary		: [true, false, false, false, false, false, false, false, false, false, false, false],
	info 			:['Spectrum arpeggio)Below Boost play components in & below band ONLY: causes a waveform at a specified frequency to sweep through the spectrum of a sound, selecting or emphasizing the partials it passes through (or which lie below it or above it), thus creating an arpeggiation of the spectrum within the sound.Note the interaction of the -N and -s parameters. The one is controlling the envelope of the decay, and the other is sustaining across windows. When a slow decay envelope (e.g., 0.2) is combined with a large number of windows across which to sustain data (e.g., > 100), amplitude overflow can occur, sometimes massive amplitude overflow if the source is loud. If PVOC comments on amplitude, take care to to read what it says before playing the sound. Values for -a also affect amplitude output, so when near the limit with other factors, a lower value for -a can be helpful. High values for -N can muffle the sound, and very high values can reduce it to silence. You are recommended not to exceed a value of 7.',
					  'Wave: 1 = downramp : 2 = sin : 3 = saw : 4 = upramp',
					  'Rate: number of sweeps per second range (0.000000 to 43.066406))',
					  'Start_phase: range 0-1 (limited range for some cases); may not affect the sound very much',
					  'Lowest frequency arpeg sweeps down to; range 5.000000 to 22050.000000',
					  'Highest frequency arpeg sweeps up to; Default nyquist',
					  'Bandwidth of sweep band (in Hz); Default = nyquist/channel_cnt (i.e., sample rate/2/channel count)',
					  'Amplification of arpegtones; Default = 10.0',
					  'Nonlinear decay arpegtones; > 1 faster, < 1 slower; must be > 0 (range: 0.02 to 50 – take care with values higher than about 5, as can reduce output to silence)',
					  'Number of windows over which arpegtones sustained: Default = 3 (high values, esp. with a long decay time, can cause amplitude overflow)',
					  'In sustains, TRACK changing frquency of source (Default = retain start frquency)',
					  'Let sustains run to zero before new arpegtone attack is accepted (Default: re-attack once sustains fall below current input level)',
					  'Analysis points: range from 128 - 256 - 512 - 1024 - 2048 - 4096 - 8192 - 16384:  More points give better freq resolution but worse time-resolution (e.g. rapidly changing spectrum']
});

db.hilite.insert({
	name			: 'arpeg_m4',
	type			: 'hilite',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 12, // we need to add window size to parameters in freq domain process
	parameter_file	: '.brk',
	command 		:['hilite','arpeg','4' ,'infile',' ',' ','-p','-l','-h','-b','-a','-N','-s','-T','-K'],
	range			:[0,1, 0,1, 0,1, 0,1, 0,1, 0,1, 0,1, 0,1, 0,1, 0,1, 0,1, ],
	infile 			: 1,
	ifana			: true,
	extention 		: '.ana',
	time_vary		: [true, false, false, false, false, false, false, false, false, false, false, false],
	info 			:['Spectrum arpeggio) Above Boost play components in & above band ONLY: causes a waveform at a specified frequency to sweep through the spectrum of a sound, selecting or emphasizing the partials it passes through (or which lie below it or above it), thus creating an arpeggiation of the spectrum within the sound.Note the interaction of the -N and -s parameters. The one is controlling the envelope of the decay, and the other is sustaining across windows. When a slow decay envelope (e.g., 0.2) is combined with a large number of windows across which to sustain data (e.g., > 100), amplitude overflow can occur, sometimes massive amplitude overflow if the source is loud. If PVOC comments on amplitude, take care to to read what it says before playing the sound. Values for -a also affect amplitude output, so when near the limit with other factors, a lower value for -a can be helpful. High values for -N can muffle the sound, and very high values can reduce it to silence. You are recommended not to exceed a value of 7.',
					  'Wave: 1 = downramp : 2 = sin : 3 = saw : 4 = upramp',
					  'Rate: number of sweeps per second range (0.000000 to 43.066406))',
					  'Start_phase: range 0-1 (limited range for some cases); may not affect the sound very much',
					  'Lowest frequency arpeg sweeps down to; range 5.000000 to 22050.000000',
					  'Highest frequency arpeg sweeps up to; Default nyquist',
					  'Bandwidth of sweep band (in Hz); Default = nyquist/channel_cnt (i.e., sample rate/2/channel count)',
					  'Amplification of arpegtones; Default = 10.0',
					  'Nonlinear decay arpegtones; > 1 faster, < 1 slower; must be > 0 (range: 0.02 to 50 – take care with values higher than about 5, as can reduce output to silence)',
					  'Number of windows over which arpegtones sustained: Default = 3 (high values, esp. with a long decay time, can cause amplitude overflow)',
					  'In sustains, TRACK changing frquency of source (Default = retain start frquency)',
					  'Let sustains run to zero before new arpegtone attack is accepted (Default: re-attack once sustains fall below current input level)',
					  'Analysis points: range from 128 - 256 - 512 - 1024 - 2048 - 4096 - 8192 - 16384:  More points give better freq resolution but worse time-resolution (e.g. rapidly changing spectrum']
});

db.hilite.insert({
	name			: 'arpeg_m5',
	type			: 'hilite',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 7, // we need to add window size to parameters in freq domain process
	parameter_file	: '.brk',
	command 		:['hilite','arpeg','5','infile',' ',' ','-p','-l','-h','-a'],
	range			:[0,1, 0,1, 0,1, 0,1, 0,1, 0,1],
	infile 			: 1,
	ifana			: true,
	extention 		: '.ana',
	time_vary		: [true, false, false, false, false, false, false],
	info 			:['Spectrum arpeggio) Below : causes a waveform at a specified frequency to sweep through the spectrum of a sound, selecting or emphasizing the partials it passes through (or which lie below it or above it), thus creating an arpeggiation of the spectrum within the sound.Note the interaction of the -N and -s parameters. The one is controlling the envelope of the decay, and the other is sustaining across windows. When a slow decay envelope (e.g., 0.2) is combined with a large number of windows across which to sustain data (e.g., > 100), amplitude overflow can occur, sometimes massive amplitude overflow if the source is loud. If PVOC comments on amplitude, take care to to read what it says before playing the sound. Values for -a also affect amplitude output, so when near the limit with other factors, a lower value for -a can be helpful. High values for -N can muffle the sound, and very high values can reduce it to silence. You are recommended not to exceed a value of 7.',
					  'Wave: 1 = downramp : 2 = sin : 3 = saw : 4 = upramp',
					  'Rate: number of sweeps per second range (0.000000 to 43.066406))',
					  'Start_phase: range 0-1 (limited range for some cases); may not affect the sound very much',
					  'Lowest frequency arpeg sweeps down to; range 5.000000 to 22050.000000',
					  'Highest frequency arpeg sweeps up to; Default nyquist',
					  'Amplification of arpegtones; Default = 10.0',
					  'Analysis points: range from 128 - 256 - 512 - 1024 - 2048 - 4096 - 8192 - 16384:  More points give better freq resolution but worse time-resolution (e.g. rapidly changing spectrum']
});

db.hilite.insert({
	name			: 'arpeg_m6',
	type			: 'hilite',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 7, // we need to add window size to parameters in freq domain process
	parameter_file	: '.brk',
	command 		:['hilite','arpeg','6' ,'infile',' ',' ','-p','-l','-h','-a'],
	range			:[0,1, 0,1, 0,1, 0,1, 0,1, 0,1, 0,1],
	infile 			: 1,
	ifana			: true,
	extention 		: '.ana',
	time_vary		: [true, false, false, false, false, false, false],
	info 			:['Spectrum arpeggio) Above: causes a waveform at a specified frequency to sweep through the spectrum of a sound, selecting or emphasizing the partials it passes through (or which lie below it or above it), thus creating an arpeggiation of the spectrum within the sound.Note the interaction of the -N and -s parameters. The one is controlling the envelope of the decay, and the other is sustaining across windows. When a slow decay envelope (e.g., 0.2) is combined with a large number of windows across which to sustain data (e.g., > 100), amplitude overflow can occur, sometimes massive amplitude overflow if the source is loud. If PVOC comments on amplitude, take care to to read what it says before playing the sound. Values for -a also affect amplitude output, so when near the limit with other factors, a lower value for -a can be helpful. High values for -N can muffle the sound, and very high values can reduce it to silence. You are recommended not to exceed a value of 7.',
					  'Wave: 1 = downramp : 2 = sin : 3 = saw : 4 = upramp',
					  'Rate: number of sweeps per second range (0.000000 to 43.066406))',
					  'Start_phase: range 0-1 (limited range for some cases); may not affect the sound very much',
					  'Lowest frequency arpeg sweeps down to; range 5.000000 to 22050.000000',
					  'Highest frequency arpeg sweeps up to; Default nyquist',
					  'Amplification of arpegtones; Default = 10.0',
					  'Analysis points: range from 128 - 256 - 512 - 1024 - 2048 - 4096 - 8192 - 16384:  More points give better freq resolution but worse time-resolution (e.g. rapidly changing spectrum']
});

db.hilite.insert({
	name			: 'arpeg_m7',
	type			: 'hilite',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 8, // we need to add window size to parameters in freq domain process
	parameter_file	: '.brk',
	command 		:['hilite','arpeg','7' ,'infile',' ',' ','-p','-l','-h','-b','-a'],
	range			:[0,1, 0,1, 0,1, 0,1, 0,1, 0,1, 0,1],
	infile 			: 1,
	ifana			: true,
	extention 		: '.ana',
	time_vary		: [true, false, false, false, false, false, false],
	info 			:['Spectrum arpeggio) Once below: causes a waveform at a specified frequency to sweep through the spectrum of a sound, selecting or emphasizing the partials it passes through (or which lie below it or above it), thus creating an arpeggiation of the spectrum within the sound.Note the interaction of the -N and -s parameters. The one is controlling the envelope of the decay, and the other is sustaining across windows. When a slow decay envelope (e.g., 0.2) is combined with a large number of windows across which to sustain data (e.g., > 100), amplitude overflow can occur, sometimes massive amplitude overflow if the source is loud. If PVOC comments on amplitude, take care to to read what it says before playing the sound. Values for -a also affect amplitude output, so when near the limit with other factors, a lower value for -a can be helpful. High values for -N can muffle the sound, and very high values can reduce it to silence. You are recommended not to exceed a value of 7.',
					  'Wave: 1 = downramp : 2 = sin : 3 = saw : 4 = upramp',
					  'Rate: number of sweeps per second range (0.000000 to 43.066406))',
					  'Start_phase: range 0-1 (limited range for some cases); may not affect the sound very much',
					  'Lowest frequency arpeg sweeps down to; range 5.000000 to 22050.000000',
					  'Highest frequency arpeg sweeps up to; Default nyquist',
					  'Bandwidth of sweep band (in Hz); Default = nyquist/channel_cnt (i.e., sample rate/2/channel count)',
					  'Amplification of arpegtones; Default = 10.0',
					  'Analysis points: range from 128 - 256 - 512 - 1024 - 2048 - 4096 - 8192 - 16384:  More points give better freq resolution but worse time-resolution (e.g. rapidly changing spectrum']
});

db.hilite.insert({
	name			: 'arpeg_m8',
	type			: 'hilite',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 8, // we need to add window size to parameters in freq domain process
	parameter_file	: '.brk',
	command 		:['hilite','arpeg','8' ,'infile',' ',' ','-p','-l','-h','-b','-a'],
	range			:[0,1, 0,1, 0,1, 0,1, 0,1, 0,1, 0,1],
	infile 			: 1,
	ifana			: true,
	extention 		: '.ana',
	time_vary		: [true, false, false, false, false, false, false],
	info 			:['Spectrum arpeggio) Once above: causes a waveform at a specified frequency to sweep through the spectrum of a sound, selecting or emphasizing the partials it passes through (or which lie below it or above it), thus creating an arpeggiation of the spectrum within the sound.Note the interaction of the -N and -s parameters. The one is controlling the envelope of the decay, and the other is sustaining across windows. When a slow decay envelope (e.g., 0.2) is combined with a large number of windows across which to sustain data (e.g., > 100), amplitude overflow can occur, sometimes massive amplitude overflow if the source is loud. If PVOC comments on amplitude, take care to to read what it says before playing the sound. Values for -a also affect amplitude output, so when near the limit with other factors, a lower value for -a can be helpful. High values for -N can muffle the sound, and very high values can reduce it to silence. You are recommended not to exceed a value of 7.',
					  'Wave: 1 = downramp : 2 = sin : 3 = saw : 4 = upramp',
					  'Rate: number of sweeps per second range (0.000000 to 43.066406))',
					  'Start_phase: range 0-1 (limited range for some cases); may not affect the sound very much',
					  'Lowest frequency arpeg sweeps down to; range 5.000000 to 22050.000000',
					  'Highest frequency arpeg sweeps up to; Default nyquist',
					  'Bandwidth of sweep band (in Hz); Default = nyquist/channel_cnt (i.e., sample rate/2/channel count)',
					  'Amplification of arpegtones; Default = 10.0',
					  'Analysis points: range from 128 - 256 - 512 - 1024 - 2048 - 4096 - 8192 - 16384:  More points give better freq resolution but worse time-resolution (e.g. rapidly changing spectrum']
});

db.hilite.insert({
	name			: 'bltr',
	type			: 'hilite',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 3, // we need to add window size to parameters in freq domain process
	parameter_file	: '.brk',
	command 		:['hilite','bltr',' ' ,'infile',' ',' '],
	range			:[0,1, 0,1, 0,1, 0,1, 0,1, 0,1, 0,1],
	infile 			: 1,
	ifana			: true,
	extention 		: '.ana',
	time_vary		: [true, false, false, false, false, false, false],
	info 			:['Time-average and TRACE the spectrum',
					  'Blurring: Number of windows over which to average the spectrum ',
					  'Tracing: number of (loudest) channels to retain, in each window',
					  'Analysis points: range from 128 - 256 - 512 - 1024 - 2048 - 4096 - 8192 - 16384:  More points give better freq resolution but worse time-resolution (e.g. rapidly changing spectrum']
});

db.hilite.insert({
	name			: 'filter_hp',
	type			: 'hilite',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 3, // we need to add window size to parameters in freq domain process
	parameter_file	: '.brk',
	command 		:['hilite','filter','1' ,'infile',' ',' '],
	range			:[0,1, 0,1],
	infile 			: 1,
	ifana			: true,
	extention 		: '.ana',
	time_vary		: [true, true],
	info 			:['High pass filter',
					  'Filter cutoff frequency ',
					  'Q Width of filter skirts, in Hz (Range: > 0), The smaller the Hz value for Q (i.e., the filters bandwidth), the narrower the pitch focus of the filter.',
					  'Analysis points: range from 128 - 256 - 512 - 1024 - 2048 - 4096 - 8192 - 16384:  More points give better freq resolution but worse time-resolution (e.g. rapidly changing spectrum']
});

db.hilite.insert({
	name			: 'filter_lp',
	type			: 'hilite',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 3, // we need to add window size to parameters in freq domain process
	parameter_file	: '.brk',
	command 		:['hilite','filter','3' ,'infile',' ',' '],
	range			:[0,1, 0,1],
	infile 			: 1,
	ifana			: true,
	extention 		: '.ana',
	time_vary		: [true, true],
	info 			:['Low pass filter',
					  'Filter cutoff frequency ',
					  'Q Width of filter skirts, in Hz (Range: > 0), The smaller the Hz value for Q (i.e., the filters bandwidth), the narrower the pitch focus of the filter.',
					  'Analysis points: range from 128 - 256 - 512 - 1024 - 2048 - 4096 - 8192 - 16384:  More points give better freq resolution but worse time-resolution (e.g. rapidly changing spectrum']
});

db.hilite.insert({
	name			: 'filter_bp',
	type			: 'hilite',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 4, // we need to add window size to parameters in freq domain process
	parameter_file	: '.brk',
	command 		:['hilite','filter','7' ,'infile',' ',' ',' '],
	range			:[0,1, 0,1],
	infile 			: 1,
	ifana			: true,
	extention 		: '.ana',
	time_vary		: [true, true, false],
	info 			:['Band pass filter',
					  'Filter cutoff frequency ',
					  'Limits of filter band',
					  'Q Width of filter skirts, in Hz (Range: > 0), The smaller the Hz value for Q (i.e., the filters bandwidth), the narrower the pitch focus of the filter.',
					  'Analysis points: range from 128 - 256 - 512 - 1024 - 2048 - 4096 - 8192 - 16384:  More points give better freq resolution but worse time-resolution (e.g. rapidly changing spectrum']
});

db.hilite.insert({
	name			: 'filter_notch',
	type			: 'hilite',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 3, // we need to add window size to parameters in freq domain process
	parameter_file	: '.brk',
	command 		:['hilite','filter','10' ,'infile',' ',' ',' '],
	range			:[0,1, 0,1],
	infile 			: 1,
	ifana			: true,
	extention 		: '.ana',
	time_vary		: [true, true, false],
	info 			:['filter notch',
					  'Filter cutoff frequency ',
					  'Limits of filter band',
					  'Q Width of filter skirts, in Hz (Range: > 0), The smaller the Hz value for Q (i.e., the filters bandwidth), the narrower the pitch focus of the filter.',
					  'Analysis points: range from 128 - 256 - 512 - 1024 - 2048 - 4096 - 8192 - 16384:  More points give better freq resolution but worse time-resolution (e.g. rapidly changing spectrum']
});

db.hilite.insert({
	name			: 'pluck',
	type			: 'hilite',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 2, // we need to add window size to parameters in freq domain process
	parameter_file	: '.brk',
	command 		:['hilite','pluck',' ','infile',' '],
	range			:[0,1],
	infile 			: 1,
	ifana			: true,
	extention 		: '.ana',
	time_vary		: [true],
	info 			:['Pluck: This procedure will introduce into the sound a somewhat random rhythm of short pulses. These pulses will attract the ear to the entering partials and whatever harmonic relationship they may have ­ such as the harmonic partials retained after running SPEC BARE. SPEC BARE + HILITE TRACE + HILITE PLUCK form an interesting combination of functions to play with, and HILITE PLUCK can also be used to bring out the partials which HILITE ARPEG makes more audible. ',
					  'Gain: Range: 1 to 1000 Amplitude gain applied to newly prominent spectral components. If the amplitude boost is large, such as increased by a gain of 10 or more, the entries may suggest a plucking of the entering partials.',
					  'Analysis points: range from 128 - 256 - 512 - 1024 - 2048 - 4096 - 8192 - 16384:  More points give better freq resolution but worse time-resolution (e.g. rapidly changing spectrum']
});

db.hilite.insert({
	name			: 'trace_loud',
	type			: 'hilite',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 2, // we need to add window size to parameters in freq domain process
	parameter_file	: '.brk',
	command 		:['hilite','trace','1','infile',' '],
	range			:[0,1],
	infile 			: 1,
	ifana			: true,
	extention 		: '.ana',
	time_vary		: [true],
	info 			:['Trace: Highlight n loudest partials, at each moment (window) in time. With non-noisy sources it is necessary to reduce the number of channels quite considerably to make any appreciable aural change to the source sound. Even the 10 loudest channels will retain a surprising amount of the original sound. The flip-side of this is that HILITE TRACE can be used to clean a sound, if a certain amount of data loss is not a problem (see below). ',
					  'Trace index: the number of spectral components to retain',
					  'Analysis points: range from 128 - 256 - 512 - 1024 - 2048 - 4096 - 8192 - 16384:  More points give better freq resolution but worse time-resolution (e.g. rapidly changing spectrum']
});

db.hilite.insert({
	name			: 'trace_low',
	type			: 'hilite',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 3, // we need to add window size to parameters in freq domain process
	parameter_file	: '.brk',
	command 		:['hilite','trace','2','infile',' ',' '],
	range			:[0,1],
	infile 			: 1,
	ifana			: true,
	extention 		: '.ana',
	time_vary		: [true],
	info 			:['Trace: Select loudest from above lofrq. With non-noisy sources it is necessary to reduce the number of channels quite considerably to make any appreciable aural change to the source sound. Even the 10 loudest channels will retain a surprising amount of the original sound. The flip-side of this is that HILITE TRACE can be used to clean a sound, if a certain amount of data loss is not a problem (see below). ',
					  'Trace index: the number of spectral components to retain',
					  'Reject all spectral data below lofrq',
					  'Analysis points: range from 128 - 256 - 512 - 1024 - 2048 - 4096 - 8192 - 16384:  More points give better freq resolution but worse time-resolution (e.g. rapidly changing spectrum']
});

db.hilite.insert({
	name			: 'trace_high',
	type			: 'hilite',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 3, // we need to add window size to parameters in freq domain process
	parameter_file	: '.brk',
	command 		:['hilite','trace','3','infile',' ',' '],
	range			:[0,1],
	infile 			: 1,
	ifana			: true,
	extention 		: '.ana',
	time_vary		: [true],
	info 			:['Trace: Select loudest from below hifrq. With non-noisy sources it is necessary to reduce the number of channels quite considerably to make any appreciable aural change to the source sound. Even the 10 loudest channels will retain a surprising amount of the original sound. The flip-side of this is that HILITE TRACE can be used to clean a sound, if a certain amount of data loss is not a problem (see below). ',
					  'Trace index: the number of spectral components to retain',
					  'Reject: Cutt spectral data below hifrq',
					  'Analysis points: range from 128 - 256 - 512 - 1024 - 2048 - 4096 - 8192 - 16384:  More points give better freq resolution but worse time-resolution (e.g. rapidly changing spectrum']
});


db.hilite.insert({
	name			: 'trace_between',
	type			: 'hilite',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 4, // we need to add window size to parameters in freq domain process
	parameter_file	: '.brk',
	command 		:['hilite','trace','4','infile',' ',' ',' '],
	range			:[0,1],
	infile 			: 1,
	ifana			: true,
	extention 		: '.ana',
	time_vary		: [true],
	info 			:['Trace: Select loudest from between lofrq and hifrq. With non-noisy sources it is necessary to reduce the number of channels quite considerably to make any appreciable aural change to the source sound. Even the 10 loudest channels will retain a surprising amount of the original sound. The flip-side of this is that HILITE TRACE can be used to clean a sound, if a certain amount of data loss is not a problem (see below). ',
					  'Trace index: the number of spectral components to retain',
					  'Low cutt',
					  'High cutt',
					  'Analysis points: range from 128 - 256 - 512 - 1024 - 2048 - 4096 - 8192 - 16384:  More points give better freq resolution but worse time-resolution (e.g. rapidly changing spectrum']
});


//hilite filter  1­4 infile outfile frq1 Q
db.blur.insert({
	name			: 'blur',
	type			: 'blur',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 2, // we need to add window size to parameters in freq domain process
	parameter_file	: '.brk',
	command 		:['blur','blur',' ' ,'infile',' ' ],
	range			:[10, 1000],
	infile 			: 1,
	ifana			: true,
	extention 		: '.ana',
	time_vary		: [true, false],
	info 			:['BLUR time-averages the spectrum. It blurs detail in the time dimension by interpolating between the spectral envelope values of the start and end windows blurring windows',
					  'Number of windows over which to average the spectrum: Range 10 - 1000',
					  'Analysis points: range from 128 - 256 - 512 - 1024 - 2048 - 4096 - 8192 - 16384:  More points give better freq resolution but worse time-resolution (e.g. rapidly changing spectrum']
});
//blur avrg infile outfile N
db.blur.insert({
	name			: 'avrg',
	type			: 'blur',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 2, // we need to add window size to parameters in freq domain process
	parameter_file	: '.brk',
	command 		:['blur','avrg',' ' ,'infile',' ' ],
	range			:[1, 1000],
	infile 			: 1,
	ifana			: true,
	extention 		: '.ana',
	time_vary		: [true, false],
	info 			:['Average spectral energy over N adjacent channels',
					  'N must be ODD and <= half the -N param used in the original analysis',
					  'Analysis points: range from 128 - 256 - 512 - 1024 - 2048 - 4096 - 8192 - 16384:  More points give better freq resolution but worse time-resolution (e.g. rapidly changing spectrum']
});

db.blur.insert({
	name			: 'chorus_m1',
	type			: 'blur',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 2, // we need to add window size to parameters in freq domain process
	parameter_file	: '.brk',
	command 		:['blur','chorus','1' ,'infile',' ' ],
	range			:[10, 1000],
	infile 			: 1,
	ifana			: true,
	extention 		: '.ana',
	time_vary		: [true, false],
	info 			:['Chorus (Randomise partial amplitudes) attempts to achieve a chorusing effect by randomising the amplitude and frequency values of the partials',
					  'Spread: maximum random scatter of partial-amps (Range 1-1028)',
					  'Analysis points: range from 128 - 256 - 512 - 1024 - 2048 - 4096 - 8192 - 16384:  More points give better freq resolution but worse time-resolution (e.g. rapidly changing spectrum']
});

db.blur.insert({
	name			: 'chorus_m2',
	type			: 'blur',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 2, // we need to add window size to parameters in freq domain process
	parameter_file	: '.brk',
	command 		:['blur','chorus','2' ,'infile',' ' ],
	range			:[1,4],
	infile 			: 1,
	ifana			: true,
	extention 		: '.ana',
	time_vary		: [true, false],
	info 			:['Chorus (Randomise partial frequencies) attempts to achieve a chorusing effect by randomising the amplitude and frequency values of the partials',
					  'Spread: maximum random scatter of partial-frqs (Range 1-4)',
					  'Analysis points: range from 128 - 256 - 512 - 1024 - 2048 - 4096 - 8192 - 16384:  More points give better freq resolution but worse time-resolution (e.g. rapidly changing spectrum']
});

db.blur.insert({
	name			: 'chorus_m5',
	type			: 'blur',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 3, // we need to add window size to parameters in freq domain process
	parameter_file	: '.brk',
	command 		:['blur','chorus','5' ,'infile',' ',' ' ],
	range			:[10, 1000, 1,4],
	infile 			: 1,
	ifana			: true,
	extention 		: '.ana',
	time_vary		: [true, false],
	info 			:['Chorus (Randomise partial Amps and frequencies) attempts to achieve a chorusing effect by randomising the amplitude and frequency values of the partials',
					  'Spread: maximum random scatter of partial-amps (Range 1-1028)',
					  'Spread: maximum random scatter of partial-frqs (Range 1-4)',
					  'Analysis points: range from 128 - 256 - 512 - 1024 - 2048 - 4096 - 8192 - 16384:  More points give better freq resolution but worse time-resolution (e.g. rapidly changing spectrum']
});
 
db.blur.insert({
	name			: 'drunk',
	type			: 'blur',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 5, // we need to add window size to parameters in freq domain process
	parameter_file	: '.brk',
	command 		:['blur','drunk',' ' ,'infile',' ',' ',' ','-z' ],
	range			:[10,1000, 10,1000, 10,1000, 10,1000],
	infile 			: 1,
	ifana			: true,
	extention 		: '.ana',
	time_vary		: [true, false, true, false],
	info 			:['modify sound by a drunken walk along analysis windows. Beginning at starttime, a user-defined point in the infile, SPEC DRUNK moves through the file reading windows, but jumping either forwards or backwards, from one window to another, in a random way. The size of these random jumps cannot be greater than range. This random process is known as a drunken walk. It proceeds until the specified duration of the output sound has been generated',
					  'Range: maximum step (in windows) for the drunken walk: <= 64',
					  'Start-time:the time (in seconds) in the file at which the walk should begin',
					  'Duration: required duration of the outfile after re-synthesis ­ it may be longer than infile',
					  'Eliminates zero steps (window-repeats) in the drunken walk',
					  'Analysis points: range from 128 - 256 - 512 - 1024 - 2048 - 4096 - 8192 - 16384:  More points give better freq resolution but worse time-resolution (e.g. rapidly changing spectrum']
});

db.blur.insert({
	name			: 'noise',
	type			: 'blur',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 2, // we need to add window size to parameters in freq domain process
	parameter_file	: '.brk',
	command 		:['blur','noise',' ' ,'infile',' ' ],
	range			:[0, 1],
	infile 			: 1,
	ifana			: true,
	extention 		: '.ana',
	time_vary		: [true],
	info 			:['NOISE – put noise in the spectrum in file. This technique can be used to cause sound material to emerge from obscurity to clarity, or v.vs.. Also, a carefully chosen noise factor can be used to colour a sound or soften its edges.',
					  'Noise Range 0 (no noise in spectrum) to 1 (spectrum saturated with noise)',
					  'Analysis points: range from 128 - 256 - 512 - 1024 - 2048 - 4096 - 8192 - 16384:  More points give better freq resolution but worse time-resolution (e.g. rapidly changing spectrum']
});

db.blur.insert({
	name			: 'scatter',
	type			: 'blur',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 5, // we need to add window size to parameters in freq domain process
	parameter_file	: '.brk',
	command 		:['blur','scatter',' ' ,'infile', ' ','-b','-r','-n'],
	range			:[0,1, 0,1, 0,1, 0,1],
	infile 			: 1,
	ifana			: true,
	extention 		: '.ana',
	time_vary		: [true, false],
	info 			:['SCATTER – randomly thin out the spectrum',
					  'Blocksize: frequency range of each block (default is width of 1 analysis channel. (Rounded internally to a multiple of channel width.)',
					  'number of blocks actually selected is randomised between 1 and keep: Range could be 10.766602 to 11025',
					  'Turn OFF normalisation of resulting sound',
					  'Analysis points: range from 128 - 256 - 512 - 1024 - 2048 - 4096 - 8192 - 16384:  More points give better freq resolution but worse time-resolution (e.g. rapidly changing spectrum']
});

db.blur.insert({
	name			: 'shuffle',
	type			: 'blur',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 3, // we need to add window size to parameters in freq domain process
	parameter_file	: '.brk',
	command 		:['blur','shuffle',' ' ,'infile',' ', ' '],
	range			:[0,1, 0,1],
	infile 			: 1,
	ifana			: true,
	extention 		: '.ana',
	time_vary		: [true, false],
	info 			:['SHUFFLE – shuffle order of analysis windows in file',
					  'Pattern: Example ABC CBA',
					  'Group Size: number of analysis windows corresponding to each letter of domain.',
					  'Analysis points: range from 128 - 256 - 512 - 1024 - 2048 - 4096 - 8192 - 16384:  More points give better freq resolution but worse time-resolution (e.g. rapidly changing spectrum']
});

db.blur.insert({
	name			: 'suppress',
	type			: 'blur',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 2, // we need to add window size to parameters in freq domain process
	parameter_file	: '.brk',
	command 		:['blur','suppress',' ' ,'infile',' ' ],
	range			:[10, 1000],
	infile 			: 1,
	ifana			: true,
	extention 		: '.ana',
	time_vary		: [true, false],
	info 			:['Suppress the N loudest partials (on a window by window basis)',
					  'The number of spectral components to reject',
					  'Analysis points: range from 128 - 256 - 512 - 1024 - 2048 - 4096 - 8192 - 16384:  More points give better freq resolution but worse time-resolution (e.g. rapidly changing spectrum']
});
//extend freeze 1 infile outfile outduration delay rand pshift ampcut starttime_of_freeze endtime gain [-sseed]
db.extend.insert({
	name			: 'freeze_m1',
	type			: 'extend',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 9, // we need to add window size to parameters in freq domain process
	parameter_file	: '.brk',
	command 		:['extend','freeze','1' ,'infile',' ',' ',' ',' ',' ',' ',' ',' ','-s'],
	range			:[0,1, 0,1, 0,1, 0,1, 0,1, 0,1, 0,1 , 0.1, 0.1],
	infile 			: 1,
	ifana			: false,
	extention 		: '.wav',
	time_vary		: [true,false,true,true,true,true,true,true,false],
	info 			:['Freeze a segment of a sound by iteration in a fluid manner',
					  'Desired: duration of resultant soundfile',
					  'Delay: The (average) delay between iterations: <= length of frozen segment.',
					  'Rand: Delaytime randomisation. Range: 0 to 1. Default: 0.',
					  'Pitch shift: Maximum of random pitchshift of each iteration. Range: 0 to 12 semitones. E.g., 2.5 = 2.5 semitones up or down.',
					  'Ampcut: Maximum of random amplitude reduction on each iteration. Range: 0 to 1. Default: 0.',
					  'Starttime_of_freeze: Time where the frozen segment begins in the original sound.',
					  'Endtime: Time where the frozen segment ends in the original sound. ',
					  'Gain: Adjustment to gain of frozen segment (range 0.25 to 4)',
					  'seed: The same seed number will produce identical output on rerun. Default: 0 – random sequence is different every time.']
});
//extend drunk 1 infile outfile outdur locus ambitus step clock [-ssplicelen] [-cclokrand] [-ooverlap] [-rseed]
db.extend.insert({
	name			: 'drunk_m1',
	type			: 'extend',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 9, // we need to add window size to parameters in freq domain process
	parameter_file	: '.brk',
	command 		:['extend','drunk','1' ,'infile',' ',' ',' ',' ',' ','-s','-c','-o','-r'],
	range			:[0,1, 0,1, 0,1, 0,1, 0,1, 0,1, 0,1 , 0.1, 0.1],
	infile 			: 1,
	ifana			: false,
	extention 		: '.wav',
	time_vary		: [true, false, true,true,true,true,true,true,false],
	info 			:['Drunken walk through source file: Splice segments of source file end-to-end; the start times of the segments in the source file are chosen by a drunken-walk through the source file. Another approach to segmentation, EXTEND DRUNK takes a series of segments selected from the infile and splices them together to form the outfile. The process starts at some time in the file, called the locus and selects a segment, randomly, from within an ambit. The length of ambit is 2 * ambitus, and stretches to both sides of the locus position. Once a segment is read, the program moves (randomly) to a new position in either direction, within the ambit, and not more than step from the start location of the previous segment, from where it starts the next read. This is called a random walk; hence the name drunk.',
					  'Out duration: total minimum duration of output soundfile (seconds)',
					  'Locus: time in infile at which the drunken walk occurs (seconds)',
					  'Ambitus: half-width of the region from within which the sound segments are read (seconds)',
					  'Step: maximum length of (random) step between segment reads (> 0.002 seconds); this always falls within the ambitus: it is automatically adjusted where too large',
					  'Clock: time between segment reads: this is the segment duration range(0.030000 to 10.490249)',
					  'Splice length: length in milliseconds of the splice slope (Default: 15ms)',
					  'clokrand: randomisation of clock ticks (Range: 0 to 1 Default: 0)',
					  'Overlap: mutual overlap of segments in output (Range: 0 to 0.9900 Default: 0)',
					  'Seed: any set value gives reproducible output']
});
//extend drunk 2 infile outfile outdur locus ambitus step clock mindrnk maxdrnk [-ssplicelen] [-cclokrand] [-ooverlap] [-rseed] [rseed] [-llosober] [-hhisober]
db.extend.insert({
	name			: 'drunk_m2',
	type			: 'extend',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 13, // we need to add window size to parameters in freq domain process
	parameter_file	: '.brk',
	command 		:['extend','drunk','2' ,'infile',' ',' ',' ',' ',' ',' ',' ','-s','-c','-o','-r','-l','-h'],
	range			:[0,1, 0,1, 0,1, 0,1, 0,1, 0,1, 0,1 , 0.1, 0.1, 0.1, 0.1, 0.1, 0.1],
	infile 			: 1,
	ifana			: false,
	extention 		: '.wav',
	time_vary		: [true,false,true,true,true,true,true,true,false,false,true,true,true],
	info 			:['Drunken walk through source file (Mode 2) Play soberly at holds: Splice segments of source file end-to-end; the start times of the segments in the source file are chosen by a drunken-walk through the source file. Another approach to segmentation, EXTEND DRUNK takes a series of segments selected from the infile and splices them together to form the outfile. The process starts at some time in the file, called the locus and selects a segment, randomly, from within an ambit. The length of ambit is 2 * ambitus, and stretches to both sides of the locus position. Once a segment is read, the program moves (randomly) to a new position in either direction, within the ambit, and not more than step from the start location of the previous segment, from where it starts the next read. This is called a random walk; hence the name drunk.',
					  'Out duration: total minimum duration of output soundfile (seconds)',
					  'Locus: time in infile at which the drunken walk occurs (seconds)',
					  'Ambitus: half-width of the region from within which the sound segments are read (seconds)',
					  'Step: maximum length of (random) step between segment reads. Range depends on infile length',
					  'Clock: time between segment reads: Range depends on infile length',
					  'Minimum number of clock ticks between sober plays (1 - 32767 Default: 10): ',
					  'Maximum number of clock ticks between sober plays (1 - 32767 Default: 30): ',
					  'Splice length: length in milliseconds of the splice slope (Default: 15ms)',
					  'Clok random: randomisation of clock ticks (Range: 0 to 1 Default: 0)',
					  'Overlap: mutual overlap of segments in output (Range: 0 to 0.9900 Default: 0)',
					  'Seed: any set value gives reproducible output',
					  'Lo sober: Min duration of sober plays (secs) (Range: >0 - infiledur+) If >= infiledur (default): sober plays all go to end of src',
					  'Hi sober: Max duration of sober plays (secs) (Range: >0 - infiledur+)']
});
//extend iterate 1 infile outfile outduration [-ddelay] [-rrand] [-pshift] [-aampcut] [-ffade] [-ggain] [-sseed]
db.extend.insert({
	name			: 'iterate_m1',
	type			: 'extend',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 7, // we need to add window size to parameters in freq domain process
	parameter_file	: '.brk',
	command 		:['extend','iterate','1' ,'infile', ' ','-d','-r','-p','-a','-f','-g','-s'],
	range			:[0,1, 0,1, 0,1, 0,1, 0,1, 0,1, 0,1, 0,1],
	infile 			: 1,
	ifana			: false,
	extention 		: '.wav',
	time_vary		: [true,false,true,true,true,true,true,true],
	info 			:['ITERATE – Repeat sound with subtle variations. EXTEND ITERATE was written as a way of achieving more natural sounding iterations of a soundfile by introducing a randomisation of the delay time between each iterated segment, and slight variations in pitch or amplitude between the segments, as would occur in a naturally iterating source (e.g., a rolled rr vocal sound). These randomisations can be selected (e.g., one might omit pitch variation, or not apply randomisation to the delay times), or applied in an exaggerated fashion, to achieve a number of different musical results.',
					  'Length in seconds of outfile',
					  'Delay: (average) delay between iterations in seconds (Default: length of infile))',
					  'Random: delay-time randomisation (Range: 0 to 1, Default: 0)',
					  'Shift: maximum random pitchshift of each iteration in semitones (Range: 0 to 12 semitones; e.g., 2.5 = 2.5 semitones up or down)',
					  'Ampcut maximum random amplitude reduction on each iteration (Range: 0 to 1, Default 0)',
					  'Fade (average) amplitude fade between iterations (Range: 0 to 1, Default 0)',
					  'Gain overall gain (Range: 0 to 1, Default: 0, which gives the best guess for no distortion)',
					  'Seed: the same seed number will produce identical output on rerun (Default: 0 – the random sequence is different every time)']
});

db.extend.insert({
	name			: 'baktobak',
	type			: 'extend',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 2, // we need to add window size to parameters in freq domain process
	parameter_file	: '.brk',
	command 		:['extend','baktobak',' ' ,'infile',' ', ' '],
	range			:[ 0,1, 0,1],
	infile 			: 1,
	ifana			: false,
	extention 		: '.wav',
	time_vary		: [true, true],
	info 			:['Join a time-reversed copy of the sound to a normal copy, in that order',
					  'join_time: time in infile where join-cut is to be made',
					  'Splice-length: length of the splice, in milliseconds']
});
//extend doublets infile outfile segdur repets [-s] 

db.extend.insert({
	name			: 'doublets',
	type			: 'extend',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 3, // we need to add window size to parameters in freq domain process
	parameter_file	: '.brk',
	command 		:['extend','doublets',' ','infile',' ',' ','-s'],
	range			:[ 0,1, 0,1, 0,1],
	infile 			: 1,
	ifana			: false,
	extention 		: '.wav',
	time_vary		: [true, true, false],
	info 			:['Divide a sound into segments that repeat, and splice them together. EXTEND DOUBLETS is a slice function, like the ones we are familiar with in the visual realm. The difference, here, in the temporal realm, is the repetition parameter. We specify the length of the segments (slices) and the number of times it repeats. What we hear depends, as usual, on the sonic material. With voices or conventional music, the effect will be like the needle getting stuck on a vinyl record: a short passage repeats. With more complex sonic material, we would get a pulsing, mechanical effect. Especially note that the length of the segment (segdur) parameter can vary over time.',
					  'Duration of segments',
					  'Option where outfile tries to stay synchronised with the infile range (2.000000 to 32.000000)']
});
db.extend.insert({
	name			: 'loop_m1',
	type			: 'extend',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 6, // we need to add window size to parameters in freq domain process
	parameter_file	: '.brk',
	command 		:['extend','loop','1','infile',' ',' ',' ','-w','-s','-b'],
	range			:[ 0,1, 0,1, 0,1],
	infile 			: 1,
	ifana			: false,
	extention 		: '.wav',
	time_vary		: [true, true, false],
	info 			:['Mode 1: Segment advances in soundfile until soundfile is exhausted. The key feature of this process is that it joins together, end-to-end, a series of segments taken from the file, each with a splice slope to avoid clicks. These segments are all of the same length, so one way or another, the result may appear to have some degree of regular pulsation. This does not (usually) result from the presence of splices, but rather is a perceptual result caused by the repetition of sonic material. The most salient parameters are step and len. Step is the timestep in the sourcefile between the start of one selected segment and the next. If the step is zero, the selected segment will simply be repeated. If the step is > 0 but smaller than the segment length, the selected segments will share much in common, but each will begin at a point in the sourcefile a little later than the last, producing a progressing echo effect. The outfile will be longer than the infile. If the step is larger than the segment length, the process will leap through the file, omitting bits of it, and rapidly get to the end. The result will be shorter than the infile.',
					  'start: time (in seconds) in infile at which the looping process begins',
					  'len: length of looped segment (in milliseconds)',
					  'Step: If the step is zero, the selected segment will simply be repeated.',
					  'Splen: length of splice (in milliseconds) (Default: 25ms) range 1.000000 to 5000.000000',
					  'Scat: make step advance irregularly, within the timeframe given by scat. The scat parameter randomises the length of step (within a small range), producing a less mechanical result. The scat parameter randomises the length of step (within a small range), producing a less mechanical result',
					  'Play from beginning of infile (even if looping doesnt begin there)']
});
db.extend.insert({
	name			: 'loop_m2',
	type			: 'extend',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 7, // we need to add window size to parameters in freq domain process
	parameter_file	: '.brk',
	command 		:['extend','loop','2','infile',' ',' ', ' ','-l', '-w','-s','-b'],
	range			:[ 0,1, 0,1, 0,1, 0,1, 0,1, 0,1, 0,1],
	infile 			: 1,
	ifana			: false,
	extention 		: '.wav',
	time_vary		: [false, false, false, false, false, false, false],
	info 			:['Mode 2: Specify outfile duration (shortened if looping reaches end of infile) The key feature of this process is that it joins together, end-to-end, a series of segments taken from the file, each with a splice slope to avoid clicks. These segments are all of the same length, so one way or another, the result may appear to have some degree of regular pulsation. This does not (usually) result from the presence of splices, but rather is a perceptual result caused by the repetition of sonic material. The most salient parameters are step and len. Step is the timestep in the sourcefile between the start of one selected segment and the next. If the step is zero, the selected segment will simply be repeated. If the step is > 0 but smaller than the segment length, the selected segments will share much in common, but each will begin at a point in the sourcefile a little later than the last, producing a progressing echo effect. The outfile will be longer than the infile. If the step is larger than the segment length, the process will leap through the file, omitting bits of it, and rapidly get to the end. The result will be shorter than the infile.',
					  'Duration of outfile required (in seconds)',
					  'Start: time (in seconds) in infile at which the looping process begins',
					  'Len: length of looped segment (in milliseconds)',
					  'Step: advance in infile from the start of one loop to the next (in milliseconds)',
					  'Length of splice (in milliseconds) (Default: 25ms)',
					  'Scat: make step advance irregularly, within the timeframe given by scat. The scat parameter randomises the length of step (within a small range), producing a less mechanical result. The scat parameter randomises the length of step (within a small range), producing a less mechanical result',
					  'Play from beginning of infile (even if looping doesnt begin there']
});
db.extend.insert({
	name			: 'loop_m3',
	type			: 'extend',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 7, // we need to add window size to parameters in freq domain process
	parameter_file	: '.brk',
	command 		:['extend','loop','3','infile',' ',' ', ' ','-l', '-w','-s','-b'],
	range			:[ 0,1,, 0,1, 0,1, 0,1, 0,1, 0,1, 0,1],
	infile 			: 1,
	ifana			: false,
	extention 		: '.wav',
	time_vary		: [false, false, false, false, false, false, false],
	info 			:['Mode 3: Specify number of loop repeats (reduced if looping reaches end of infile) The key feature of this process is that it joins together, end-to-end, a series of segments taken from the file, each with a splice slope to avoid clicks. These segments are all of the same length, so one way or another, the result may appear to have some degree of regular pulsation. This does not (usually) result from the presence of splices, but rather is a perceptual result caused by the repetition of sonic material. The most salient parameters are step and len. Step is the timestep in the sourcefile between the start of one selected segment and the next. If the step is zero, the selected segment will simply be repeated. If the step is > 0 but smaller than the segment length, the selected segments will share much in common, but each will begin at a point in the sourcefile a little later than the last, producing a progressing echo effect. The outfile will be longer than the infile. If the step is larger than the segment length, the process will leap through the file, omitting bits of it, and rapidly get to the end. The result will be shorter than the infile.',
					  'Cnt: number of loop repeats required',
					  'Start: time (in seconds) in infile at which the looping process begins',
					  'Len: length of looped segment (in milliseconds)',
					  'Step: advance in infile from the start of one loop to the next (in milliseconds)',
					  'Length of splice (in milliseconds) (Default: 25ms)',
					  'Scat: make step advance irregularly, within the timeframe given by scat. The scat parameter randomises the length of step (within a small range), producing a less mechanical result ',
					  'Play from beginning of infile (even if looping doesnt begin there']
});
db.extend.insert({
	name			: 'scramble_m1',
	type			: 'extend',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 7, // we need to add window size to parameters in freq domain process
	parameter_file	: '.brk',
	command 		:['extend','scramble','1','infile',' ',' ', ' ','-w', '-s','-b','-e'],
	range			:[ 0,1, 0,1, 0,1, 0,1, 0,1, 0,1, 0,1],
	infile 			: 1,
	ifana			: false,
	extention 		: '.wav',
	time_vary		: [false, false, false, false, false, false, false],
	info 			:['Mode 1: Cut random chunks from infile and splice end to end. Mode 1 takes the infile, chooses a random chunk of it, and then chooses another random chunk of it which may overlap with the first choice, then another chunk which may overlap with either of the other two ... etc. Then it splices them all together. Thus, any bits of the file may be repeated quite quickly if overlapping material is selected in consecutive chunks, and some bits may not appear at all if never randomly selected. The size of the chunks will be a random length somewhere between minseglen and maxseglen.',
					  'Minseglen: minimum chunksize to cut',
					  'Maxseglen: maximum chunksize to cut (Range: 0.045 to length of infile – must be > minseglen)',
					  'Outdur: duration of outfile required (> maxseglen)',
					  'Splen: duration of splice in milliseconds Default: 25ms range (1.000000 to 5000.000000))',
					  'Seed: the same seed number will produce identical output on rerun (Default: 0, random sequence is different every time) ',
					  'Force start of outfile to be beginning of infile',
					  'Force end of outfile to be end of infile']
});
db.extend.insert({
	name			: 'scramble_m2',
	type			: 'extend',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 7, // we need to add window size to parameters in freq domain process
	parameter_file	: '.brk',
	command 		:['extend','scramble','2','infile',' ',' ', ' ','-w', '-s','-b','-e'],
	range			:[ 0,1, 0,1, 0,1, 0,1, 0,1, 0,1, 0,1],
	infile 			: 1,
	ifana			: false,
	extention 		: '.wav',
	time_vary		: [false, false, false, false, false, false, false],
	info 			:['Mode 2: Cut infile into random chunks and rearrange; repeat differently, etc. Mode 2, cuts the entire file into random-length chunks which do not overlap. It arranges these at random. The process is then repeated, but the random cuts are of course in different positions in the file. Consequently, the entire file is used, and used only once, before the process starts to use the file again. In Mode 2 an average chunksize is specified plus a random factor (scatter). The formula which shows what the maximum scatter factor can be reveals that Mode 2 can be used to make chunks which vary a great deal in length. For example, if the infile is 2 seconds long and seglen is 0.3, the maximum value for scatter will be 6.0 (rounded down). (This value was accepted – and worked – even with an outdur of 4.0.)',
					  'Seglen: average chunksize to cut ',
					  'Scatter: randomisation of chunk lengths (>= 0) ',
					  'Outdur: duration of outfile required (> maxseglen)',
					  'Splen: duration of splice in milliseconds Default: 25ms range (1.000000 to 5000.000000))',
					  'Seed: the same seed number will produce identical output on rerun (Default: 0, random sequence is different every time) ',
					  'Force start of outfile to be beginning of infile',
					  'Force end of outfile to be end of infile']
});

db.extend.insert({
	name			: 'zigzag',
	type			: 'extend',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 7, // we need to add window size to parameters in freq domain process
	parameter_file	: '.brk',
	command 		:['extend','zigzag','1','infile',' ',' ',' ',' ','-s','-m','-r'],
	range			:[ 0,1, 0,1, 0,1, 0,1, 0,1, 0,1, 0,1],
	infile 			: 1,
	ifana			: false,
	extention 		: '.wav',
	time_vary		: [false, false, false, false, false, false, false],
	info 			:['Read soundfile backwards and forwards',
					  'Start: together with...  ',
					  'End: define interval in which times zigzag  ',
					  'Duration: duration of output',
					  'Minzig: min acceptable time between successive zigzag timepoints. ',
					  'Splicelen: in MILLIsecs (Default 25ms). ',
					  'Maxzig: max acceptable time between successive zigzag timepoints',
					  'Seed number to generate a replicable random sequence. (>0) entering same number on next program run, generates same sequence. (Default: (0) random sequence is different every time)']
});
//extend zigzag 1 infile outfile start end dur minzig [-ssplicelen] [-mmaxzig] [-rseed]

db.stretch.insert({
	name			: 'time',
	type			: 'stretch',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 2, // we need to add window size to parameters in freq domain process
	parameter_file	: '.brk',
	command 		:['stretch','time','1','infile',' '],
	range			:[ 0.000001,100],
	infile 			: 1,
	ifana			: true,
	extention 		: '.ana',
	time_vary		: [true],
	info 			:['Stretch/Compress time duration of infile without changing the pitch',
					  'Stretch:  1 is Normal < 1 Stretch > 1 Compress',
					  'Analysis points: range from 128 - 256 - 512 - 1024 - 2048 - 4096 - 8192 - 16384:  More points give better freq resolution but worse time-resolution (e.g. rapidly changing spectrum']
});
//stretch spectrum mode infile outfile frq_divide maxstretch exponent -ddepth
db.stretch.insert({
	name			: 'spectrum_m1',
	type			: 'stretch',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 5, // we need to add window size to parameters in freq domain process
	parameter_file	: '.brk',
	command 		:['stretch','spectrum','1','infile',' ',' ',' ','-d'],
	range			:[ 0,1, 0,1, 0,1, 0,1],
	infile 			: 1,
	ifana			: true,
	extention 		: '.ana',
	time_vary		: [true],
	info 			:['Stretch/Compress frequency components above the frq_divide. The STRETCH SPECTRUM process is a means to warp the spectrum of a sound. For example, a harmonic sound may become inharmonic, in a controllable way. (It is derived from CDPs SPECE.)The STRETCH SPECTRUM process gives us control over the way in which we stretch the spectrum of a sound. It should be used for stretching as opposed to shifting the spectrum of a sound. The stretching operation begins at the frq_divide and proceeds upwards. The main thing to appreciate regarding STRETCH SPECTRUM is that the stretch factor is scaled across the frequencies, beginning at 1 at the frq_divide (no stretch) and gradually increasing or decreasing until reaching maxstretch of the uppermost channel in which a frequency is found (not > Nyquist). Overall, it is rather like stretching or compressing a rubber sheet – the whole sheet is warped by the stretching process and the partials are thereby moved.',
					  'Frq_divide: the frequency above or below which spectral stretching takes place',
					  'Maxstretch: the transposition ratio of the topmost spectral components',
					  'Exponent: specifies the type of stretching required (> 0)',
					  'Depth: stretch effect on source (from 0 (no effect) to 1 (full effect)',
					  'Analysis points: range from 128 - 256 - 512 - 1024 - 2048 - 4096 - 8192 - 16384:  More points give better freq resolution but worse time-resolution (e.g. rapidly changing spectrum']
});

db.stretch.insert({
	name			: 'spectrum_m2',
	type			: 'stretch',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 5, // we need to add window size to parameters in freq domain process
	parameter_file	: '.brk',
	command 		:['stretch','spectrum','2','infile',' ',' ',' ','-d'],
	range			:[ 0,1, 0,1, 0,1, 0,1],
	infile 			: 1,
	ifana			: true,
	extention 		: '.ana',
	time_vary		: [true],
	info 			:['Stretch/Compress frequency components bellow the frq_divide. The STRETCH SPECTRUM process is a means to warp the spectrum of a sound. For example, a harmonic sound may become inharmonic, in a controllable way. (It is derived from CDPs SPECE.)The STRETCH SPECTRUM process gives us control over the way in which we stretch the spectrum of a sound. It should be used for stretching as opposed to shifting the spectrum of a sound. The stretching operation begins at the frq_divide and proceeds upwards. The main thing to appreciate regarding STRETCH SPECTRUM is that the stretch factor is scaled across the frequencies, beginning at 1 at the frq_divide (no stretch) and gradually increasing or decreasing until reaching maxstretch of the uppermost channel in which a frequency is found (not > Nyquist). Overall, it is rather like stretching or compressing a rubber sheet – the whole sheet is warped by the stretching process and the partials are thereby moved.',
					  'Frq_divide: the frequency above or below which spectral stretching takes place',
					  'Maxstretch: the transposition ratio of the topmost spectral components',
					  'Exponent: specifies the type of stretching required (> 0)',
					  'Depth: stretch effect on source (from 0 (no effect) to 1 (full effect)',
					  'Analysis points: range from 128 - 256 - 512 - 1024 - 2048 - 4096 - 8192 - 16384:  More points give better freq resolution but worse time-resolution (e.g. rapidly changing spectrum']
});

db.focus.insert({
	name			: 'accu',
	type			: 'focus',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 3, // we need to add window size to parameters in freq domain process
	parameter_file	: '.brk',
	command 		:['focus','accu',' ' ,'infile','-d', '-g'],
	range			:[ 0.001, 0.6 ,-5.6, 5.0],
	infile 			: 1,
	ifana			: true,
	extention 		: '.ana',
	time_vary		: [true, true],
	info 			:['SUSTAIN EACH SPECTRAL BAND, UNTIL LOUDER DATA APPEARS IN THAT BAND',
					  'Decay: sustained channel data decays by factor DECAY per sec. Range : 0.001000 to 0.5(->1)',
					  'Gliss: sustained channel data glisses at GLIS 8vas per sec. Approx Range : -5 to 5 : Default 0',
					  'Analysis points: range from 128 - 256 - 512 - 1024 - 2048 - 4096 - 8192 - 16384:  More points give better freq resolution but worse time-resolution (e.g. rapidly changing spectrum']
});

db.focus.insert({
	name			: 'exag',
	type			: 'focus',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 2, // we need to add window size to parameters in freq domain process
	parameter_file	: '.brk',
	command 		:['focus','exag',' ' ,'infile',' '],
	range			:[ 0.1, 1000.0],
	infile 			: 1,
	ifana			: true,
	extention 		: '.ana',
	time_vary		: [true],
	info 			:['FOCUS EXAG can be used to make a sound thinner and pitched, just as a bandpass filter can create pitches within a complex sound. Working in the spectral domain, it does this by manipulating frequency regions of high amplitude, otherwise known as formantsD',
					  'Exaggeration – < 1 widens troughs and narrows formants (focuses on the peaks); > 1 narrows troughs and widens formants (diffusing the peaks). Range: 0.00100 to 1000.',
					  'Analysis points: range from 128 - 256 - 512 - 1024 - 2048 - 4096 - 8192 - 16384:  More points give better freq resolution but worse time-resolution (e.g. rapidly changing spectrum']
});

db.focus.insert({
	name			: 'focus',
	type			: 'focus',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 2, // we need to add window size to parameters in freq domain process
	parameter_file	: '.brk',
	command 		:['focus','focus',' ' ,'infile','-f', ' ', ' ', '-b', '-t'],
	range			:[ 1, 1, 1, 16, 1, 5000, 20, 22000, 20, 22000],
	infile 			: 1,
	ifana			: true,
	extention 		: '.ana',
	time_vary		: [false, true, true, true, true],
	info 			:['This program searches out the most prominent and persistent spectral peaks in a sound, creates a set of filters centred on those peaks, and then filters the sound with those filters. This focuses the spectral energy of the sound around those persistent spectral peaks.',
					  'Extract formant envelope linear frequency-wise, using 1 point for every N equally-spaced frequency-channels',
					  'pk (maximum) number of peaks to find Range 1 – 16',
					  'bandwidth of peak-centred filters, in octaves Range: 1 - 12',
					  'bottom frequency at which to start the search for peaks',
					  'top frequency at which to end the search for peaks',
					  'Analysis points: range from 128 - 256 - 512 - 1024 - 2048 - 4096 - 8192 - 16384:  More points give better freq resolution but worse time-resolution (e.g. rapidly changing spectrum']
});

db.focus.insert({
	name			: 'fold',
	type			: 'focus',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 3, // we need to add window size to parameters in freq domain process
	parameter_file	: '.brk',
	command 		:['focus','fold',' ' ,'infile',' ', ' ', '-x'],
	range			:[ 20, 22000, 20, 22000, 1, 1,],
	infile 			: 1,
	ifana			: true,
	extention 		: '.ana',
	time_vary		: [true, true, false],
	info 			:['This process octave transposes all the analysis data of a sound into a specified frequency range. Anything below the range is octave-transposed up until it is in (the bottom of) the range. Anything above gets octave-transposed down until it is in (the top of) the range.',
					  'lowest frequency of range into which the spectrum is folded',
					  'hifrq highest frequency of range into which the spectrum is folded',
					  'fuller spectrum',
					  'Analysis points: range from 128 - 256 - 512 - 1024 - 2048 - 4096 - 8192 - 16384:  More points give better freq resolution but worse time-resolution (e.g. rapidly changing spectrum']
});

db.focus.insert({
	name			: 'step',
	type			: 'focus',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 2, // we need to add window size to parameters in freq domain process
	parameter_file	: '.brk',
	command 		:['focus','step',' ' ,'infile',' '],
	range			:[ 0.0, 10000, ],
	infile 			: 1,
	ifana			: true,
	extention 		: '.ana',
	time_vary		: [false],
	info 			:['Automatic FREEZE of the spectrum at intervals of timestep, similar to the familiar sample-hold effect. The main thing here is that the time intervals are regular. Thus the spectrum of the sound, which normally is constantly changing, is frozen with the values at the beginning of each timestep.',
					  'Timestep: range 0.046440 to 44.977051. The value here is rounded internally to a multiple of analysis frame time.',
					  'Analysis points: range from 128 - 256 - 512 - 1024 - 2048 - 4096 - 8192 - 16384:  More points give better freq resolution but worse time-resolution (e.g. rapidly changing spectrum']
});

db.formants.insert({
	name			: 'put_m1',
	type			: 'formants',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 5, // we need to add window size to parameters in freq domain process
	parameter_file	: '.brk',
	command 		:['formants','put','1','infile','-l','-h','-g'], 
	range			:[0,1, 0,1, 0,1],
	infile 			: 2,
	ifana			: true,
	extention 		: '.for',
	time_vary		: [true, false],
	info 			:['Impose spectral envelope in a formant file on spectrum: Linear pitchwise. Formant envelope REPLACES the sounds own formant envelope',
					  'Low frequency, below which spectrum is set to zero ',
					  'High frequency, above which spectrum is set to zero',
					  'Adjustment to spectrum loudness (normally < 1.0)',					  
					  'Formant resolution Linear pitchwise.With linear pitchwise, the frequency bands actually get wider as one goes higher. For example, if linear pitchwise is set at N = 12, the octave between 220Hz and 440 Hz is divided into 12 semitones; if N = 3, the octave is divided into 4 minor thirds (each of slightly increasing bandwidth). In the octave between 2200Hz and 4400Hz these same divisions will consist in considerably wider bandwidths. In other words, linear pitchwise is working via ratios with the logarithmic relationship of pitches.: ',
					  'Analysis points: range from 128 - 256 - 512 - 1024 - 2048 - 4096 - 8192 - 16384:  More points give better freq resolution but worse time-resolution (e.g. rapidly changing spectrum']
//formants put 1 infile fmntfile outfile [-i] [-llof] [-hhif] [-ggain]

});

db.formants.insert({
	name			: 'put_m2',
	type			: 'formants',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 5, // we need to add window size to parameters in freq domain process
	parameter_file	: '.brk',
	command 		:['formants','put','2','infile','-l','-h','-g'], 
	range			:[0,1, 0,1, 0,1],
	infile 			: 2,
	ifana			: true,
	extention 		: '.for',
	time_vary		: [true, false],
	info 			:['Impose spectral envelope in a formant file on spectrum. New formant envelope is IMPOSED ON TOP OF the sounds own formant envelope The presence of the spectral trajectory data in the fmntfile makes it possible to impose the same data on more than one file. There are several musical purposes which can be achieved with this process: simply as a means to link/unify musical data to re-colour a sound with the timbral characteristics of another to give one sound the meanings associated with another sound (this applies especially to recognisable sounds from the world around us)',
					  'Low frequency, below which spectrum is set to zero ',
					  'High frequency, above which spectrum is set to zero',
					  'Adjustment to spectrum loudness (normally < 1.0)',
					  'Formant resolution Linear pitchwise.With linear pitchwise, the frequency bands actually get wider as one goes higher. For example, if linear pitchwise is set at N = 12, the octave between 220Hz and 440 Hz is divided into 12 semitones; if N = 3, the octave is divided into 4 minor thirds (each of slightly increasing bandwidth). In the octave between 2200Hz and 4400Hz these same divisions will consist in considerably wider bandwidths. In other words, linear pitchwise is working via ratios with the logarithmic relationship of pitches.: ',
					  'Analysis points: range from 128 - 256 - 512 - 1024 - 2048 - 4096 - 8192 - 16384:  More points give better freq resolution but worse time-resolution (e.g. rapidly changing spectrum']
});
//formants vocode infile infile2 outfile -fN | -pN [-llof] [-hhif] [-ggain]
db.formants.insert({
	name			: 'vocode_m1',
	type			: 'formants',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 5, // we need to add window size to parameters in freq domain process
	parameter_file	: '.brk',
	command 		:['formants','vocode',' ','infile','-f','-l','-h','-g'], 
	range			:[0,1, 0,1, 0,1],
	infile 			: 2,
	ifana			: true,
	extention 		: '.ana',
	time_vary		: [true,false,false,false],
	info 			:['Impose spectral envelope of 2nd sound onto 1st sound. Linear frequency-wise.',
					  'Extract formant envelope linear frequency-wise, using 1 point for every N equally spaced frequency channels ',
					  'Low frquency, below which data is filtered out',
					  'High frquency, above which data is filtered out',
					  'Amplitude adjustment to the signal (normally < 1.0)',
					  'Analysis points: range from 128 - 256 - 512 - 1024 - 2048 - 4096 - 8192 - 16384:  More points give better freq resolution but worse time-resolution (e.g. rapidly changing spectrum']
});
//formants vocode infile infile2 outfile -fN | -pN [-llof] [-hhif] [-ggain]
db.formants.insert({
	name			: 'vocode_m2',
	type			: 'formants',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 5, // we need to add window size to parameters in freq domain process
	parameter_file	: '.brk',
	command 		:['formants','vocode',' ','infile','-p','-l','-h','-g'], 
	range			:[0,1, 0,1, 0,1, 0,1],
	infile 			: 2,
	ifana			: true,
	extention 		: '.ana',
	time_vary		: [true,false,false,false],
	info 			:['Impose spectral envelope of 2nd sound onto 1st sound. Extract formant envelope linear pitchwise, using N equally-spaced pitch-bands per octave',
					  'Extract formant envelope linear pitchwise, using N equally-spaced pitch-bands per octave ',
					  'Low frquency, below which data is filtered out',
					  'High frquency, above which data is filtered out',
					  'Amplitude adjustment to the signal (normally < 1.0)',
					  'Analysis points: range from 128 - 256 - 512 - 1024 - 2048 - 4096 - 8192 - 16384:  More points give better freq resolution but worse time-resolution (e.g. rapidly changing spectrum']
});

db.combine.insert({
	name			: 'cross',
	type			: 'combine',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 2, // we need to add window size to parameters in freq domain process
	parameter_file	: '.brk',
	command 		:['combine','cross',' ','infile','-i' ], 
	range			:[0, 1],
	infile 			: 2,
	ifana			: true,
	extention 		: '.ana',
	time_vary		: [true, false],
	info 			:['REPLACE SPECTRAL AMPLITUDES OF 1st FILE WITH THOSE OF 2nd',
					  'Degree of replacement: range( 0 - 1) ',
					  'Analysis points: range from 128 - 256 - 512 - 1024 - 2048 - 4096 - 8192 - 16384:  More points give better freq resolution but worse time-resolution (e.g. rapidly changing spectrum']


});

db.combine.insert({
	name			: 'diff',
	type			: 'combine',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 3, // we need to add window size to parameters in freq domain process
	parameter_file	: '.brk',
	command 		:['combine','diff',' ','infile','-c', '-a' ], 
	range			:[0, 1],
	infile 			: 2,
	ifana			: true,
	extention 		: '.ana',
	time_vary		: [true, false],
	info 			:['One spectrum is subtracted from another on a channel-by- channel basis (weighted by crossover). If amplitude in any channel goes negative, you can opt whether or not to retain the negative amplitudes.',
					  'Crossover is the amount of 2nd spectrum which is subtracted from the 1st (Range 0 to 1) ',
					  'Retains any subzero amplitudes produced (Default: sets these to zero)',
					  'Analysis points: range from 128 - 256 - 512 - 1024 - 2048 - 4096 - 8192 - 16384:  More points give better freq resolution but worse time-resolution (e.g. rapidly changing spectrum']


});

db.combine.insert({
	name			: 'interleave',
	type			: 'combine',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 2, // we need to add window size to parameters in freq domain process
	parameter_file	: '.brk',
	command 		:['combine','interleave',' ','infile',' ' ], 
	range			:[0, 1],
	infile 			: 2,
	ifana			: true,
	extention 		: '.ana',
	time_vary		: [true, false],
	info 			:['Interleaves N spectra from N analysis files, thereby constructing a new analysis file as output. The spectral characteristics of several sounds are thus amalgamated into one new sound. The degree to which the original sounds are retained depends on the number of analysis windows used. With very small values for leafsize, the various sounds are mingled quite thoroughly and relatively smoothly – relative to the nature of the input sounds, though a somewhat grainy effect may result. With larger values for leafsize, say 8, 10, 20 or more, more of each component sound is heard in each leaf and the result is more like a churning or pulsating effect as the new soundfile oscillates among the sound material in the various source soundfiles.',
					  'Leafsize number of analysis windows in each leaf. A leafsize is simply a specified group of analysis windows. If leafsize is 1, then the windows from each file are interleaved one at a time. If leafsize is 2, then the windows from each file are interleaved two at a time, etc. Larger leafsize retains more recognisable chunks of the original sounds. ',
					  'Analysis points: range from 128 - 256 - 512 - 1024 - 2048 - 4096 - 8192 - 16384:  More points give better freq resolution but worse time-resolution (e.g. rapidly changing spectrum']
});

db.combine.insert({
	name			: 'max',
	type			: 'combine',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 2, // we need to add window size to parameters in freq domain process
	parameter_file	: '.brk',
	command 		:['combine','max',' ','infile',' ' ], 
	range			:[0, 1],
	infile 			: 2,
	ifana			: true,
	extention 		: '.ana',
	time_vary		: [false],
	info 			:['COMBINE MAX studies the data in all the input analysis files. For each channel it retains only the single loudest spectral component among all the input files. In spite of the loss of the other components, the sound often remains the same to a remarkable degree.',
					  'Empty Parameter ',
					  'Analysis points: range from 128 - 256 - 512 - 1024 - 2048 - 4096 - 8192 - 16384:  More points give better freq resolution but worse time-resolution (e.g. rapidly changing spectrum']
});

db.combine.insert({
	name			: 'mean_m1',
	type			: 'combine',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 5, // we need to add window size to parameters in freq domain process
	parameter_file	: '.brk',
	command 		:['combine','mean','1','infile','-l','-h','-c','-z'], 
	range			:[0, 1],
	infile 			: 2,
	ifana			: true,
	extention 		: '.ana',
	time_vary		: [false, false, false, false, false],
	info 			:['Mean channel amp of 2 files : mean of two pitches. This program takes 2 input sounds and calculates the average of the 2 signals, spectral window by spectral window. The average in loudness between, for example, two speech sounds, should reach some vague mean between the formants of the speech components being used. The frequency average is altogether more strange. It may, for example, convert harmonic into inharmonic spectra. Seriously wierd.',
					  'Low frequency limit of channels to look at ',
					  'High frequency limit of channels to look at ',
					  'Number of significant channels to compare. Default: ALL within range 2.000000 to 4097.000000 ',
					  'Zeroes channels OUTSIDE the frequency range specified ',
					  'Analysis points: range from 128 - 256 - 512 - 1024 - 2048 - 4096 - 8192 - 16384:  More points give better freq resolution but worse time-resolution (e.g. rapidly changing spectrum']
});

db.combine.insert({
	name			: 'mean_m2',
	type			: 'combine',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 5, // we need to add window size to parameters in freq domain process
	parameter_file	: '.brk',
	command 		:['combine','mean','2','infile','-l','-h','-c','-z'], 
	range			:[0, 1],
	infile 			: 2,
	ifana			: true,
	extention 		: '.ana',
	time_vary		: [false, false, false, false, false],
	info 			:['Mean channel amp of 2 files : mean of two frequencies. This program takes 2 input sounds and calculates the average of the 2 signals, spectral window by spectral window. The average in loudness between, for example, two speech sounds, should reach some vague mean between the formants of the speech components being used. The frequency average is altogether more strange. It may, for example, convert harmonic into inharmonic spectra. Seriously wierd.',
					  'Low frequency limit of channels to look at ',
					  'High frequency limit of channels to look at ',
					  'Number of significant channels to compare. Default: ALL within range 2.000000 to 4097.000000 ',
					  'Zeroes channels OUTSIDE the frequency range specified ',
					  'Analysis points: range from 128 - 256 - 512 - 1024 - 2048 - 4096 - 8192 - 16384:  More points give better freq resolution but worse time-resolution (e.g. rapidly changing spectrum']
});

db.combine.insert({
	name			: 'mean_m3',
	type			: 'combine',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 5, // we need to add window size to parameters in freq domain process
	parameter_file	: '.brk',
	command 		:['combine','mean','3','infile','-l','-h','-c','-z'], 
	range			:[0, 1],
	infile 			: 2,
	ifana			: true,
	extention 		: '.ana',
	time_vary		: [false, false, false, false, false],
	info 			:['Channel amp from file 1 : mean of two pitches. This program takes 2 input sounds and calculates the average of the 2 signals, spectral window by spectral window. The average in loudness between, for example, two speech sounds, should reach some vague mean between the formants of the speech components being used. The frequency average is altogether more strange. It may, for example, convert harmonic into inharmonic spectra. Seriously wierd.',
					  'Low frequency limit of channels to look at ',
					  'High frequency limit of channels to look at ',
					  'Number of significant channels to compare. Default: ALL within range 2.000000 to 4097.000000 ',
					  'Zeroes channels OUTSIDE the frequency range specified ',
					  'Analysis points: range from 128 - 256 - 512 - 1024 - 2048 - 4096 - 8192 - 16384:  More points give better freq resolution but worse time-resolution (e.g. rapidly changing spectrum']
});

db.combine.insert({
	name			: 'mean_m4',
	type			: 'combine',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 5, // we need to add window size to parameters in freq domain process
	parameter_file	: '.brk',
	command 		:['combine','mean','4','infile','-l','-h','-c','-z'], 
	range			:[0, 1],
	infile 			: 2,
	ifana			: true,
	extention 		: '.ana',
	time_vary		: [false, false, false, false, false],
	info 			:['Channel amp from file 1 : mean of two frequencies. This program takes 2 input sounds and calculates the average of the 2 signals, spectral window by spectral window. The average in loudness between, for example, two speech sounds, should reach some vague mean between the formants of the speech components being used. The frequency average is altogether more strange. It may, for example, convert harmonic into inharmonic spectra. Seriously wierd.',
					  'Low frequency limit of channels to look at ',
					  'High frequency limit of channels to look at ',
					  'Number of significant channels to compare. Default: ALL within range 2.000000 to 4097.000000 ',
					  'Zeroes channels OUTSIDE the frequency range specified ',
					  'Analysis points: range from 128 - 256 - 512 - 1024 - 2048 - 4096 - 8192 - 16384:  More points give better freq resolution but worse time-resolution (e.g. rapidly changing spectrum']
});

db.combine.insert({
	name			: 'mean_m5',
	type			: 'combine',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 5, // we need to add window size to parameters in freq domain process
	parameter_file	: '.brk',
	command 		:['combine','mean','5','infile','-l','-h','-c','-z'], 
	range			:[0, 1],
	infile 			: 2,
	ifana			: true,
	extention 		: '.ana',
	time_vary		: [false, false, false, false, false],
	info 			:['Channel amp from file 1 : mean of two pitches. This program takes 2 input sounds and calculates the average of the 2 signals, spectral window by spectral window. The average in loudness between, for example, two speech sounds, should reach some vague mean between the formants of the speech components being used. The frequency average is altogether more strange. It may, for example, convert harmonic into inharmonic spectra. Seriously wierd.',
					  'Low frequency limit of channels to look at ',
					  'High frequency limit of channels to look at ',
					  'Number of significant channels to compare. Default: ALL within range 2.000000 to 4097.000000 ',
					  'Zeroes channels OUTSIDE the frequency range specified ',
					  'Analysis points: range from 128 - 256 - 512 - 1024 - 2048 - 4096 - 8192 - 16384:  More points give better freq resolution but worse time-resolution (e.g. rapidly changing spectrum']
});

db.combine.insert({
	name			: 'mean_m6',
	type			: 'combine',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 5, // we need to add window size to parameters in freq domain process
	parameter_file	: '.brk',
	command 		:['combine','mean','6','infile','-l','-h','-c','-z'], 
	range			:[0, 1],
	infile 			: 2,
	ifana			: true,
	extention 		: '.ana',
	time_vary		: [false, false, false, false, false],
	info 			:['Channel amp from file 1 : mean of two frequencies. This program takes 2 input sounds and calculates the average of the 2 signals, spectral window by spectral window. The average in loudness between, for example, two speech sounds, should reach some vague mean between the formants of the speech components being used. The frequency average is altogether more strange. It may, for example, convert harmonic into inharmonic spectra. Seriously wierd.',
					  'Low frequency limit of channels to look at ',
					  'High frequency limit of channels to look at ',
					  'Number of significant channels to compare. Default: ALL within range 2.000000 to 4097.000000',
					  'Zeroes channels OUTSIDE the frequency range specified ',
					  'Analysis points: range from 128 - 256 - 512 - 1024 - 2048 - 4096 - 8192 - 16384:  More points give better freq resolution but worse time-resolution (e.g. rapidly changing spectrum']
});

db.combine.insert({
	name			: 'mean_m7',
	type			: 'combine',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 5, // we need to add window size to parameters in freq domain process
	parameter_file	: '.brk',
	command 		:['combine','mean','7','infile','-l','-h','-c','-z'], 
	range			:[0, 1],
	infile 			: 2,
	ifana			: true,
	extention 		: '.ana',
	time_vary		: [false, false, false, false, false],
	info 			:['Max channel amp of 2 files : mean of two pitches. This program takes 2 input sounds and calculates the average of the 2 signals, spectral window by spectral window. The average in loudness between, for example, two speech sounds, should reach some vague mean between the formants of the speech components being used. The frequency average is altogether more strange. It may, for example, convert harmonic into inharmonic spectra. Seriously wierd.',
					  'Low frequency limit of channels to look at ',
					  'High frequency limit of channels to look at ',
					  'Number of significant channels to compare. Default: ALL within range 2.000000 to 4097.000000',
					  'Zeroes channels OUTSIDE the frequency range specified ',
					  'Analysis points: range from 128 - 256 - 512 - 1024 - 2048 - 4096 - 8192 - 16384:  More points give better freq resolution but worse time-resolution (e.g. rapidly changing spectrum']
});

db.combine.insert({
	name			: 'mean_m8',
	type			: 'combine',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 5, // we need to add window size to parameters in freq domain process
	parameter_file	: '.brk',
	command 		:['combine','mean','8','infile','-l','-h','-c','-z'], 
	range			:[0, 1],
	infile 			: 2,
	ifana			: true,
	extention 		: '.ana',
	time_vary		: [false, false, false, false, false],
	info 			:['Max channel amp of 2 files : mean of two frequencies. This program takes 2 input sounds and calculates the average of the 2 signals, spectral window by spectral window. The average in loudness between, for example, two speech sounds, should reach some vague mean between the formants of the speech components being used. The frequency average is altogether more strange. It may, for example, convert harmonic into inharmonic spectra. Seriously wierd.',
					  'Low frequency limit of channels to look at ',
					  'High frequency limit of channels to look at ',
					  'Number of significant channels to compare. Default: ALL within range 2.000000 to 4097.000000',
					  'Zeroes channels OUTSIDE the frequency range specified ',
					  'Analysis points: range from 128 - 256 - 512 - 1024 - 2048 - 4096 - 8192 - 16384:  More points give better freq resolution but worse time-resolution (e.g. rapidly changing spectrum']
});

db.combine.insert({
	name			: 'sum',
	type			: 'combine',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 2, // we need to add window size to parameters in freq domain process
	parameter_file	: '.brk',
	command 		:['combine','sum',' ','infile','-c' ], 
	range			:[0, 1],
	infile 			: 2,
	ifana			: true,
	extention 		: '.ana',
	time_vary		: [true, false],
	info 			:['SUM examines the amplitude levels in each channel of each of the two input analysis files. Where they differ, it adds this difference to the 1st file, as weighted by crossover. In other words, the result is infile plus the difference between it and infile2. When resynthesising, watch out for clipping',
					  'Crossover is the amount of 2nd spectrum which is added to the 1st (Range 0 to 1) ',
					  'Analysis points: range from 128 - 256 - 512 - 1024 - 2048 - 4096 - 8192 - 16384:  More points give better freq resolution but worse time-resolution (e.g. rapidly changing spectrum']
});

db.morph.insert({
	name			: 'bridge_m1',
	type			: 'morph',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 7, // we need to add window size to parameters in freq domain process
	parameter_file	: '.brk',
	command 		:['morph','bridge','1','infile','-a','-b','-c','-d','-e','-f'], 
	range			:[0, 1],
	infile 			: 2,
	ifana			: true,
	extention 		: '.ana',
	time_vary		: [true, false],
	info 			:['Make a bridging-interpolation between two sound spectra by interpolating between 2 time-specified windows in the 2 infiles',
					  'start time of startwindow for interpolation, in secs: Default: 0.0 ',
					  'end time of endwindow for interpolation, in secs: Default: end_of_file. Range 0 - 1',
					  'fraction of 2nd sounds frq interpolated at start; (Range: 0 to 1, Default 0)',
					  'fraction of 2nd sounds frq interpolated at end (Default 1)',
					  'fraction of 2nd sounds amp interpolated at start (Default 0)',
					  'fraction of 2nd sounds amp interpolated at end (Default 1)',
					  'Analysis points: range from 128 - 256 - 512 - 1024 - 2048 - 4096 - 8192 - 16384:  More points give better freq resolution but worse time-resolution (e.g. rapidly changing spectrum']

});

db.morph.insert({
	name			: 'bridge_m2',
	type			: 'morph',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 7, // we need to add window size to parameters in freq domain process
	parameter_file	: '.brk',
	command 		:['morph','bridge','2','infile','-a','-b','-c','-d','-e','-f'], 
	range			:[0, 1],
	infile 			: 2,
	ifana			: true,
	extention 		: '.ana',
	time_vary		: [true, false],
	info 			:['This process interpolates between two existing soundfiles. Unlike MORPH MORPH (formerly VOCINTE), this process interpolates between the fixed state of one sound at a specific time in that soundfile, and the fixed state of the 2nd sound at a specific time in that 2nd soundfile. The interpolation only works smoothly with sounds of quite stable spectrum.',
					  'start time of startwindow for interpolation, in secs: Default: 0.0 ',
					  'end time of endwindow for interpolation, in secs: Default: end_of_file. Range 0 - 1',
					  'fraction of 2nd sounds frq interpolated at start; (Range: 0 to 1, Default 0)',
					  'fraction of 2nd sounds frq interpolated at end (Default 1)',
					  'fraction of 2nd sounds amp interpolated at start (Default 0)',
					  'fraction of 2nd sounds amp interpolated at end (Default 1)',
					  'Analysis points: range from 128 - 256 - 512 - 1024 - 2048 - 4096 - 8192 - 16384:  More points give better freq resolution but worse time-resolution (e.g. rapidly changing spectrum']

});

db.morph.insert({
	name			: 'bridge_m3',
	type			: 'morph',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 7, // we need to add window size to parameters in freq domain process
	parameter_file	: '.brk',
	command 		:['morph','bridge','5','infile','-a','-b','-c','-d','-e','-f'], 
	range			:[0, 1],
	infile 			: 2,
	ifana			: true,
	extention 		: '.ana',
	time_vary		: [true, false],
	info 			:['This process interpolates between two existing soundfiles. Unlike MORPH MORPH (formerly VOCINTE), this process interpolates between the fixed state of one sound at a specific time in that soundfile, and the fixed state of the 2nd sound at a specific time in that 2nd soundfile. The interpolation only works smoothly with sounds of quite stable spectrum.',
					  'start time of startwindow for interpolation, in secs: Default: 0.0 ',
					  'end time of endwindow for interpolation, in secs: Default: end_of_file. Range 0 - 1',
					  'fraction of 2nd sounds frq interpolated at start; (Range: 0 to 1, Default 0)',
					  'fraction of 2nd sounds frq interpolated at end (Default 1)',
					  'fraction of 2nd sounds amp interpolated at start (Default 0)',
					  'fraction of 2nd sounds amp interpolated at end (Default 1)',
					  'Analysis points: range from 128 - 256 - 512 - 1024 - 2048 - 4096 - 8192 - 16384:  More points give better freq resolution but worse time-resolution (e.g. rapidly changing spectrum']

});

db.morph.insert({
	name			: 'glide',
	type			: 'morph',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 2, // we need to add window size to parameters in freq domain process
	parameter_file	: '.brk',
	command 		:['morph','glide',' ','infile',' '], 
	range			:[0, 60],
	infile 			: 2,
	ifana			: true,
	extention 		: '.ana',
	time_vary		: [false],
	info 			:['Interpolate, linearly, between 2 single analysis windows. Infile1 becomes the start value, channel by channel, and the data in infile2 becomes the end value, channel by channel. GLIDE creates a linear interpolation between the start and end values, channel by channel, over the duration specified',
					  'Duration: 1. Widely differing values over a short duration will result in dramatically rising or falling lines. 2. Scarcely differing values over a long duration will result in very subtle, gradual changes.',
					  'Analysis points: range from 128 - 256 - 512 - 1024 - 2048 - 4096 - 8192 - 16384:  More points give better freq resolution but worse time-resolution (e.g. rapidly changing spectrum']

});

db.morph.insert({
	name			: 'morph_m1',
	type			: 'morph',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 2, // we need to add window size to parameters in freq domain process
	parameter_file	: '.brk',
	command 		:['morph','morph','1','infile',' ',' ',' ',' ',' ',' '], 
	range			:[0, 60],
	infile 			: 2,
	ifana			: true,
	extention 		: '.ana',
	time_vary		: [false],
	info 			:['Interpolate, linearly, between 2 single analysis windows. Infile1 becomes the start value, channel by channel, and the data in infile2 becomes the end value, channel by channel. GLIDE creates a linear interpolation between the start and end values, channel by channel, over the duration specified. interpolate linearly (exp = 1), or over a curve of increasing slope: slow to faster (exp > 1) or decreasing slope: fast to slower (exp < 1)',
					  'Time in seconds when the amplitude interpolation begins',
					  'Time in seconds when the amplitude interpolation ends',
					  'time in seconds when the frequency interpolation begins',
					  'time in seconds when the frequency interpolation ends',
					  'Exponent of the amplitude interpolation',
					  'Exponent of the frequency interpolation',
					  'Analysis points: range from 128 - 256 - 512 - 1024 - 2048 - 4096 - 8192 - 16384:  More points give better freq resolution but worse time-resolution (e.g. rapidly changing spectrum']

});

db.morph.insert({
	name			: 'morph_m2', 
	type			: 'morph',
	mono_stereo		: 'mono',
	ifNoInputFile	: false,
	parameter_count : 2, // we need to add window size to parameters in freq domain process
	parameter_file	: '.brk',
	command 		:['morph','morph','2','infile',' ',' ',' ',' ',' ',' '], 
	range			:[0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
	infile 			: 2,
	ifana			: true,
	extention 		: '.ana',
	time_vary		: [false],
	info 			:['Interpolate over a cosinusoidal spline',
					  'Time in seconds when the amplitude interpolation begins',
					  'Time in seconds when the amplitude interpolation ends',
					  'time in seconds when the frequency interpolation begins',
					  'time in seconds when the frequency interpolation ends',
					  'Exponent of the amplitude interpolation',
					  'Exponent of the frequency interpolation',
					  'Analysis points: range from 128 - 256 - 512 - 1024 - 2048 - 4096 - 8192 - 16384:  More points give better freq resolution but worse time-resolution (e.g. rapidly changing spectrum']

});

//synth wave mode outfile sample_rate channels duration frequency [-aamplitude] [-ttablesize] [-f] 

db.synth.insert({
	name			: 'wave',
	type			: 'synth',
	mono_stereo		: 'mono',
	ifNoInputFile	: true, 
	parameter_count : 2, 
	parameter_file	: '.brk',
	command 		:['synth','wave',' ','outfile', '44100', '2', ' ', ' ','-a', '-t32768', '-f16' ], 
	range			:[0, 1],
	infile 			: 0,
	ifana			: false,
	extention 		: '.wav',
	time_vary		: [true, false],
	info 			:['Generate Waveform:  1 Sine wave  2 Square wave  3 Triangle wave  4 Ramp (sawtooth) wave',
					  'Select waveform 1 sine, Squere, Triangle, Rampsaw',
					  'duration – duration of outfile in seconds',
					  'frequency – frequency of outfile in Hz',
					  'Amplitude of outfile (0.0 < Range < 1.0 max & default']


});
