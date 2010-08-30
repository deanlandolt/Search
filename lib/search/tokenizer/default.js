var DoubleMetaphone = require("../double-metaphone").DoubleMetaphone;

exports.Tokenizer = function() {
    return {
        process: function(words){
            var result = [];
            for( var i=0; i<words.length; i++){
                    var word = words[i];
                    var metaphones = DoubleMetaphone(stemmer.process(word));
                    result.push(metaphones.primary);
                    if(metaphones.secondary!=null){
                            result.push(metaphones.secondary);
                    }
            }
            return result;
        }
    }
}