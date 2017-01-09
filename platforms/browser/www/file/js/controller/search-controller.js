app.controller('searchController', function($http,$scope) { 
      $scope.image_url = thumb_pic;
      if(localStorage.getItem('categories')!= null){
        $scope.categories = JSON.parse(localStorage.getItem('categories'));
      }
      else
      {
        document.getElementById('loading').removeAttribute('style'); 
      }
   $http({
            method: 'GET',
            url: base_url+'get_cat_ios/0', 
            headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
        }).then(function successCallback(response) {
               document.getElementById('loading').setAttribute('style','display:none;'); 
               $scope.categories = response.data.category; 
               localStorage.setItem('categories',JSON.stringify($scope.categories)); 
        }, function errorCallback(response) {
                    document.getElementById('loading').setAttribute('style','display:none;'); 
                    ons.notification.alert({
                    title: 'خطا',
                    buttonLabel:"بستن " ,
                    message: 'خطا در برقراری ارتباط با سرور'
            }); 
          }); 

       
       $scope.push = function(){
         if(searchone.topPage.data.id !== undefined){

          if(searchone.topPage.data.id == 1){    
            
              let cat_id = searchone.topPage.data.cat_id; 
              document.getElementById('loading').removeAttribute('style');   
                $http({
                    method: 'GET',
                    url: base_url+'get_cat_ios/'+cat_id, 
                    headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
                }).then(function successCallback(response) {
                    document.getElementById('loading').setAttribute('style','display:none;'); 
                    $scope.subcategories = response.data.category; 
                }, function errorCallback(response) {
                    document.getElementById('loading').setAttribute('style','display:none;');    
                    ons.notification.alert({
                        title: 'خطا',
                        buttonLabel:"بستن " ,
                        message: 'خطا در برقراری ارتباط با سرور'
                    });
                });

          }

          if(searchone.topPage.data.id == 2){    
              $scope.img_url = product_thumb;
              let cat_id = searchone.topPage.data.cat_id; 
              document.getElementById('loading').removeAttribute('style'); 
              $http({
                  method: 'GET',
                  url: base_url+'banner_archive_ios/'+cat_id, 
                  headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
              }).then(function successCallback(response) {
                  document.getElementById('loading').setAttribute('style','display:none;'); 
                  $scope.jobs = response.data.jobs;  
                  console.log($scope.jobs);                  
              }, function errorCallback(response) {
                  document.getElementById('loading').setAttribute('style','display:none;'); 
                  ons.notification.alert({
                      title: 'خطا',
                      buttonLabel:"بستن " ,
                      message: 'خطا در برقراری ارتباط با سرور'
                  });
              });

          }

          if(searchone.topPage.data.id == 4){    
                $scope.logo_pic = uploads_pic;
                $scope.product_thumb = product_thumb;
                let id = searchone.topPage.data.job_id; 
               document.getElementById('loading').removeAttribute('style'); 
               $http({
                method: 'GET', 
                url: base_url+'banner_ios/'+id, 
                headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
              }).then(function successCallback(response) {
                    document.getElementById('loading').setAttribute('style','display:none;'); 
                    $scope.place = response.data.place; 
                    $scope.products = response.data.products;  
                
              }, function errorCallback(response) {
                        document.getElementById('loading').setAttribute('style','display:none;'); 
                        ons.notification.alert({
                        title: 'خطا',
                        buttonLabel:"بستن " ,
                        message: 'خطا در برقراری ارتباط با سرور'
                });
              });

          }
       
       } 
    };  

      $scope.jobBack = function(){
         $scope.place = ""; 
         $scope.products = ""; 
     }; 

     $scope.pop_cat = function(){
         $scope.subcategories = "";
     };

     $scope.sub_cat = function(){
        $scope.jobs = "";
     };

    

})
.controller('business', function() { 

})