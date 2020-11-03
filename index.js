function add(options) {
    let sum = 0
    for (let i = 0; i < options.length; i++) {
            sum = sum + options[i];       
    }
   console.log(sum)
}


module.exports.add = add;