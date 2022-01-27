var global = global || globalThis || (function () { return this; }());

if ((Console != undefined) && (logger != undefined)) {
    const console_org = global.console;
    var console = {}

    function toString(args) {
        return Array.prototype.map.call(args, x => {
            try {
                return x + '';
            } catch (err) {
                return err;
            }
        }).join(',');
    }

    console.log = function () {
        if (console_org) console_org.log.apply(null, Array.prototype.slice.call(arguments));
        let now = new Date()

        let prefix = "["+now.getHours()+":"+now.getMinutes()+":"+now.getSeconds()+" LOG] "
        Console.WriteLine(prefix + toString(arguments));
    }

    console.info = function () {
        if (console_org) console_org.info.apply(null, Array.prototype.slice.call(arguments));
        logger.Information(toString(arguments));
    }

    console.warn = function () {
        if (console_org) console_org.warn.apply(null, Array.prototype.slice.call(arguments));
        logger.Warning(toString(arguments));
    }

    console.error = function () {
        if (console_org) console_org.error.apply(null, Array.prototype.slice.call(arguments));
        logger.Error(toString(arguments));
    }

    global.console = console;
}
console.info("console init finished")
console.log("this is a log")
console.info("this is an info")
console.warn("this is a warn")
console.error("this is an error")