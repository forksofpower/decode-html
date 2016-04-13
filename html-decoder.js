/* htmlDecode v1.0.0 @forksofpower */
if (!String.prototype.htmlDecode) {
    (function() {
        if (this == null) {
            throw TypeError();
        }
        var htmlDecode = function() {
            var map = {"gt":">","amp":"&","lt":"<","apos":"\'"};
            return this.replace(/&(#(?:x[0-9a-f]+|\d+)|[a-z]+);?/gi, function($0, $1) {
                if ($1[0] === "#") {
                    return String.fromCharCode($1[1].toLowerCase() === "x" ? parseInt($1.substr(2), 16)  : parseInt($1.substr(1), 10));
                } else {
                    return map.hasOwnProperty($1) ? map[$1] : $0;
                }
            });
        };
        String.prototype.htmlDecode = htmlDecode;
    }());
}