import doggosArray from './doggos';
class sandraButtonCtlr{
    constructor(){
        
    }
    showImg(){
        this.imagen = 'https://random.dog/'+ 
        doggosArray[Math.floor (Math.random() * 100)];
        this.texto = 'Hala';
        console.log(doggosArray[Math.floor (Math.random() * 100)] );
    }
}

export default sandraButtonCtlr;
