var procent;

function resize() {
    var width = parseInt(d3.select("body").style("width"));
  }
  
  d3.select(window).on('resize', resize); 
  resize();

function barWidth(){
  $('.bar').animate({ width: procent + "%"}, 1000);
}

function timeleft() {
    
    function updateTime() {
        var beginDatum = new Date(2014, 8, 4, 0, 0);              // 4 september 2014
        var eindDatum = new Date(2015, 5, 4, 0, 0);               // 4 juni 2015

        var huidigeDatum = new Date();                           

        var totaleTijd = eindDatum - beginDatum;                  // Totale tijd van de revalidatie (uitgaande van 9 maanden)
        var verstrekenTijd = huidigeDatum - beginDatum ;          // Totale tijd die al is verstreken (uitgaande van 9 maanden)
        var openstaandeTijd = eindDatum - huidigeDatum ;          // Totale tijd die nog te gaan is (uitgaande van 9 maanden)

        

        var seconden = Math.round(openstaandeTijd / 1000-0.5);
        var minuten = Math.round(seconden / 60-0.5);
        var uren = Math.round(minuten / 60-0.5);
        var dagen = Math.round(uren / 24-0.5);
        var weken = Math.round(dagen / 7-0.5);
        var maanden = Math.round(dagen / 30-0.5);
        var jaren = Math.round(dagen / 365-0.5);

        var verschilTijd = verstrekenTijd/totaleTijd;             // deel verstreken / totale tijd
          d3.select("#jaren").text(jaren);
          d3.select("#maanden").text(maanden);
          d3.select("#weken").text(weken);
          d3.select("#dagen").text(dagen);
          d3.select("#uren").text(uren);
          d3.select("#minuten").text(minuten);
          d3.select("#seconden").text(seconden);
        
        procent = verschilTijd * 100;
        Math.round(procent);
        if(a == 1){
        setInterval(updateTime, 1000); 
        }
      }
        updateTime();
        barWidth();
  
}

/*         function test(){
        var beginDatum = new Date(2014, 7, 12, 0, 0);
        var eindDatum = new Date(2015, 7, 11, 0, 0);
        }

*/

function timeleft2() {

    function updateTime2() {

        var beginDatum = new Date(2014, 7, 12, 0, 0);
        var eindDatum = new Date(2015, 7, 11, 0, 0);
        var huidigeDatum = new Date();                           

        var totaleTijd = eindDatum - beginDatum;                  // Totale tijd van de revalidatie (uitgaande van 9 maanden)
        var verstrekenTijd = huidigeDatum - beginDatum ;          // Totale tijd die al is verstreken (uitgaande van 9 maanden)
        var openstaandeTijd = eindDatum - huidigeDatum ;          // Totale tijd die nog te gaan is (uitgaande van 9 maanden)

        var seconden = Math.round(openstaandeTijd / 1000-0.5);
        var minuten = Math.round(seconden / 60-0.5);
        var uren = Math.round(minuten / 60-0.5);
        var dagen = Math.round(uren / 24-0.5);
        var weken = Math.round(dagen / 7-0.5);
        var maanden = Math.round(dagen / 30-0.5);
        var jaren = Math.round(dagen / 365-0.5);

        var verschilTijd = verstrekenTijd/totaleTijd;             // deel verstreken / totale tijd
          d3.select("#jaren").text(jaren);
          d3.select("#maanden").text(maanden);
          d3.select("#weken").text(weken);
          d3.select("#dagen").text(dagen);
          d3.select("#uren").text(uren);
          d3.select("#minuten").text(minuten);
          d3.select("#seconden").text(seconden);
        
        procent = verschilTijd * 100;
        Math.round(procent);
        console.log(a);

        if(a == 0){
        setInterval(updateTime2, 1000);
        
        }
      }
        updateTime2();
        barWidth(); 
}


function timeleft3() {

    function updateTime3() {

        var beginDatum = new Date(2014, 5, 12, 0, 0);           //June 15, 2014 laaste GoT aflevering
        var eindDatum = new Date(2015, 3, 8, 0, 0);            //April 8, 2015 season 5 release (1st episode)
        var huidigeDatum = new Date();                           

        var totaleTijd = eindDatum - beginDatum;                  
        var verstrekenTijd = huidigeDatum - beginDatum ;          
        var openstaandeTijd = eindDatum - huidigeDatum ;          

        var seconden = Math.round(openstaandeTijd / 1000-0.5);
        var minuten = Math.round(seconden / 60-0.5);
        var uren = Math.round(minuten / 60-0.5);
        var dagen = Math.round(uren / 24-0.5);
        var weken = Math.round(dagen / 7-0.5);
        var maanden = Math.round(dagen / 30-0.5);
        var jaren = Math.round(dagen / 365-0.5);

        var verschilTijd = verstrekenTijd/totaleTijd;             // deel verstreken / totale tijd
          d3.select("#jaren").text(jaren);
          d3.select("#maanden").text(maanden);
          d3.select("#weken").text(weken);
          d3.select("#dagen").text(dagen);
          d3.select("#uren").text(uren);
          d3.select("#minuten").text(minuten);
          d3.select("#seconden").text(seconden);
        
        procent = verschilTijd * 100;
        Math.round(procent);
        console.log(a);

        if(a == 0){
        setInterval(updateTime3, 1000);
        
        }
      }
        updateTime3();
        barWidth(); 
}










