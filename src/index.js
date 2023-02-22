module.exports = function toReadable (number) {

    n1 = ['zero','one','two','tree','four','five','six','seven','eight','nine',
    'ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']

    x = number
    x = x+""
    res = ""

    if(x == 10) return 'ten'
    if(x>99) {
        res += parseHundreds(x)
        if (parseInt(x.slice(x.length-1,x.length))==0&&parseInt(x.slice(x.length-2,x.length-1))==0){
        res = res.slice(0,res.length-1)
        return res
        }
    }
    if(parseInt(x.slice(x.length-2,x.length))>=11&&parseInt(x.slice(x.length-2,x.length))<=19) {
        res+=n1[parseInt(x.slice(x.length-2,x.length))]
    
    }
    else {
    if(parseInt(x.slice(x.length-2,x.length-1))==0&&x>99) {
        res += parseNumerals(x)
        }
        else {
        if(parseInt(x.slice(x.length-1,x.length))==0&&x>19) {
        res += parseDecades(x)
        res = res.slice(0,res.length-1)
        }
        else res+= parseDecades(x)+parseNumerals(x)
    }
    }
    console.log(res)
    
   
