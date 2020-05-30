(function () {
    'use strict';
    
    angular.module('Application', [])
.controller("AppController",function($scope){
            console.log("Fsdf");
    $scope.items="";
    $scope.checkIfTooMuch = function(){
        console.log("erw");

    $scope.message = messageGenerator($scope.items);
    }
    });

    function messageGenerator(items){
       
        let itemEntries = items.split(',');
        let noOfItems = itemEntries.length;
        let noOfEmpty=0;
        for(var i=0;i<noOfItems;i++){
        
            if(itemEntries[i].trim().length==0){
                noOfEmpty++;
            }
        }
        if(noOfEmpty!=0){
            noOfItems = noOfItems-noOfEmpty;
        }
        let message="";
        if(noOfItems==0 || items==""){
            message="Please enter data first";
        }
        else if(noOfItems<=3){
             message="Enjoy!";

        }else if(noOfItems>3 && noOfItems!=0){
            message ="Too much!";
        }
        return message;
    }

})();

