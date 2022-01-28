function sleep(delay){
    return new Promise((resolve,reject) =>{
        if(typeof delay === 'number'){
            setTimeout(()=>{
                resolve({success:true});
            },delay)
        }else{
            reject({success:false});
        }
    })
}


//examples:



sleep(1000)
.then(res => console.log(res))
.catch(err => console.log(err,"invalid argument, promise accepts only valid numbers"))

sleep("100")
.then(res => console.log(res))
.catch(err => console.log(err,"invalid argument, promise accepts only valid numbers"))