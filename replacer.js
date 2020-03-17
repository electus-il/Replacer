let inPut, outPut, inValue;
inPut = document.getElementById('in-put');
outPut = document.getElementById('out-put');

inPut.addEventListener('change', function(){
    outPut.value = replacer.replaceAll(inPut.value);
})

let replacer = {
    replace_X: function(item){
        for(let i = 0; i < item.length; i ++){
            if(item[i] == "x"){
                item = item.replace("x", "kh");
            }else if(item[i] == "X" && item[i+1] == item[i+1].toUpperCase()){
                item = item.replace("X", "KH");
            } else{
                item = item.replace("X", "Kh");
            }
        }
        return item;
    },
    replace_Ş: function(item){
        for(let i = 0; i < item.length; i ++){
            if(item[i] == "ş"){
                item = item.replace("ş", "sh");
            }else if(item[i] == "Ş" && item[i+1] == item[i+1].toUpperCase()){
                item = item.replace("Ş", "SH");
            } else{
                item = item.replace("Ş", "sh");
            }
        }
        return item;
    },
    replace_Ğ: function(item){
        for(let i = 0; i < item.length; i ++){
            if(item[i] == "ğ"){
                item = item.replace("ğ", "gh");
            }else if(item[i] == "Ğ" && item[i+1] == item[i+1].toUpperCase()){
                item = item.replace("Ğ", "GH");
            } else{
                item = item.replace("Ğ", "gh");
            }
        }
        return item;
    },
    replace_Ç: function(item){
        for(let i = 0; i < item.length; i ++){
            if(item[i] == "ç"){
                item = item.replace("ç", "ch");
            }else if(item[i] == "Ç" && item[i+1] == item[i+1].toUpperCase()){
                item = item.replace("Ç", "CH");
            } else{
                item = item.replace("Ç", "Ch");
            }
        }
        return item;
    },
    replace_Ə: function(item){
        for(let i = 0; i < item.length; i ++){
            if(item[i] == "ə"){
                item = item.replace("ə", "a");
            }else if(item[i] == "Ə"){
                item = item.replace("Ə", "A");
            }
        }
        return item;
    },
    replace_Ü: function(item){
        for(let i = 0; i < item.length; i ++){
            if(item[i] == "ü"){
                item = item.replace("ü", "u");
            }else if(item[i] == "Ü"){
                item = item.replace("Ü", "U");
            }
        }
        return item;
    },
    replace_Ö: function(item){
        for(let i = 0; i < item.length; i ++){
            if(item[i] == "ö"){
                item = item.replace("ö", "o");
            }else if(item[i] == "Ö"){
                item = item.replace("Ö", "O");
            }
        }
        return item;
    },
    replace_I: function(item){
        for(let i = 0; i < item.length; i ++){
            if(item[i] == "ı"){
                item = item.replace("ı", "i");
            }else if(item[i] == "I"){
                item = item.replace("I", "I");
            }
        }
        return item;
    },
    replace_İ: function(item){
        for(let i = 0; i < item.length; i ++){
            if(item[i] == "i"){
                item = item.replace("i", "i");
            }else if(item[i] == "İ"){
                item = item.replace("İ", "I");
            }
        }
        return item;
    },
    replaceAll: function(item){
        item = this.replace_X(item);
        item = this.replace_Ç(item);
        item = this.replace_Ş(item);
        item = this.replace_Ğ(item);
        item = this.replace_Ə(item);
        item = this.replace_Ü(item);
        item = this.replace_Ö(item);
        item = this.replace_I(item);
        item = this.replace_İ(item);
        return item;
    }
}