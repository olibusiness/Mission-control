document.addEventListener('DOMContentLoaded', 

function api(){
    
    fetch('https://fdo.rocketlaunch.live/json/launches/next/5')

    .then(responce => responce.json())
    .then(data => {

        console.log(data.result)

        //What mission it is
        document.getElementById('mission')
        .innerText = ('Mission: '+data.result[0].missions[0].name)
        document.getElementById('mission1')
        .innerText = ('Mission: '+data.result[1].missions[0].name)
        document.getElementById('mission2')
        .innerText = ('Mission: '+data.result[2].missions[0].name)
        document.getElementById('mission3')
        .innerText = ('Mission: '+data.result[3].missions[0].name)
        document.getElementById('mission4')
        .innerText = ('Mission: '+data.result[4].missions[0].name)
        
        //all rocket name and company 
        document.getElementById('rocketName')
        .innerText = (data.result[0].provider.name + ', ' + data.result[0].vehicle.name)
        document.getElementById('rocketName1')
        .innerHTML = (data.result[1].provider.name + ', ' + data.result[1].vehicle.name);
        document.getElementById('rocketName2')
        .innerHTML = (data.result[2].provider.name + ', ' + data.result[2].vehicle.name);
        document.getElementById('rocketName3')
        .innerHTML = (data.result[3].provider.name + ', ' + data.result[3].vehicle.name);
        document.getElementById('rocketName4')
        .innerHTML = (data.result[4].provider.name + ', ' + data.result[4].vehicle.name);

        //finding where there launching from

        document.getElementById('whereFrom').innerHTML 
        = (data.result[0].pad.location.name + ', ' + data.result[0].pad.location.country);
        document.getElementById('whereFrom1').innerHTML
        = (data.result[1].pad.location.name + ', ' + data.result[1].pad.location.country);
        document.getElementById('whereFrom2').innerHTML
         = (data.result[2].pad.location.name + ', ' + data.result[2].pad.location.country);
        document.getElementById('whereFrom3').innerHTML
         = (data.result[3].pad.location.name + ', ' + data.result[3].pad.location.country);
        document.getElementById('whereFrom4').innerHTML
         = (data.result[4].pad.location.name + ', ' + data.result[4].pad.location.country);

         //rocket image
         let rocketType = data.result[0].vehicle.name
         let rocketType1 = data.result[1].vehicle.name
         let rocketType2 = data.result[2].vehicle.name
         let rocketType3 = data.result[3].vehicle.name
         let rocketType4 = data.result[4].vehicle.name

        //all time count downs
       timedown(data.result[0].date_str + " 2022", 'launch');
       timedown(data.result[1].date_str + " 2022", 'launch1');
       timedown(data.result[2].date_str + " 2022", 'launch2');
       timedown(data.result[3].date_str + " 2022", 'launch3');
       timedown(data.result[4].date_str + " 2022", 'launch4');

       function timedown(ti, id){

        var countDownDate = new Date(ti).getTime();


        var x = setInterval(function() {

            var now = new Date().getTime();
              
            var distance = countDownDate - now;
              
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
          
            document.getElementById(id).innerHTML = (days!=0 ? days + "d " : '') + (hours!= 0 ? hours + "h " : '')
            + (minutes != 0 ? minutes + "m " : '') + seconds + "s ";    
            
            if (distance < 0) {
              clearInterval(x);
              document.getElementById(id).innerHTML = "Launching";
            }
          }, 1000);
        }
              })
              
          
          })