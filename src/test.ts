function log(target, propertyKey, descriptor) {
    console.log('*************')
}
class test{
    @log
    test(){
        console.log('test...')
    }
}

(new test()).test();