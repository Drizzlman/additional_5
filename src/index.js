module.exports = function check(str, bracketsConfig) {

    if(str.length % 2 !== 0){
        return 0;
    }

    else {
        for( var i = str.length - 1; i >= 0; i--) {
            for ( var j = 0; j < bracketsConfig.length; j++) {
                if (str[i] === bracketsConfig[j][0]) {
                    str = str.replace(bracketsConfig[j].join(''), '');
                }
            }
        }
        return str == '';

    }
}
