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

        

        var seconden = Math.round(openstaandeTijd / 1000);
        var minuten = Math.round(seconden / 60);
        var uren = Math.round(minuten / 60);
        var dagen = Math.round(uren / 24);
        var weken = Math.round(dagen / 7);
        var maanden = Math.round(dagen / 30);
        var jaren = Math.round(dagen / 365);

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
        console.log(procent);
        setTimeout(updateTime, 1000);
        
        }

        updateTime();
        barWidth();
  }
















