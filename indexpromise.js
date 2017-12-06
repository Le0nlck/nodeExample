var page = 57;
var result = [];
var limit = 10;
var offset = 0;

var getPage = function (offset, limit, parentResolve) {
    
    
        console.log("start page promise " + offset);
        return new Promise(function (pageResolve, pageReject) {
            setTimeout(function () {
                offset += limit;
    
                if (offset < 50) {
                    return getPage(offset, limit, pageResolve)
    
                } else {
                    return pageResolve()
                }
    
            }, 10);
        }).then(function () {
            console.log("end page promise " + offset);
            parentResolve();
        })
    }
    
    Run = function () {
        new Promise(function (RunResolve, RunReject) {
    
            return new Promise(function (startResolve, startReject) {
                return getPage(offset, limit, startResolve).then(function () {
                    RunResolve()
                })
            })
    
    
        }).then(function () {
            console.log("ok")
        });
    
    };
    
    Run();