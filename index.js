
var _os = require('os');
var _source = _os.hostname();
var _interval = parseInt(process.argv[1]) || 1000;

function poll()
{
	var cpus = _os.cpus();

	for(var idx = 0; idx < cpus.length; idx++)
	{
		var e = cpus[idx];
		var total = e.times.user + e.times.nice +
					e.times.sys + e.times.idle;
		var user = e.times.user / total;

		console.log('CPU_CORE %d %s-%d',
			user, _source, idx + 1);
	}

	setTimeout(poll, _interval);
}

poll();
