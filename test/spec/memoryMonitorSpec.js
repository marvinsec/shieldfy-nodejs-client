var request = require('request');
var server = require('./expressServer')

describe("memory request",function () {
    
    it("should be pass",function (done) {
        request.post('http://localhost:3000/memory', {form:{key:'value'}}, function(err,res,body){
            expect(body).toEqual("hello world")
            done();
        })
    })

    it("should be blocked",function (done) {
        request.post('http://localhost:3000/memory', {form:{key:10}}, function(err,res,body){
            expect(body).not.toEqual("hello world")
            done();
        })
    })
    
})
