function truncate(str, maxLength){
    if(str.length > maxLength){
        return str.slice(0, maxLength - 1) + '…';
    }

}